import axios from "axios";
import compare from "../../utils/sortArrayContent";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;


const githubToken = axios.create({
    baseURL: GITHUB_URL,
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`
    },
})


export const getUsers = async() => {
    const params = new URLSearchParams({
        q: 'uWaterloo',
        sort: 'updated',
        page: 1, 
        per_page: '50'
    });

    const paramsTwo = new URLSearchParams({
        q: 'university of waterloo',
        sort: 'updated',
        page: 1,
        per_page: '50'
    });

    const [response, responseTwo] = await Promise.all([
        githubToken.get(`/search/repositories?${params}`),
        githubToken.get(`/search/repositories?${paramsTwo}`),
      ])

    let responseResults = response.data.items.concat(responseTwo.data.items);

    // Sort Array Content: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
    let sortedResults = responseResults.sort( compare );

    // Remove Duplicates from a sorted array: https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
    sortedResults = sortedResults.filter((value, index, self) =>
            index === self.findIndex((t) => (
            t.place === value.place && t.name === value.name
        ))
    )

    return sortedResults
}
