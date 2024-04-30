// // @ts-ignore
// import { computed, makeObservable, observable } from "mobx";
//
// export interface Pokemon {
//     id: number;
//     name: string;
//     code: string;
// }
//
// class PokemonStore {
//     pokemon: Pokemon[] = [];
//     catalog: any = []
//     filter: string = "";
//
//     constructor() {
//         makeObservable(this, {
//             pokemon: observable,
//             filter: observable,
//             filteredPokemon: computed,
//         });
//     }
//
//     setPokemon(pokemon: Pokemon[]) {
//         this.pokemon = pokemon;
//     }
//
//     // get filteredPokemon() {
//     //     // @ts-ignore
//     //     // return this.pokemon.filter(({ name }) =>
//     //     //     // @ts-ignore
//     //     //     name.toLowerCase().includes(this.filter.toLowerCase())
//     //     // );
//     // }
//     async GetPokemon () {
//
//
//            console.log("444")
//             const options: any = {
//                 timeout: 10000,
//                 headers: {
//                     "Content-Type": "application/json; charset=utf-8",
//                     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQxLCJ0eXBlIjoiY2xpZW50QWRtaW4iLCJlbWFpbCI6ImxpdmU3N3Nwb3J0QGdtYWlsLmNvbSIsInNpdGVJZCI6NCwiY2xpZW50SWQiOjQ5OTM2LCJuYW1lIjoiMEp2UXRkQ3gwTFhRdE5DNDBMM1JnZEM2MExEUmp5RFFuZEN3MExUUXRkQzIwTFRRc0NEUW5kQzQwTHJRdnRDNzBMRFF0ZEN5MEwzUXNBPT0iLCJsYXN0X25hbWUiOiIwSnZRdGRDeDBMWFF0TkM0MEwzUmdkQzYwTERSanc9PSIsInNlY29uZF9uYW1lIjoiMEozUXVOQzYwTDdRdTlDdzBMWFFzdEM5MExBPSIsImlhdCI6MTY4NDQ4MDM2MSwiZXhwIjoxNjg0NTY2NzYxfQ.W2UjUjNMWCZgv0v4VRIq_eqUxHjO3SGX1Le9yzreICg`
//                 },
//                 mode: "cors",
//                 crossdomain: true,
//             }
//             const request = new Request("https://devnest.sellwin.by/property/filter/catalog?json=%7B%22clientId%22:49936,%22siteId%22:4%7D", options);
//             const response = await fetch(request);
//             const resp = response.json()
//             this.pokemon= await resp
//             // return this.pokemon ;
//             // const resp = await fetch(
//             //     "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
//             // );
//             // this.pokemon = await resp.json();
//
//     }
// }
//
// const store = new PokemonStore();
//
// export default store;