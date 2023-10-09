import { Movies } from 'src/models/movies.models';
import { Repository } from 'typeorm';
export declare class MovieService {
    private moviesRepository;
    constructor(moviesRepository: Repository<Movies>);
    findAll(): Promise<Movies[]>;
    findById(id: number): Promise<Movies>;
    create(movie: Movies): Promise<Movies>;
    update(movie: Movies): Promise<Movies>;
    delete(id: number): Promise<string>;
}
