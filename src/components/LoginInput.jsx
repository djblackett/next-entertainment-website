import styled from "@emotion/styled";

const InputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center; 
    justify-content: flex-end;
    width: 100%;
    
`


const InputField = styled.input`
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  background: transparent;
  color: white;
  font-weight: 300;
  outline: none;
  width: 100%;
  padding-left: 16px;
  padding-bottom: 16px;
  cursor: pointer;
  position: relative;
  caret-color: #FC4747;

  &:hover {
    border-bottom: 1px solid rgba(255, 255, 255, 1) !important;
    
  }
`

const Text = styled.p`
  color: red;
  position: absolute;
  bottom: 16px;
  right: 16px;
  font-weight: 300;
  

`


function LoginInputCustom({valid, errorText, placeholder, handleChange, type, id}) {

  return (
<InputContainer>
    <InputField placeholder={placeholder} type={type} style={{borderBottomColor: valid ? "rgba(255, 255, 255, 0.5)" : "red"}} onChange={handleChange} className={id} />
    {!valid && <Text>{errorText}</Text>}
  </InputContainer>
    
    

    
  )

}

export default LoginInputCustom;