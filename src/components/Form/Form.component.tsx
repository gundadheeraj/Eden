import { useState } from 'react'
import { formTemplate } from '../../helpers/formTemplate'
import { Button } from '../common/Button'
import './Form.css'


const Form: React.FunctionComponent<{currentPage: number, setCurrentPage: React.Dispatch<React.SetStateAction<number>>}> = (props) => {
    const [formInputData, setFormInputData] = useState({} as any)
    const [formComplete, setFormComplete] = useState(false)
    const [currentFormData, setCurrentFormData] = useState({})
    const formData = formTemplate.find(item => item.page === props.currentPage)
    const displaySubmittedData = () => {
        return Object.keys(formInputData).map(key => <p>{key}: {formInputData[key]}</p>)
    }
    const formSubmit = () => {
        setFormInputData({...{...formInputData, ...currentFormData}})
        setCurrentFormData({})
        if (formData?.submitText !== 'Launch Eden') {
            props.setCurrentPage(props.currentPage+1)
        } else {
            setFormComplete(true)
        }
    }
    return <div className='formStyles'>
            {formData?.completeIcon ? <div className='center'><img src={formData.completeIcon} /></div> : null}
            {formData?.title ? <h2>{formData.title}</h2> : null}
            {formData?.subTitle ? <p>{formData.subTitle}</p> : null}
            <div className='fieldStyles'>
                {formData?.fields.map((ele,index) => <ele.component {...ele.children} key={index} onChange={setCurrentFormData} currentData={currentFormData} data={formInputData}/>)}
            </div>
            {formData?.submitText ? <Button text={formData.submitText} onClick={formSubmit}/> : null}
            {formComplete ? <div className='submittedData'>SubmittedData<p>{displaySubmittedData()}</p></div> : <></>}
        </div>
}

export default Form