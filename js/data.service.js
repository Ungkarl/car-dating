const service = {};

service.getAccounts = async () => {
    try {
        const response = await fetch('/data/accounts.json')
        const accounts = await response.json();
        return accounts;
    }
    catch (error) {
        console.log(error)
    }
}

export default service