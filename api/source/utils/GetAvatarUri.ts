import axios from 'axios';

async function getAvatarUri(github_uri: string){
   let name_user = github_uri.split('/')[3];
   
   const response = await axios.get(`https://api.github.com/users/${name_user}`);
   
   return response.data.avatar_url;
}

export default getAvatarUri;