let Movies = new Map ();

Movies.set("Tenet", "Christopher Nolan");
Movies.set("A Perfect World", "Clint Eastwood");
Movies.set("Brother", "Aleksey Balabanov");
Movies.set("The Last Detail", "Hal Ashby");
Movies.set("Hell Up In Harlem", "Larry Hohen")

for (let [movie, director] of Movies) {
    console.log(`Фильм - ${movie}, Режиссёр - ${director}`);
}
