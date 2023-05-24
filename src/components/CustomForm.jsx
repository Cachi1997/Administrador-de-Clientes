/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
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
        />
      </div>
      <div className="mb-4">
        <label
          className="text-gray-800"
          htmlFor="compaby"
        >Company:</label>
        <input 
          id="company"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Client Company"
          name="company"
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
        />
      </div>
    </>
  )
}

export default CustomForm