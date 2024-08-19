﻿using Microsoft.EntityFrameworkCore;

namespace Chatgptgenerator.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<AppUser> Users { get; set; }
    }
}