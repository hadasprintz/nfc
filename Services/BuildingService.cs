using System.Collections.Generic;
using System.IO;
using System.Linq;
using HostServer.Models;

namespace HostServer.Services
{
    public class BuildingService
    {
        private readonly Dictionary<string, Building> _buildings;

        public BuildingService()
        {
            _buildings = new Dictionary<string, Building>
            {
                { "Soroka", new Building { Name = "Soroka", ImagePath = "images/soroka.jpg" } },
                { "Ichilov", new Building { Name = "Ichilov", ImagePath = "images/ichilov.jpg" } }
                // Add more buildings here
            };
        }

        public Building GetBuilding(string name)
        {
            _buildings.TryGetValue(name, out var building);
            return building;
        }
    }
}