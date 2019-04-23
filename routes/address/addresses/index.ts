
import { APIGatewayEvent, Context, Handler, Callback } from 'aws-lambda'
import { AddressBook} from '../../../controller/address/index'

export const addresses : Handler = async (event : APIGatewayEvent, context : Context, cb : Callback) => {


const addressBook = new AddressBook(null)
   const result = await addressBook.all()
   console.log(result)

    let columnDefs = [
        {headerName: 'NAME', field: 'name'},
        {headerName: 'EMAIL', field: 'email'},
        {headerName: 'PHONE', field: 'phone'}
      ];
    
    let rowData = [
          {name: 'John Doe', email: 'john@doe.com', phone: '562 (413) 2242'},
          {name: 'Si Mona', email: 'si@test.com', phone: '562 (413) 2882'},
      ];

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless Webpack (Typescript) v1.0! Your function addresses executed successfully!',
        columnDefs,
        rowData,
        input: event,
      }),
    };
  
    let myContext = context
    console.log(JSON.stringify(myContext))
  
    cb(null, response);
  }