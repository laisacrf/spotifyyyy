using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPOTIFY___API.Models
{
    public class Artista
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public byte[] FotoComprimida { get; set; }
    }
}