import fs from "node:fs/promises"
import { faker } from "@faker-js/faker"
import lodash from "lodash"

const { sumBy } = lodash
const uid = faker.database.mongodbObjectId
const { commerce, date, location, company, internet, phone } = faker
const { arrayElement: oneOf, multiple } = faker.helpers
const { numeric } = faker.string
const { amount } = faker.finance

const toJSON = (data: any) => JSON.stringify(data, null, 2)
const fmtAmount = (x: number) => Number(x.toFixed(2))
const maxOf = <T>(n: number, fn: () => T): ReturnType<typeof fn>[] =>
	multiple(fn, { count: { min: 1, max: n } })

const timestamps = () => ({
	createdAt: date.past({ years: 2 }),
	updatedAt: date.recent(),
})

function generateAccount() {
	return {
		id: uid(),
		city: location.city(),
		name: company.name(),
		email: internet.email(),
		phone: phone.number(),
		street: location.streetAddress(),
		country: location.country(),
		locality: location.city(),
		fiscalId: `${location.countryCode()}${numeric({ length: 13 })}`,
		registryId: `REG${numeric({ length: 8 })}`,
		postalCode: location.zipCode(),
	}
}

function generateInvoiceItem(invoiceId: string) {
	const vatRate = 20
	const price = amount({ min: 10, max: 300 })
	const quantity = numeric({ length: 1 })
	const subtotal = fmtAmount(Number(price) * Number(quantity))
	const vat = fmtAmount((vatRate * subtotal) / 100)
	const total = fmtAmount(subtotal + vat)

	return {
		name: commerce.productName(),
		description: commerce.productDescription(),
		code: numeric({ length: 3 }),
		unit: "piece",
		vatRate,
		price,
		quantity,
		vat,
		subtotal,
		total,
		discount: "",
		vatDiscount: 0,
		subtotalDiscount: 0,
		totalDiscount: 0,
		invoiceId,
		id: uid(),
		...timestamps(),
	}
}

function generateInvoice(provider: any, consumer: any) {
	const id = uid()
	const series = oneOf(["SERIES1", "SERIES2", "SERIES2"])
	const number = numeric({ allowLeadingZeros: true, length: 6 })

	const items = maxOf(3, () => generateInvoiceItem(id))
	const vat = fmtAmount(sumBy(items, "vat"))
	const subtotal = fmtAmount(sumBy(items, "subtotal"))
	const total = fmtAmount(sumBy(items, "total"))
	const amount = fmtAmount(vat + total)

	return {
		id,
		accountId: consumer.id,
		status: oneOf(["PENDING", "PAID", "DRAFT"]),
		code: `${series}${number}`,
		series,
		number,
		items,
		vat,
		subtotal,
		total,
		amount,
		discount: 0,
		paidAt: null,
		dueAt: date.recent(),
		...timestamps(),
		provider,
		consumer,
	}
}

const accounts = maxOf(100, generateAccount)
const invoices = maxOf(500, () => generateInvoice(oneOf(accounts), oneOf(accounts)))

fs.writeFile("./source/accounts.json", toJSON(accounts))
fs.writeFile("./source/invoices.json", toJSON(invoices))
