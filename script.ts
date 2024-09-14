// listing element
document.getElementById('resumeFrom')?.addEventListener('submit', function(event){
    event.preventDefault();
    
    // Get references to form elements using their IDs 
const profilePictureInput = document.getElementById('profilePicture') as  HTMLInputElement; 

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const EmailElement = document.getElementById('email') as HTMLInputElement;
    const PhoneElement = document.getElementById('phone') as HTMLInputElement;
    const EducationElement = document.getElementById('education') as HTMLInputElement;
    const ExperienceElement = document.getElementById('experience') as HTMLInputElement;
    const SkillsElement = document.getElementById('skills') as HTMLInputElement;

 // **
 const usernameElement = document.getElementById(
    "username"
 )   as HTMLInputElement;
    if( profilePictureInput && nameElement && EmailElement && PhoneElement && EducationElement && ExperienceElement && SkillsElement) {
      
// ** 
    usernameElement


        const name = nameElement.value;
        const email = EmailElement.value;
        const phone = PhoneElement.value;
        const education =EducationElement.value;
        const experience =ExperienceElement.value;
        const skills = SkillsElement.value;
    

// **
const username = usernameElement.value;
const uniquepath = `resume/${username.replace(/\s+/g, '_')}_ cv.html`



// profile elements
const profilePicturefile = profilePictureInput.files?.[0]
const profilePictureURL =profilePicturefile ? URL.createObjectURL(profilePicturefile) : "";



    // create resume output
    const resumeOutput = `
    <h2>Resume</h2>
    ${profilePictureURL ? ` <img scr="${profilePictureURL}" alt="Profile Picture" class="Profile Picture">` : "" }  
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>phone:</strong> ${phone}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Work Experience</h3>
    <p>${ExperienceElement}</p>
    <h3>skills</h3>
    <p>${skills}</p>


    `    
// **
const downloadlink = document.createElement('a')
downloadlink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent (resumeOutput)
downloadlink.download =uniquepath;
downloadlink.textContent='download your 2024 Resume';





  // rusumeOutput
    const resumeOutputElement = document.getElementById('resumeOutput')

    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput   
        
// **
resumeOutputElement.appendChild(downloadlink)

 
    
        makeEditable();
    }
}else{
    console.error('One or more Output Element are missing')

}
})


function makeEditable(){
    const editableElements = document.querySelectorAll ('.editable') ;
    editableElements.forEach(element => {
        element.addEventListener('click',function(){
        const currentelement = element as HTMLElement;
        const currentValue =currentelement.textContent || "";
        // replace content
        if(currentelement.tagName  === "p" ||currentelement.tagName === "SPAN" ) {
            const input = document.createElement('input')
            input.type ='text'
            input.value =currentValue
            input.classList.add('editing input')

            
            input.addEventListener('blur',function(){
                currentelement.textContent = input.value;
                currentelement.style.display = 'inline'
                input.remove
            })





            currentelement.style.display ='none'
            currentelement.parentNode?.insertBefore(input,currentelement)
            input.focus()


        }

    })
    })
}