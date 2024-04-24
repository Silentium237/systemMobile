class CRUDService {

    get = async (value) => {
        const options = {
            timeout: 10000,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            mode: "cors",
            crossdomain: true,
        }
        let url = `https://api.telegram.org/bot5572897114:AAGxwP9x0iYeE73hv1aKIqpYcrw0kl56M8c/sendMessage?chat_id=-1001870818708&parse_mode=Markdown&text=${value}`
        const request = new Request(url, options);
        const response = await fetch(request);
        return response.json();
    }

}

export default CRUDService;