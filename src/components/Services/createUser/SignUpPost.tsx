export default function SignUpPost(signUpName:String, navigate:Function) {
    if (signUpName !=='') {
    fetch('https://wue0h09e48.execute-api.sa-east-1.amazonaws.com/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: "cors",
      body: JSON.stringify({
        email: 'string',
        password: 'string',
        name: signUpName,
        lastname: 'string',
        dietType: {
          omnivorous: true,
          celiacDisease: false,
          diabetes: false,
          lactoseIntolerance: false,
          lactovegetarian: false,
          ovolactovegetarian: false,
          ovovegetarian: false,
          pescetarian: false,
          vegan: false,
        }
      })
    }).then(response => {
        if (!response.ok){throw new Error('Network response not ok')}
        })    
      .then(response => {
        navigate("/")
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    }
    else{console.error('Usuário não pode ser nulo')}
  }