import { useNavigate, Form, useActionData } from "react-router-dom"
import CustomForm from "../components/CustomForm"
import Error from "../components/Error"

//This is another way of handle a submit
export async function action({request}){
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const email = formData.get("email")
  //Validation
  const errors = []
  if(Object.values(data).includes("")){
    errors.push("Todos los campos son obligatorios")
  }

  // eslint-disable-next-line no-control-regex
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])")//regular expresion

  if(!regex.test(email)){
    errors.push("El email no es valido")
  }

  //Return data if error occurs
  if(Object.keys(errors).length){
    return errors
  }

  return {ok : true}
}

function NewClient() {

  const errors = useActionData()
  const navigate = useNavigate()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New Client</h1>
      <p className="mt-3">Fill all the blank spaces to add a client</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}//Navigates to the previous page
        >
          Return
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">

        {errors?.length && errors.map( (error, i) => <Error key={i}>{error}</Error>)}
        
        <Form
          method="post"
          noValidate//Deactivate html5 validation
        >
          <CustomForm />
          <input 
            type="submit"
            className="mt-5 w-full bg-blue-800 text-white p-3 uppercase font-bold text-lg hover:cursor-pointer"
            value="Add Client"
          />
        </Form>
      </div>

    </>
  )
}

export default NewClient