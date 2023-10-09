import { Movies } from '../../models/movies.models';
import { MovieService } from 'src/services/movie/movie.service';
export declare class MovieController {
    private moviesService;
    constructor(moviesService: MovieService);
    get(): Promise<{
        success: boolean;
        data: Movies[];
    }>;
    save(movie: Movies): Promise<{
        success: boolean;
        data: Movies;
    }>;
    update(movie: Movies): Promise<{
        success: boolean;
        data: Movies;
    }>;
    delete(id: any): Promise<{
        success: boolean;
        data: string;
    }>;
}
