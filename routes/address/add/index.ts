
import { Context, Handler, Callback } from 'aws-lambda';
import { AddressBook} from '../../../controller/address/index'
// APIGatewayEvent,
export const addressAdd : Handler = async (event : any, context : Context, cb : Callback) => {
    interface Address {
        name: string;
        email: string;
        phone: string;
        id: string;
    }
    const address: Address = Object.assign({}, event);
    const addressBook = new AddressBook()
    const result = await addressBook.add(address)
    
    const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Your addressAdd function executed successfully!',
          result,
          input: event,
        }),
    };
    
    let myContext = context
    console.log(JSON.stringify(myContext))
    
    cb(null, response);
  }