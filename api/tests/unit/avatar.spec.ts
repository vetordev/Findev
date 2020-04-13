import getAvatarUri from "../../source/utils/GetAvatarUri";

describe('Avatar Github URI', () => {
   it('Deve retornar a URI do avatar', async () => {
      const github_uri = "https://github.com/diego3g";

      const avatar_uri = await getAvatarUri(github_uri);
      console.log(avatar_uri);
      expect(avatar_uri).not.toBeUndefined();
   })
});