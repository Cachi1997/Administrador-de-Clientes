/* eslint-disable react/no-unknown-property */
const CustomForm = ({client}) => {
  return (
    <>
      <div className="mb-4">
        <label
          className="text-gray-800"
          htmlFor="name"
        >Name:</label>
        <input 
          id="name"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Client Name"
          name="name"
          defaultValue={client?.name}
        />
      </div>
      <div className="mb-4">
        <label
          className="text-gray-800"
          htmlFor="company"
        >Company:</label>
        <input 
          id="company"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Client Company"
          name="company"
          defaultValue={client?.company}
        />
      </div>

      <div className="mb-4">
        <label
          className="text-gray-800"
          htmlFor="email"
        >E-mail:</label>
        <input 
          id="email"
          type="email"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Client Email"
          name="email"
          defaultValue={client?.email}
        />
      </div>

      <div className="mb-4">
        <label
          className="text-gray-800"
          htmlFor="contact"
        >Contact:</label>
        <input 
          id="contact"
          type="tel"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Client Contact"
          name="contact"
          defaultValue={client?.contact}
        />
      </div>

      <div className="mb-4">
        <label
          className="text-gray-800"
          htmlFor="notes"
        >Notes:</label>
        <textarea
          as="textarea"
          id="notes"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
          placeholder="Client Notes"
          name="notes"
          defaultValue={client?.notes}
        />
      </div>
    </>
  )
}

export default CustomForm