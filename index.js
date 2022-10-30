import { NFTStorage, File } from 'nft.storage'
const client = new NFTStorage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDg2NGI0NkFFYjIzZGEwRTVGM0M1RDQyRDIxMDk4NUNGODBCRmMwN2IiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NzA2MjU3ODIzNywibmFtZSI6Ik5MRyJ9.mjaO1s2NVwlxpmlbXV7svcuVSD75bWyq4ncSrgSd48g' })

async function main() {
  const metadata = await client.store({
    name: 'Pinpie',
    description: 'Pin is not delicious beef!',
    image: new File(
      [
        /* data */
      ],
      'pinpie.jpg',
      { type: 'images/png' }
    ),
  })
  console.log(metadata.url)
  // ipfs://bafyreib4pff766vhpbxbhjbqqnsh5emeznvujayjj4z2iu533cprgbz23m/metadata.json
}

main()
