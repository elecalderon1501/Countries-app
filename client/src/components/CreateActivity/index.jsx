import React from 'react'


function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = 'A name is required';
    } else if (!input.nickname) {

    }
    return errors;
};

export default function ActivityCreate (){
    const dispatch = useDispatch()
    const history = useNavigate ()
    const activities = useSelector((state) => state.occupations)
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name:"",
        dificulty:"",
        duration:"",
        season:"",
        countries:[]
    })
function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    setErrors(validate({
        ...input, 
        [e.target.name] : e.target.value
    }))
    console.log(input)
}



}