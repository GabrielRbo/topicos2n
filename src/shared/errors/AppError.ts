class AppError {
    public readonly message: string;
    public readonly statusCode: number;

    constructor(message: string, statuCode: number){
        this.message = message;
        this.statusCode = statuCode;
    }

}

export default AppError