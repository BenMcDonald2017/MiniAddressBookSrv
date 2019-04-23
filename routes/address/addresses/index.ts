
import { APIGatewayEvent, Context, Handler, Callback } from 'aws-lambda'
import { AddressBook} from '../../../controller/address/index'

export const addresses : Handler = async (event : APIGatewayEvent, context : Context, cb : Callback) => {
    const addressBook = new AddressBook()
    const result = await addressBook.all()
    console.log(result)

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless Webpack (Typescript) v1.0! Your function addresses executed successfully!',
        result,
        input: event,
      }),
    };
  
    let myContext = context
    console.log(JSON.stringify(myContext))
  
    cb(null, response);
  }