import React from 'react';

const Formfields = (props) => {
    const renderFields=()=>{
        const formArray=[]; 
        for(let elementName in props.formData)
        {
            formArray.push({
                id:elementName,
                settings:props.formData[elementName]

            }
            )
        }

//    console.log(props.formData);

     return formArray.map((item,i)=>{
         return(
             <div key={i} className="form_element">
         {renderTsmplet(item)}
             </div>
         )
     })
    }
    const showLebel=(show,label)=>{
        return show?
        <label>{label}</label>
        :null
    }
    const changeHandeler=(e,id,blur)=>{
        const newState=props.formData;
        newState[id].value=e.target.value;
        if(blur){
            let valiData=validate(newState[id]);
            newState[id].valid=valiData[0];
            newState[id].validationMessage=valiData[1]
        }
        newState[id].touched=true;
      props.change(newState);

    }
    const validate=(ele)=>{
       // console.log(ele);
        let error =[true,'']

        if(ele.validation.minLen){
            const valid =ele.value.length >= ele.validation.minLen;
            const messsage=`${!valid ? 'must be grater then'+ele.validation.minLen :''}`
            error=!valid ?[valid,messsage]:error
        }


         if(ele.validation.required){
            const valid=ele.value.trim()!=='';
            const message=`${!valid ? 'this field is required':''}`;
            error=!valid?[valid,message]:error
         }
        return error;

    }
const showValidation = (data)=>{
    let errorMeassage=null;
    if(data.validation&&!data.valid){
    errorMeassage=(<div className='label_error'>
        {data.validationMessage}
    </div>)
}
return errorMeassage;
}


     const renderTsmplet=(data)=>{
         let formTamplet='';
         let values=data.settings;
       
         switch (values.element) {
             case ('input'):
                 formTamplet=(
                 <div>
                     {showLebel(values.lavel,values.lavelText)}
                     <input {...values.config}
                     value={values.value}
                     onBlur={
                        (e)=>changeHandeler(e,data.id,true)
                     }
                     onChange={
                         (e)=>changeHandeler(e,data.id)
                      }
                     />
                     {showValidation(values)}
                 </div>)
                 break;
            case('textarea'):
            formTamplet=(
                <div>
                    {showLebel(values.lavel,values.lavelText)}
                    <textarea {...values.config}
                    value={values.value}
                    onChange={
                        (e)=>changeHandeler(e,data.id)
                    }
                    />
                </div>)
                break;
                case('select'):
            formTamplet=(
                <div>
                    {showLebel(values.lavel,values.lavelText)}
                    <select
                    value={values.value}
                    name={values.config.name}
                    onChange={
                        (e)=>changeHandeler(e,data.id)
                    }
                    >{values.config.options.map((item,i)=>{
                        return(
                    <option key={i} value={item.val}>
                        {item.text}
                    </option>)}
                    )
                    }
                   </select>
                </div>)
                break;
             default:
                formTamplet=null;
         }
         return formTamplet;

     }
    
    return (
        <div>
            {renderFields()}
        </div>
    );
};

export default Formfields;