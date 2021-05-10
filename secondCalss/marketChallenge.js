const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const marketProducts = ["arroz", "feijão", "melancia", "suco", "alface", "ovo", "frango", "hamburguer"];

const validateList = (marketList) => {
    if (!marketList) { //verifies if the list is empty "", false, null or undefined
        throw Error("The list must not be empty!");
    }

    const wantedItems = marketList.split(",");
    const invalidItems = wantedItems.filter(item => !item.trim()).length;

    if (invalidItems > 0) {
        throw Error(`There are ${invalidItems} invalid items`);
    }

    return wantedItems;
}

const getAvailability = (list) => {
    const availableProducts = [];
    const unavailableProducts = [];

    for (const item of list) {
        const formatedItem = item.trim().toLowerCase();
        if (marketProducts.includes(formatedItem)) {
            availableProducts.push(formatedItem);
        } else {
            unavailableProducts.push(formatedItem);
        }
    }

    return {
        availableProducts,
        unavailableProducts
    }
}

reader.question("Enter the product list separated by commas:\n", userProducts => {
    try {
        const validList = validateList(userProducts);
        const availability = getAvailability(validList);

        console.log(`The following products are available: `, availability.availableProducts);
        console.log(`The folowing items are unavailable: `, availability.unavailableProducts);

        const unavailableOrdered = availability.unavailableProducts.sort((product1, product2) => product1.localeCompare(product2));

        console.log('Available products alphabetically ordered: ', unavailableOrdered);
    } catch (e) {
        console.log(`Erro while processing list (${e.message})`);
    } finally {
        reader.close();
    }
});