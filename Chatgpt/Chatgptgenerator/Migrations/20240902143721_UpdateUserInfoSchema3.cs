using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Chatgptgenerator.Migrations
{
    /// <inheritdoc />
    public partial class UpdateUserInfoSchema3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserInfo_Age",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "UserInfo_Gender",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "UserInfo_Height",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "UserInfo_Token",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "UserInfo_UserName",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "UserInfo_Weight",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "UserInfo_WorkoutProgram",
                table: "Users");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserInfo_Age",
                table: "Users",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "UserInfo_Gender",
                table: "Users",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "UserInfo_Height",
                table: "Users",
                type: "REAL",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "UserInfo_Token",
                table: "Users",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "UserInfo_UserName",
                table: "Users",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "UserInfo_Weight",
                table: "Users",
                type: "REAL",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "UserInfo_WorkoutProgram",
                table: "Users",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
