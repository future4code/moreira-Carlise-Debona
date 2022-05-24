```
### Exercício 1

__a)__

interface User {
	name: string
	balance: number
}.

__b)__

function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}.

### Exercício 1

```
describe("Testing our functions", () => {
```

__a)__

```
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 5000
	}

	const result = performPurchase(user, 40)

	expect(result).toEqual({
		name: "Astrodev",
		balance: 120
	})
})

```

__b)__

```
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 200
	}

	const result = performPurchase(user, 500)

	expect(result).toEqual({
		...user,
		balance: 0
	})
})
```

__c)__

```
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 400
	}

	const result = performPurchase(user, 500)

	expect(result).not.toBeDefined()
})

}) 
```