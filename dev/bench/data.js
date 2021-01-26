window.BENCHMARK_DATA = {
  "lastUpdate": 1611658098509,
  "repoUrl": "https://github.com/ColinEberhardt/assemblyscript-regex",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colin.eberhardt@gmail.com",
            "name": "Colin E",
            "username": "ColinEberhardt"
          },
          "committer": {
            "email": "colin.eberhardt@gmail.com",
            "name": "Colin E",
            "username": "ColinEberhardt"
          },
          "distinct": true,
          "id": "90d7af11986e7a5c255e3a8178c2defe8aac77c5",
          "message": "benchmarking tweaks",
          "timestamp": "2021-01-26T10:47:01Z",
          "tree_id": "bbd46a6ecc0f5fb552d1a92204007a12234f383d",
          "url": "https://github.com/ColinEberhardt/assemblyscript-regex/commit/90d7af11986e7a5c255e3a8178c2defe8aac77c5"
        },
        "date": 1611658095462,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "baseline",
            "value": 104747,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "character class",
            "value": 34180,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "concatenation",
            "value": 8078,
            "range": "±0.73%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "quantifiers",
            "value": 14246,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "range quantifiers",
            "value": 4751,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "alternation",
            "value": 15850,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "multiple regex matches",
            "value": 1672,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "84 samples"
          }
        ]
      }
    ]
  }
}