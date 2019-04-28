export interface Repositories{
    avatar_url: string;
    stargazers_count: string;
    forks: string;
    name: string;
    language: string;
    description: string;
}

export class RepositoryObj implements Repositories{
    avatar_url: string;
    stargazers_count: string;
    forks: string;
    name: string;
    language: string;
    description: string;

    constructor(item?: Repositories) {
        if (item != undefined) {
            for (let key in item) {
                try { this[key] = item[key]; }
                catch (e) { }
            }
        }
    }

}