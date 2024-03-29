const [ allValues, setAllValues ] = useState({
  mobile: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const changeHandler = e => {
  setAllValues({...allValues, [e.target.name]: e.target.value})
}

return (
  <input type="text"
    className="form-control"
    id="mobile"
    name="mobile"
    placeholder="Enter a valid mobile number"
    onChange={changeHandler}
  />
  // ...
)