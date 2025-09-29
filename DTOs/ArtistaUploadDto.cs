using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPOTIFY___API.DTOs
{
    public class ArtistaUploadDto
    {
        public string Nome { get; set; }

        public IFormFile Foto { get; set; }
    }
}