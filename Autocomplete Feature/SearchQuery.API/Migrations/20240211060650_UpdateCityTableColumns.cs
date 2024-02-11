using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SearchQuery.API.Migrations
{
    public partial class UpdateCityTableColumns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CityName",
                table: "Cities",
                newName: "city_name");

            migrationBuilder.AddColumn<string>(
                name: "city_code",
                table: "Cities",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "state_code",
                table: "Cities",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "city_code",
                table: "Cities");

            migrationBuilder.DropColumn(
                name: "city_name",
                table: "Cities");

            migrationBuilder.RenameColumn(
                name: "state_code",
                table: "Cities",
                newName: "CityName");
        }
    }
}
