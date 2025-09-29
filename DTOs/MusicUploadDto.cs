    using Microsoft.AspNetCore.Http;

    namespace SPOTIFY___API.DTOs
    {
        public class MusicaUploadDto
        {
            public string Titulo { get; set; }
            public string Artista { get; set; }
            public string Genero { get; set; }
            public int Duracao { get; set; }
            public IFormFile Arquivo { get; set; }
            public IFormFile Capa { get; set; }
        }
    }
