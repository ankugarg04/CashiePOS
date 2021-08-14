import React, {useState} from 'react'

function UserForm() {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    age:"",
  });
  const handleFormChange = (e) => {
    let newFormData = {...formData};
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    async function createUser() {
      let result = await fetch(
        "https://60f5dd0818254c00176e0066.mockapi.io/student",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
"Content-type": "applications/json",
          },
        },
      );
      console.log(result);
    }
    createUser();
  };
    return (
        <div className="user-form border p-4 mt-5 rounded shadow-3">
            <form onSubmit={handleFormSubmit} onChange={handleFormChange} action="">
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">
    Name
    </label>
    <input type="text"
     className="form-control" 
     id="exampleFormControlInput1" 
     placeholder="Name" />
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">
    Email address
    </label>
    <input type="email"
     className="form-control" 
     id="exampleFormControlInput1" 
     placeholder="name@example.com" />

</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">
   Age
    </label>
    <input type="number"
     className="form-control" 
     id="exampleFormControlInput1" 
     placeholder="" />

</div>
<button type="submit" className="btn btn-dark">
					Submit
				</button>
</form>
        </div>
    )
}

export default UserForm;
