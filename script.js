var _a;
// listing element
(_a = document.getElementById('resumeFrom')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get references to form elements using their IDs 
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var EmailElement = document.getElementById('email');
    var PhoneElement = document.getElementById('phone');
    var EducationElement = document.getElementById('education');
    var ExperienceElement = document.getElementById('experience');
    var SkillsElement = document.getElementById('skills');
    // **
    var usernameElement = document.getElementById("username");
    if (profilePictureInput && nameElement && EmailElement && PhoneElement && EducationElement && ExperienceElement && SkillsElement) {
        // ** 
        usernameElement;
        var name_1 = nameElement.value;
        var email = EmailElement.value;
        var phone = PhoneElement.value;
        var education = EducationElement.value;
        var experience = ExperienceElement.value;
        var skills = SkillsElement.value;
        // **
        var username = usernameElement.value;
        var uniquepath = "resume/".concat(username.replace(/\s+/g, '_'), "_ cv.html");
        // profile elements
        var profilePicturefile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : "";
        // create resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilePictureURL ? " <img scr=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"Profile Picture\">") : "", "  \n    <p><strong>Name:</strong> ").concat(name_1, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>phone:</strong> ").concat(phone, "</p>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <h3>Work Experience</h3>\n    <p>").concat(ExperienceElement, "</p>\n    <h3>skills</h3>\n    <p>").concat(skills, "</p>\n\n\n    ");
        // **
        var downloadlink = document.createElement('a');
        downloadlink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadlink.download = uniquepath;
        downloadlink.textContent = 'download your 2024 Resume';
        // rusumeOutput
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            // **
            resumeOutputElement.appendChild(downloadlink);
            makeEditable();
        }
    }
    else {
        console.error('One or more Output Element are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentelement = element;
            var currentValue = currentelement.textContent || "";
            // replace content
            if (currentelement.tagName === "p" || currentelement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing input');
                input_1.addEventListener('blur', function () {
                    currentelement.textContent = input_1.value;
                    currentelement.style.display = 'inline';
                    input_1.remove;
                });
                currentelement.style.display = 'none';
                (_a = currentelement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentelement);
                input_1.focus();
            }
        });
    });
}
