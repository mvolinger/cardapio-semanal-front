export default function  DeleteMenu(MenuId: string) {
fetch('https://wue0h09e48.execute-api.sa-east-1.amazonaws.com/api/menus/' + MenuId, {
method: 'DELETE',
headers: {'accept': '*/*'}
})
}