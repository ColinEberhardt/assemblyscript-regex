window.BENCHMARK_DATA = {
  "lastUpdate": 1611670083258,
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
      },
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
          "id": "0410bb344efdae50dc57d92ab7bc72f7e9bd72e9",
          "message": "changed the module entry-point",
          "timestamp": "2021-01-26T14:06:18Z",
          "tree_id": "f38bf3a8644863f88d8adf9c98e1927cb27a9ffa",
          "url": "https://github.com/ColinEberhardt/assemblyscript-regex/commit/0410bb344efdae50dc57d92ab7bc72f7e9bd72e9"
        },
        "date": 1611670082315,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "baseline",
            "value": 96166,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "character class",
            "value": 31942,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "concatenation",
            "value": 7340,
            "range": "±1.67%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "quantifiers",
            "value": 13391,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "range quantifiers",
            "value": 4398,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "alternation",
            "value": 15241,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "multiple regex matches",
            "value": 1581,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "91 samples"
          }
        ]
      }
    ]
  }
}