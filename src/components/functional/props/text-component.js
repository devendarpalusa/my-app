const TextComponent=(props)=>{
  const {title,children}=props
  console.log(props,"props")
  return(
 <>


  {children}
  {title}
 </>
  )
}
export default TextComponent
