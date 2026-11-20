# The World Today — 20 November 2026, in Pictures

Sum up 20 November's world news in one image: a front page, 1024×1024, with
the nine biggest stories of Friday 20 November 2026, each with its own
photograph.

- **Lead:** Cyclone Akvan slams into the coast — storm surge, tens of
  thousands evacuated.
- **Kyiv:** a ballistic barrage hits three bridges over the Dnipro; 8 killed,
  28 hurt across nine regions.
- **Climate:** COP31 ends in deadlock on its final day.
- **Markets:** Asian stocks plunge in an AI sell-off; Japan's Nikkei falls
  4.8% after Anthropic's debut.
- **Riyadh:** a Houthi missile damages the sovereign wealth fund tower.
- **Crimea:** the Kerch Bridge is struck a third time; rail traffic halts.
- **Culture:** GTA VI tops $2.3bn in day-one sales.
- **Poland:** Russia violates Polish airspace with two missiles and a drone.
- **Health:** Kenya beats Ebola — the last patient is discharged, 37 days
  after the first case.

An "Also today" strip adds breadth: Trump delays his Iran decision to the new
year, Estonia will close its Russia border, Iraq moves on Kataib Hezbollah,
the UK pledges 1,000 drones for Kyiv, the Senate passes an energy bill 62–33.

The photographs are AI-generated illustrations of the reported events. The
program holds the finished image as `entry.png` and copies it to
`/output/entry.png` (no network, deterministic — both runs write the same
bytes).

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see LICENSE.
