---
title: "Why SQLite Still Wins"
date: "2026-08-13"

layout: ../../layouts/PostLayout.astro
description: "The world's most deployed database, its one real weakness, and why a Rust rewrite might finally fix it."

img_path : "/joshua-reddekopp-tFwJIwKEvjA-unsplash.jpg"
img_alt: "A single flat file sitting on a desk"

tags: ["#Tech", "#Opinion", "#Business"]
---

## What SQLite Actually Is

For anyone who hasn't run into it directly, [SQLite](https://en.wikipedia.org/wiki/SQLite) is a [relational database](https://en.wikipedia.org/wiki/Relational_database) that doesn't run as a [server](https://en.wikipedia.org/wiki/Server_(computing)). The entire database is a single file sitting on [disk](https://en.wikipedia.org/wiki/Disk_storage), and your [application](https://en.wikipedia.org/wiki/Application_software) talks to it directly through a [library](https://en.wikipedia.org/wiki/Library_(computing)).

It's probably the most deployed piece of [database software](https://en.wikipedia.org/wiki/Database) on Earth, and most people who use it every day have no idea they're using it. It's in your [phone](https://en.wikipedia.org/wiki/Smartphone), your [browser](https://en.wikipedia.org/wiki/Web_browser), and half the [apps](https://en.wikipedia.org/wiki/Mobile_app) on it.

---

## The Philosophy Behind It

The thing that earned my respect for SQLite is the [philosophy](https://en.wikipedia.org/wiki/Philosophy) underneath the engineering.

[D. Richard Hipp](https://en.wikipedia.org/wiki/D._Richard_Hipp) built SQLite back in 2000 and, along with his small team, made a decision that still feels almost radical today: the entire codebase is released into the [public domain](https://en.wikipedia.org/wiki/Public_domain). No [MIT](https://en.wikipedia.org/wiki/MIT_License) or [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License). In fact, there is no license at all, because there's nothing to license. Anyone can take it and never owe a single line of [attribution](https://en.wikipedia.org/wiki/Attribution_(copyright)).

This small but punchy team doesn't run on [venture capital](https://en.wikipedia.org/wiki/Venture_capital) and they do not chase [ads](https://en.wikipedia.org/wiki/Advertising). SQLite and the systems supporting it are funded through paid support contracts with companies that depend on it. While this [business model](https://en.wikipedia.org/wiki/Business_model) is vastly different from others, it is also a luxury. With that being said, it is a testement to build software that is reliable enough so serious companies will pay just to keep it boring.

The reliability isn't a marketing claim. SQLite's [test suite](https://en.wikipedia.org/wiki/Test_suite) is famous for having somewhere north of 100% [branch coverage](https://en.wikipedia.org/wiki/Code_coverage), which means the tests actually outnumber the [source code](https://en.wikipedia.org/wiki/Source_code) by a wide margin. This is the kind of dedication missing from modern software.

---

## The One Real Weakness

I can't pretend that SQLite is flawless. Its known weak spot is [concurrency](https://en.wikipedia.org/wiki/Concurrency_(computer_science)).

SQLite allows many simultaneous [readers](https://en.wikipedia.org/wiki/Read-write_lock), but only one [writer](https://en.wikipedia.org/wiki/Write_(system_call)) at a time. Even with [WAL mode](https://www.sqlite.org/wal.html) turned on, which loosens things up considerably, you're still bound to a single writer at the file level. For a mobile app or a small internal tool this is a non-issue. For something with real [write throughput](https://en.wikipedia.org/wiki/Throughput) coming from many different machines at once, this is where SQLite starts to show its age.

## Turso and the Rust Rewrite

A team spun out a project called [Turso](https://turso.tech/), built on [libSQL](https://github.com/tursodatabase/libsql), which reimplements the core of SQLite in [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)) rather than [C](https://en.wikipedia.org/wiki/C_(programming_language)).

The Rust rewrite opens the door to an [async](https://en.wikipedia.org/wiki/Async/await) runtime, native replication across machines, and eventually a real path toward concurrent writers without giving up the things that made SQLite great in the first place.

The original C implementation will likely never be obsolete. That means the ideas Hipp's team spent 25 years proving out are now solid enough that someone else is comfortable rebuilding the foundation underneath them in a safer language. That's a compliment!

---

## Playing With It in Go

SQLite is everywhere partly because it's trivial to embed. Here's a small example in [Go](https://en.wikipedia.org/wiki/Go_(programming_language)) using [modernc.org/sqlite](https://pkg.go.dev/modernc.org/sqlite), a pure-Go driver, so there's no [CGO](https://pkg.go.dev/cmd/cgo) or C toolchain required at all.

```go
package main

import (
	"database/sql"
	"log"

	_ "modernc.org/sqlite"
)

func main() {
	db, err := sql.Open("sqlite", "notes.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// WAL mode lets readers keep working while a write is in flight.
	if _, err := db.Exec("PRAGMA journal_mode=WAL;"); err != nil {
		log.Fatal(err)
	}

	_, err = db.Exec(`CREATE TABLE IF NOT EXISTS notes (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		body TEXT NOT NULL
	)`)
	if err != nil {
		log.Fatal(err)
	}
}
```

If you fire off concurrent writes without a [busy timeout](https://www.sqlite.org/c3ref/busy_timeout.html), you'll hit `database is locked` almost immediately:

```go
// Without this, concurrent writers fail fast instead of waiting their turn.
if _, err := db.Exec("PRAGMA busy_timeout = 5000;"); err != nil {
	log.Fatal(err)
}

stmt, err := db.Prepare("INSERT INTO notes (body) VALUES (?)")
if err != nil {
	log.Fatal(err)
}
defer stmt.Close()

if _, err := stmt.Exec("first note"); err != nil {
	log.Fatal(err)
}
```

The `busy_timeout` line tells SQLite to wait up to five seconds for the [lock](https://en.wikipedia.org/wiki/Lock_(computer_science)) to clear instead of immediately erroring out, which is the simplest way to smooth over the single-writer model for light concurrent workloads. It's a workaround that works for a lot of situations.

---

## Conclusion

SQLite doesn't have a flashy [cloud console](https://en.wikipedia.org/wiki/Cloud_computing) and it doesn't need one. What it has is 25 years of a small team proving that boring, heavily tested, license-free software can quietly become the most widely deployed database on the planet without tweets, VC funding, or a launch party.

Photo by <a href="https://unsplash.com/@joshuaryanphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joshua Reddekopp</a> on <a href="https://unsplash.com/photos/white-printer-paper-tFwJIwKEvjA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>