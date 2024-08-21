
export default function CreateMenuPost(mealDescriptionName: string,userId: string,navigate: Function,setResultDiv: Function) {
    if (mealDescriptionName === ''){mealDescriptionName = 'Cardápio'}
    fetch ('https://wue0h09e48.execute-api.sa-east-1.amazonaws.com/api/menus', {
    method: 'POST',
    headers: {
    'accept': '*/*',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    description: mealDescriptionName,
    userId: userId,
    }),
    })
    .then(response => {
      if (!response.ok) {
        setResultDiv(<><h4>Erro, tente novamente</h4></>)
      }
      return response.json();
    })
    .then(response => {
      setResultDiv(<><h4>{'"' + mealDescriptionName + '" foi criado com sucesso'}</h4><button className='NormalButton' onClick={() => {navigate('/getMeals')}}>Ver cardápios</button></>)
    })
    .catch(error => {
      setResultDiv(<><h4>Erro, tente novamente</h4></>)
    });    
  }