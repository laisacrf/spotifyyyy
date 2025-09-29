using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SPOTIFY___API.Models;
using Microsoft.EntityFrameworkCore.Infrastructure;
namespace SPOTIFY___API.Context
{
    public class MusicaContext : DbContext
    {
        public MusicaContext(DbContextOptions<MusicaContext> options) : base(options)
        { }
        public DbSet<Musica> Musicas { get; set; }
        public DbSet<Artista> Artistas { get; set; }
    }
}