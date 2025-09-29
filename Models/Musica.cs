using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPOTIFY___API.Models
{
    public class Musica
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Artista { get; set; }
        public string Genero { get; set; }
        public int Duracao { get; set; }
        public byte[] ArquivoComprimido { get; set; }
        public byte[] CapaDoAlbum { get; set; }
    }
}