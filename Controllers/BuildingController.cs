using Microsoft.AspNetCore.Mvc;
using HostServer.Services;

namespace HostServer.Controllers
{
    public class BuildingController : Controller
    {
        private readonly BuildingService _buildingService;

        public BuildingController(BuildingService buildingService)
        {
            _buildingService = buildingService;
        }

        [HttpGet("{name}")]
        public IActionResult GetBuildingImage(string name)
        {
            var building = _buildingService.GetBuilding(name);
            if (building == null)
            {
                return NotFound();
            }

            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", building.ImagePath);
            if (!System.IO.File.Exists(filePath))
            {
                return NotFound();
            }

            var fileBytes = System.IO.File.ReadAllBytes(filePath);
            return File(fileBytes, "image/jpeg");
        }
    }
}