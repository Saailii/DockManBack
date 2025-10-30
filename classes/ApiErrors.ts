import Sentry from "../utils/sentry.js";


export default class ApiError {
    error: string = "";
    status: number = 0;


    reply() {

        switch (this.status) {
            case 500:
                Sentry.captureException(this.error)
                break;
            default:
                break;
        }

    }


}