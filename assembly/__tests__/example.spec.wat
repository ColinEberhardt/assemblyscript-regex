(module
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_=>_none (func (param i32)))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (type $none_=>_none (func))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $none_=>_i32 (func (result i32)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $i32_i32_i32_i32_i32_i32_i32_i32_i32_i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) (result i32)))
 (import "env" "memory" (memory $0 1))
 (data (i32.const 1036) "(\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00(\00\00\00a\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e\00")
 (data (i32.const 1100) "\1e\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00p\00u\00r\00e\00.\00t\00s\00")
 (data (i32.const 1164) "\1e\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s\00")
 (data (i32.const 1228) "\1c\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h\00")
 (data (i32.const 1276) "&\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s\00")
 (data (i32.const 1340) "\02\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00|\00")
 (data (i32.const 1372) "\02\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00.\00")
 (data (i32.const 1404) "\02\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00?\00")
 (data (i32.const 1436) "\02\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00*\00")
 (data (i32.const 1468) "\02\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00+\00")
 (data (i32.const 1500) "\1a\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\1a\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s\00")
 (data (i32.const 1548) "\0e\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00e\00x\00a\00m\00p\00l\00e\00")
 (data (i32.const 1596) "\n\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00w\00o\00r\00k\00s\00")
 (data (i32.const 1628) "\04\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\04\00\00\00a\00*\00")
 (data (i32.const 1660) "\00\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\00\00\00\00")
 (data (i32.const 1692) "$\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e\00")
 (data (i32.const 1756) "^\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00^\00\00\00E\00l\00e\00m\00e\00n\00t\00 \00t\00y\00p\00e\00 \00m\00u\00s\00t\00 \00b\00e\00 \00n\00u\00l\00l\00a\00b\00l\00e\00 \00i\00f\00 \00a\00r\00r\00a\00y\00 \00i\00s\00 \00h\00o\00l\00e\00y\00")
 (data (i32.const 1884) "\02\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00(\00")
 (data (i32.const 1916) "$\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00$\00\00\00K\00e\00y\00 \00d\00o\00e\00s\00 \00n\00o\00t\00 \00e\00x\00i\00s\00t\00")
 (data (i32.const 1980) "\16\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\16\00\00\00~\00l\00i\00b\00/\00m\00a\00p\00.\00t\00s\00")
 (data (i32.const 2028) "\1c\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\1c\00\00\00A\00r\00r\00a\00y\00 \00i\00s\00 \00e\00m\00p\00t\00y\00")
 (data (i32.const 2076) "\08\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00n\00u\00l\00l\00")
 (data (i32.const 2108) "\02\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00)\00")
 (data (i32.const 2140) "\n\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\n\00\00\00k\00e\00y\00s\00 \00")
 (data (i32.const 2172) "\04\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\04\00\00\00,\00 \00")
 (data (i32.const 2204) "\0c\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00S\00t\00r\00i\00n\00g\00")
 (data (i32.const 2236) "\06\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\06\00\00\00a\00a\00a\00")
 (data (i32.const 2268) "\08\00\00\00\01\00\00\00\00\00\00\00\0b\00\00\00\08\00\00\00\01\00\00\00\00\00\00\00")
 (data (i32.const 2300) "\00\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2332) "\08\00\00\00\01\00\00\00\00\00\00\00\0b\00\00\00\08\00\00\00\02\00\00\00\00\00\00\00")
 (data (i32.const 2364) "\06\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\06\00\00\00y\00e\00s\00")
 (data (i32.const 2396) "\04\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\04\00\00\00n\00o\00")
 (data (i32.const 2428) "\04\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\04\00\00\00a\00b\00")
 (data (i32.const 2460) "\08\00\00\00\01\00\00\00\00\00\00\00\0d\00\00\00\08\00\00\00\03\00\00\00\00\00\00\00")
 (data (i32.const 2492) "\08\00\00\00\01\00\00\00\00\00\00\00\0d\00\00\00\08\00\00\00\04\00\00\00\00\00\00\00")
 (data (i32.const 2524) "\08\00\00\00\01\00\00\00\00\00\00\00\0d\00\00\00\08\00\00\00\05\00\00\00\00\00\00\00")
 (data (i32.const 2556) "\14\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\14\00\00\00~\00l\00i\00b\00/\00r\00t\00.\00t\00s\00")
 (data (i32.const 2608) "\0f\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00p\08\82\00\00\00\00\00\00\00\00\00\00\00\00\00\10A\82\00\00\00\00\00\02A\00\00\00\00\00\00\"A\00\00\00\00\00\00 \00\00\00\00\00\00\00\"A\00\00\00\00\00\000\t\02\00\00\00\00\00 \00\00\00\00\00\00\00\"\t\00\00\00\00\00\00 \00\00\00\00\00\00\00\"\01\00\00\00\00\00\00")
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (import "rtrace" "onalloc" (func $~lib/rt/rtrace/onalloc (param i32)))
 (import "rtrace" "onmove" (func $~lib/rt/rtrace/onmove (param i32 i32)))
 (import "rtrace" "onfree" (func $~lib/rt/rtrace/onfree (param i32)))
 (import "rtrace" "onresize" (func $~lib/rt/rtrace/onresize (param i32 i32)))
 (import "rtrace" "onincrement" (func $~lib/rt/rtrace/onincrement (param i32)))
 (import "__aspect" "createReflectedValue" (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/createReflectedValue (param i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) (result i32)))
 (import "__aspect" "attachStackTraceToReflectedValue" (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/attachStackTraceToReflectedValue (param i32)))
 (import "__aspect" "logReflectedValue" (func $node_modules/@as-pect/assembly/assembly/internal/log/logReflectedValue (param i32)))
 (import "__aspect" "reportTestTypeNode" (func $node_modules/@as-pect/assembly/assembly/internal/Test/it (param i32 i32)))
 (import "__aspect" "reportGroupTypeNode" (func $node_modules/@as-pect/assembly/assembly/internal/Test/describe (param i32 i32)))
 (import "rtrace" "ondecrement" (func $~lib/rt/rtrace/ondecrement (param i32)))
 (table $0 6 funcref)
 (elem (i32.const 1) $assembly/index/addNextState~anonymous|0 $assembly/index/search~anonymous|0 $start:assembly/__tests__/example.spec~anonymous|0~anonymous|0 $start:assembly/__tests__/example.spec~anonymous|0 $start:node_modules/@as-pect/assembly/assembly/internal/noOp~anonymous|0)
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $assembly/index/operatorPrecedence (mut i32) (i32.const 0))
 (global $assembly/index/st (mut i32) (i32.const 0))
 (global $node_modules/@as-pect/assembly/assembly/internal/log/ignoreLogs (mut i32) (i32.const 0))
 (global $~argumentsLength (mut i32) (i32.const 0))
 (global $~started (mut i32) (i32.const 0))
 (global $~lib/rt/pure/CUR (mut i32) (i32.const 0))
 (global $~lib/rt/pure/END (mut i32) (i32.const 0))
 (global $~lib/rt/pure/ROOTS (mut i32) (i32.const 0))
 (global $~lib/rt/__rtti_base i32 (i32.const 2608))
 (export "_start" (func $~start))
 (export "memory" (memory $0))
 (export "table" (table $0))
 (export "__new" (func $~lib/rt/pure/__new))
 (export "__renew" (func $~lib/rt/pure/__renew))
 (export "__retain" (func $~lib/rt/pure/__retain))
 (export "__release" (func $~lib/rt/pure/__release))
 (export "__rtti_base" (global $~lib/rt/__rtti_base))
 (export "__call" (func $node_modules/@as-pect/assembly/assembly/internal/call/__call))
 (export "__ignoreLogs" (func $node_modules/@as-pect/assembly/assembly/internal/log/__ignoreLogs))
 (export "__disableRTrace" (func $start:node_modules/@as-pect/assembly/assembly/internal/noOp~anonymous|0))
 (export "__getUsizeArrayId" (func $node_modules/@as-pect/assembly/assembly/internal/RTrace/__getUsizeArrayId))
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 272
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const -4
  i32.and
  local.tee $2
  i32.const 1073741820
  i32.lt_u
  i32.const 0
  local.get $2
  i32.const 12
  i32.ge_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 274
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 256
  i32.lt_u
  if
   local.get $2
   i32.const 4
   i32.shr_u
   local.set $2
  else
   local.get $2
   i32.const 31
   local.get $2
   i32.clz
   i32.sub
   local.tee $3
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $2
   local.get $3
   i32.const 7
   i32.sub
   local.set $3
  end
  local.get $2
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $3
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 287
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load offset=8
  local.set $4
  local.get $1
  i32.load offset=4
  local.tee $5
  if
   local.get $5
   local.get $4
   i32.store offset=8
  end
  local.get $4
  if
   local.get $4
   local.get $5
   i32.store offset=4
  end
  local.get $1
  local.get $0
  local.get $2
  local.get $3
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  i32.eq
  if
   local.get $0
   local.get $2
   local.get $3
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   local.get $4
   i32.store offset=96
   local.get $4
   i32.eqz
   if
    local.get $0
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    local.tee $4
    i32.load offset=4
    i32.const -2
    local.get $2
    i32.rotl
    i32.and
    local.set $1
    local.get $4
    local.get $1
    i32.store offset=4
    local.get $1
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const -2
     local.get $3
     i32.rotl
     i32.and
     i32.store
    end
   end
  end
 )
 (func $~lib/rt/tlsf/insertBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 200
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load
  local.tee $4
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 202
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  local.get $1
  i32.load
  i32.const -4
  i32.and
  i32.add
  local.tee $5
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  if
   local.get $4
   i32.const -4
   i32.and
   i32.const 4
   i32.add
   local.get $2
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.const 1073741820
   i32.lt_u
   if
    local.get $0
    local.get $5
    call $~lib/rt/tlsf/removeBlock
    local.get $1
    local.get $3
    local.get $4
    i32.const 3
    i32.and
    i32.or
    local.tee $4
    i32.store
    local.get $1
    i32.const 4
    i32.add
    local.get $1
    i32.load
    i32.const -4
    i32.and
    i32.add
    local.tee $5
    i32.load
    local.set $2
   end
  end
  local.get $4
  i32.const 2
  i32.and
  if
   local.get $1
   i32.const 4
   i32.sub
   i32.load
   local.tee $3
   i32.load
   local.tee $7
   i32.const 1
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 1184
    i32.const 223
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $7
   i32.const -4
   i32.and
   i32.const 4
   i32.add
   local.get $4
   i32.const -4
   i32.and
   i32.add
   local.tee $8
   i32.const 1073741820
   i32.lt_u
   if (result i32)
    local.get $0
    local.get $3
    call $~lib/rt/tlsf/removeBlock
    local.get $3
    local.get $8
    local.get $7
    i32.const 3
    i32.and
    i32.or
    local.tee $4
    i32.store
    local.get $3
   else
    local.get $1
   end
   local.set $1
  end
  local.get $5
  local.get $2
  i32.const 2
  i32.or
  i32.store
  local.get $4
  i32.const -4
  i32.and
  local.tee $3
  i32.const 1073741820
  i32.lt_u
  i32.const 0
  local.get $3
  i32.const 12
  i32.ge_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 238
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  local.get $1
  i32.const 4
  i32.add
  i32.add
  local.get $5
  i32.ne
  if
   i32.const 0
   i32.const 1184
   i32.const 239
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $5
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $3
  i32.const 256
  i32.lt_u
  if
   local.get $3
   i32.const 4
   i32.shr_u
   local.set $3
  else
   local.get $3
   i32.const 31
   local.get $3
   i32.clz
   i32.sub
   local.tee $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $3
   local.get $4
   i32.const 7
   i32.sub
   local.set $6
  end
  local.get $3
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $6
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 255
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $3
  local.get $6
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  local.set $4
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  local.get $4
  i32.store offset=8
  local.get $4
  if
   local.get $4
   local.get $1
   i32.store offset=4
  end
  local.get $0
  local.get $3
  local.get $6
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $6
  i32.shl
  i32.or
  i32.store
  local.get $0
  local.get $6
  i32.const 2
  i32.shl
  i32.add
  local.tee $0
  local.get $0
  i32.load offset=4
  i32.const 1
  local.get $3
  i32.shl
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  local.get $2
  i32.gt_u
  if
   i32.const 0
   i32.const 1184
   i32.const 380
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.set $1
  local.get $2
  i32.const -16
  i32.and
  local.get $0
  i32.load offset=1568
  local.tee $2
  if
   local.get $1
   local.get $2
   i32.const 4
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1184
    i32.const 387
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $2
   local.get $1
   i32.const 16
   i32.sub
   i32.eq
   if
    local.get $2
    i32.load
    local.set $4
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
   end
  else
   local.get $1
   local.get $0
   i32.const 1572
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1184
    i32.const 400
    i32.const 5
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $1
  i32.sub
  local.tee $2
  i32.const 20
  i32.lt_u
  if
   return
  end
  local.get $1
  local.get $4
  i32.const 2
  i32.and
  local.get $2
  i32.const 8
  i32.sub
  local.tee $2
  i32.const 1
  i32.or
  i32.or
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $2
  local.get $1
  i32.const 4
  i32.add
  i32.add
  local.tee $2
  i32.const 2
  i32.store
  local.get $0
  local.get $2
  i32.store offset=1568
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/initialize
  (local $0 i32)
  (local $1 i32)
  memory.size
  local.tee $0
  i32.const 1
  i32.lt_s
  if (result i32)
   i32.const 1
   local.get $0
   i32.sub
   memory.grow
   i32.const 0
   i32.lt_s
  else
   i32.const 0
  end
  if
   unreachable
  end
  i32.const 2736
  i32.const 0
  i32.store
  i32.const 4304
  i32.const 0
  i32.store
  loop $for-loop|0
   local.get $1
   i32.const 23
   i32.lt_u
   if
    local.get $1
    i32.const 2
    i32.shl
    i32.const 2736
    i32.add
    i32.const 0
    i32.store offset=4
    i32.const 0
    local.set $0
    loop $for-loop|1
     local.get $0
     i32.const 16
     i32.lt_u
     if
      local.get $0
      local.get $1
      i32.const 4
      i32.shl
      i32.add
      i32.const 2
      i32.shl
      i32.const 2736
      i32.add
      i32.const 0
      i32.store offset=96
      local.get $0
      i32.const 1
      i32.add
      local.set $0
      br $for-loop|1
     end
    end
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
  i32.const 2736
  i32.const 4308
  memory.size
  i32.const 16
  i32.shl
  call $~lib/rt/tlsf/addMemory
  i32.const 2736
  global.set $~lib/rt/tlsf/ROOT
 )
 (func $~lib/rt/tlsf/prepareSize (param $0 i32) (result i32)
  local.get $0
  i32.const 1073741820
  i32.ge_u
  if
   i32.const 1056
   i32.const 1184
   i32.const 461
   i32.const 30
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 12
  local.get $0
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.get $0
  i32.const 12
  i32.le_u
  select
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if
   local.get $1
   i32.const 4
   i32.shr_u
   local.set $1
  else
   i32.const 31
   local.get $1
   i32.const 1
   i32.const 27
   local.get $1
   i32.clz
   i32.sub
   i32.shl
   i32.add
   i32.const 1
   i32.sub
   local.get $1
   local.get $1
   i32.const 536870910
   i32.lt_u
   select
   local.tee $1
   i32.clz
   i32.sub
   local.set $2
   local.get $1
   local.get $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $1
   local.get $2
   i32.const 7
   i32.sub
   local.set $2
  end
  local.get $1
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $2
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 333
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const -1
  local.get $1
  i32.shl
  i32.and
  local.tee $1
  if (result i32)
   local.get $0
   local.get $1
   i32.ctz
   local.get $2
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=96
  else
   local.get $0
   i32.load
   i32.const -1
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.tee $1
   if (result i32)
    local.get $0
    local.get $1
    i32.ctz
    local.tee $1
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    local.tee $2
    i32.eqz
    if
     i32.const 0
     i32.const 1184
     i32.const 346
     i32.const 18
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    local.get $2
    i32.ctz
    local.get $1
    i32.const 4
    i32.shl
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
   else
    i32.const 0
   end
  end
 )
 (func $~lib/rt/tlsf/prepareBlock (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  i32.load
  local.set $3
  local.get $2
  i32.const 4
  i32.add
  i32.const 15
  i32.and
  if
   i32.const 0
   i32.const 1184
   i32.const 360
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const -4
  i32.and
  local.get $2
  i32.sub
  local.tee $4
  i32.const 16
  i32.ge_u
  if
   local.get $1
   local.get $2
   local.get $3
   i32.const 2
   i32.and
   i32.or
   i32.store
   local.get $2
   local.get $1
   i32.const 4
   i32.add
   i32.add
   local.tee $1
   local.get $4
   i32.const 4
   i32.sub
   i32.const 1
   i32.or
   i32.store
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $1
   local.get $3
   i32.const -2
   i32.and
   i32.store
   local.get $1
   i32.const 4
   i32.add
   local.tee $0
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.get $0
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   i32.load
   i32.const -3
   i32.and
   i32.store
  end
 )
 (func $~lib/rt/tlsf/allocateBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/prepareSize
  local.tee $2
  call $~lib/rt/tlsf/searchBlock
  local.tee $1
  i32.eqz
  if
   i32.const 4
   memory.size
   local.tee $1
   i32.const 16
   i32.shl
   i32.const 4
   i32.sub
   local.get $0
   i32.load offset=1568
   i32.ne
   i32.shl
   local.get $2
   i32.const 1
   i32.const 27
   local.get $2
   i32.clz
   i32.sub
   i32.shl
   i32.const 1
   i32.sub
   i32.add
   local.get $2
   local.get $2
   i32.const 536870910
   i32.lt_u
   select
   i32.add
   i32.const 65535
   i32.add
   i32.const -65536
   i32.and
   i32.const 16
   i32.shr_u
   local.set $3
   local.get $1
   local.get $3
   local.get $1
   local.get $3
   i32.gt_s
   select
   memory.grow
   i32.const 0
   i32.lt_s
   if
    local.get $3
    memory.grow
    i32.const 0
    i32.lt_s
    if
     unreachable
    end
   end
   local.get $0
   local.get $1
   i32.const 16
   i32.shl
   memory.size
   i32.const 16
   i32.shl
   call $~lib/rt/tlsf/addMemory
   local.get $0
   local.get $2
   call $~lib/rt/tlsf/searchBlock
   local.tee $1
   i32.eqz
   if
    i32.const 0
    i32.const 1184
    i32.const 498
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $2
  local.get $1
  i32.load
  i32.const -4
  i32.and
  i32.gt_u
  if
   i32.const 0
   i32.const 1184
   i32.const 500
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/removeBlock
  local.get $0
  local.get $1
  local.get $2
  call $~lib/rt/tlsf/prepareBlock
  local.get $1
  call $~lib/rt/rtrace/onalloc
  local.get $1
 )
 (func $~lib/rt/tlsf/__alloc (param $0 i32) (result i32)
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.get $0
  call $~lib/rt/tlsf/allocateBlock
  i32.const 4
  i32.add
 )
 (func $~lib/rt/pure/__new (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.const 1073741804
  i32.gt_u
  if
   i32.const 1056
   i32.const 1120
   i32.const 275
   i32.const 30
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 16
  i32.add
  call $~lib/rt/tlsf/__alloc
  local.tee $3
  i32.const 4
  i32.sub
  local.tee $2
  i32.const 0
  i32.store offset=4
  local.get $2
  i32.const 0
  i32.store offset=8
  local.get $2
  local.get $1
  i32.store offset=12
  local.get $2
  local.get $0
  i32.store offset=16
  local.get $3
  i32.const 16
  i32.add
 )
 (func $~lib/rt/tlsf/checkUsedBlock (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 4
  i32.sub
  local.set $1
  local.get $0
  i32.const 15
  i32.and
  i32.eqz
  i32.const 0
  local.get $0
  select
  if (result i32)
   local.get $1
   i32.load
   i32.const 1
   i32.and
   i32.eqz
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 563
   i32.const 3
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
 )
 (func $~lib/memory/memory.copy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  block $~lib/util/memory/memmove|inlined.0
   local.get $2
   local.set $4
   local.get $0
   local.get $1
   i32.eq
   br_if $~lib/util/memory/memmove|inlined.0
   local.get $0
   local.get $1
   i32.lt_u
   if
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|0
      local.get $0
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.set $4
       local.get $0
       local.tee $2
       i32.const 1
       i32.add
       local.set $0
       local.get $1
       local.tee $3
       i32.const 1
       i32.add
       local.set $1
       local.get $2
       local.get $3
       i32.load8_u
       i32.store8
       br $while-continue|0
      end
     end
     loop $while-continue|1
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $0
       local.get $1
       i64.load
       i64.store
       local.get $4
       i32.const 8
       i32.sub
       local.set $4
       local.get $0
       i32.const 8
       i32.add
       local.set $0
       local.get $1
       i32.const 8
       i32.add
       local.set $1
       br $while-continue|1
      end
     end
    end
    loop $while-continue|2
     local.get $4
     if
      local.get $0
      local.tee $2
      i32.const 1
      i32.add
      local.set $0
      local.get $1
      local.tee $3
      i32.const 1
      i32.add
      local.set $1
      local.get $2
      local.get $3
      i32.load8_u
      i32.store8
      local.get $4
      i32.const 1
      i32.sub
      local.set $4
      br $while-continue|2
     end
    end
   else
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|3
      local.get $0
      local.get $4
      i32.add
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i32.load8_u
       i32.store8
       br $while-continue|3
      end
     end
     loop $while-continue|4
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $4
       i32.const 8
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i64.load
       i64.store
       br $while-continue|4
      end
     end
    end
    loop $while-continue|5
     local.get $4
     if
      local.get $4
      i32.const 1
      i32.sub
      local.tee $4
      local.get $0
      i32.add
      local.get $1
      local.get $4
      i32.add
      i32.load8_u
      i32.store8
      br $while-continue|5
     end
    end
   end
  end
 )
 (func $~lib/rt/tlsf/freeBlock (param $0 i32) (param $1 i32)
  local.get $1
  local.get $1
  i32.load
  i32.const 1
  i32.or
  i32.store
  local.get $1
  call $~lib/rt/rtrace/onfree
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/moveBlock (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  local.get $0
  local.get $2
  call $~lib/rt/tlsf/allocateBlock
  local.tee $2
  i32.const 4
  i32.add
  local.get $1
  i32.const 4
  i32.add
  local.get $1
  i32.load
  i32.const -4
  i32.and
  call $~lib/memory/memory.copy
  local.get $1
  i32.const 2732
  i32.ge_u
  if
   local.get $1
   local.get $2
   call $~lib/rt/rtrace/onmove
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/freeBlock
  end
  local.get $2
 )
 (func $~lib/rt/pure/__renew (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $1
  i32.const 1073741804
  i32.gt_u
  if
   i32.const 1056
   i32.const 1120
   i32.const 288
   i32.const 30
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 16
  i32.sub
  local.set $0
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  local.get $1
  i32.const 16
  i32.add
  local.set $5
  local.get $0
  i32.const 2732
  i32.lt_u
  if
   global.get $~lib/rt/tlsf/ROOT
   local.get $0
   call $~lib/rt/tlsf/checkUsedBlock
   local.get $5
   call $~lib/rt/tlsf/moveBlock
   local.set $0
  else
   block $__inlined_func$~lib/rt/tlsf/reallocateBlock
    global.get $~lib/rt/tlsf/ROOT
    local.set $2
    local.get $0
    call $~lib/rt/tlsf/checkUsedBlock
    local.set $0
    local.get $5
    call $~lib/rt/tlsf/prepareSize
    local.tee $3
    local.get $0
    i32.load
    local.tee $7
    i32.const -4
    i32.and
    local.tee $4
    i32.le_u
    if
     local.get $2
     local.get $0
     local.get $3
     call $~lib/rt/tlsf/prepareBlock
     local.get $3
     local.get $4
     i32.ne
     if
      local.get $0
      local.get $4
      call $~lib/rt/rtrace/onresize
     end
     br $__inlined_func$~lib/rt/tlsf/reallocateBlock
    end
    local.get $0
    i32.const 4
    i32.add
    local.get $0
    i32.load
    i32.const -4
    i32.and
    i32.add
    local.tee $8
    i32.load
    local.tee $6
    i32.const 1
    i32.and
    if
     local.get $3
     local.get $4
     i32.const 4
     i32.add
     local.get $6
     i32.const -4
     i32.and
     i32.add
     local.tee $6
     i32.le_u
     if
      local.get $2
      local.get $8
      call $~lib/rt/tlsf/removeBlock
      local.get $0
      local.get $6
      local.get $7
      i32.const 3
      i32.and
      i32.or
      i32.store
      local.get $2
      local.get $0
      local.get $3
      call $~lib/rt/tlsf/prepareBlock
      local.get $0
      local.get $4
      call $~lib/rt/rtrace/onresize
      br $__inlined_func$~lib/rt/tlsf/reallocateBlock
     end
    end
    local.get $2
    local.get $0
    local.get $5
    call $~lib/rt/tlsf/moveBlock
    local.set $0
   end
  end
  local.get $0
  i32.const 4
  i32.add
  local.tee $0
  i32.const 4
  i32.sub
  local.get $1
  i32.store offset=16
  local.get $0
  i32.const 16
  i32.add
 )
 (func $~lib/rt/pure/__retain (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.const 2732
  i32.gt_u
  if
   local.get $0
   i32.const 20
   i32.sub
   local.tee $1
   i32.load offset=4
   local.tee $2
   i32.const -268435456
   i32.and
   local.get $2
   i32.const 1
   i32.add
   i32.const -268435456
   i32.and
   i32.ne
   if
    i32.const 0
    i32.const 1120
    i32.const 109
    i32.const 3
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   local.get $2
   i32.const 1
   i32.add
   i32.store offset=4
   local.get $1
   call $~lib/rt/rtrace/onincrement
   local.get $1
   i32.load
   i32.const 1
   i32.and
   if
    i32.const 0
    i32.const 1120
    i32.const 112
    i32.const 14
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
 )
 (func $~lib/rt/pure/__release (param $0 i32)
  local.get $0
  i32.const 2732
  i32.gt_u
  if
   local.get $0
   i32.const 20
   i32.sub
   call $~lib/rt/pure/decrement
  end
 )
 (func $~lib/memory/memory.fill (param $0 i32) (param $1 i32)
  (local $2 i32)
  block $~lib/util/memory/memset|inlined.0
   local.get $1
   i32.eqz
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8
   local.get $0
   local.get $1
   i32.add
   i32.const 4
   i32.sub
   local.tee $2
   i32.const 0
   i32.store8 offset=3
   local.get $1
   i32.const 2
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=1
   local.get $0
   i32.const 0
   i32.store8 offset=2
   local.get $2
   i32.const 0
   i32.store8 offset=2
   local.get $2
   i32.const 0
   i32.store8 offset=1
   local.get $1
   i32.const 6
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=3
   local.get $2
   i32.const 0
   i32.store8
   local.get $1
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   local.get $0
   i32.sub
   i32.const 3
   i32.and
   local.tee $2
   i32.add
   local.tee $0
   i32.const 0
   i32.store
   local.get $0
   local.get $1
   local.get $2
   i32.sub
   i32.const -4
   i32.and
   local.tee $2
   i32.add
   i32.const 28
   i32.sub
   local.tee $1
   i32.const 0
   i32.store offset=24
   local.get $2
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=4
   local.get $0
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 0
   i32.store offset=16
   local.get $1
   i32.const 0
   i32.store offset=20
   local.get $2
   i32.const 24
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=12
   local.get $0
   i32.const 0
   i32.store offset=16
   local.get $0
   i32.const 0
   i32.store offset=20
   local.get $0
   i32.const 0
   i32.store offset=24
   local.get $1
   i32.const 0
   i32.store
   local.get $1
   i32.const 0
   i32.store offset=4
   local.get $1
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 0
   i32.store offset=12
   local.get $0
   local.get $0
   i32.const 4
   i32.and
   i32.const 24
   i32.add
   local.tee $1
   i32.add
   local.set $0
   local.get $2
   local.get $1
   i32.sub
   local.set $1
   loop $while-continue|0
    local.get $1
    i32.const 32
    i32.ge_u
    if
     local.get $0
     i64.const 0
     i64.store
     local.get $0
     i64.const 0
     i64.store offset=8
     local.get $0
     i64.const 0
     i64.store offset=16
     local.get $0
     i64.const 0
     i64.store offset=24
     local.get $1
     i32.const 32
     i32.sub
     local.set $1
     local.get $0
     i32.const 32
     i32.add
     local.set $0
     br $while-continue|0
    end
   end
  end
 )
 (func $~lib/arraybuffer/ArrayBuffer#constructor (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 1248
   i32.const 1296
   i32.const 49
   i32.const 43
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 0
  call $~lib/rt/pure/__new
  local.tee $1
  local.get $0
  call $~lib/memory/memory.fill
  local.get $1
  call $~lib/rt/pure/__retain
 )
 (func $~lib/util/hash/hashStr (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  i32.const -2128831035
  local.set $1
  local.get $0
  if
   local.get $0
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.shl
   local.set $3
   loop $for-loop|0
    local.get $2
    local.get $3
    i32.lt_u
    if
     local.get $1
     local.get $0
     local.get $2
     i32.add
     i32.load8_u
     i32.xor
     i32.const 16777619
     i32.mul
     local.set $1
     local.get $2
     i32.const 1
     i32.add
     local.set $2
     br $for-loop|0
    end
   end
  end
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
 )
 (func $~lib/util/string/compareImpl (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $3
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $4
  local.get $3
  local.tee $0
  i32.const 7
  i32.and
  local.get $4
  local.tee $1
  i32.const 7
  i32.and
  i32.or
  i32.eqz
  i32.const 0
  local.get $2
  i32.const 4
  i32.ge_u
  select
  if
   loop $do-continue|0
    local.get $0
    i64.load
    local.get $1
    i64.load
    i64.eq
    if
     local.get $0
     i32.const 8
     i32.add
     local.set $0
     local.get $1
     i32.const 8
     i32.add
     local.set $1
     local.get $2
     i32.const 4
     i32.sub
     local.tee $2
     i32.const 4
     i32.ge_u
     br_if $do-continue|0
    end
   end
  end
  loop $while-continue|1
   local.get $2
   local.tee $5
   i32.const 1
   i32.sub
   local.set $2
   local.get $5
   if
    local.get $0
    i32.load16_u
    local.tee $5
    local.get $1
    i32.load16_u
    local.tee $6
    i32.ne
    if
     local.get $5
     local.get $6
     i32.sub
     local.get $3
     call $~lib/rt/pure/__release
     local.get $4
     call $~lib/rt/pure/__release
     return
    end
    local.get $0
    i32.const 2
    i32.add
    local.set $0
    local.get $1
    i32.const 2
    i32.add
    local.set $1
    br $while-continue|1
   end
  end
  local.get $3
  call $~lib/rt/pure/__release
  local.get $4
  call $~lib/rt/pure/__release
  i32.const 0
 )
 (func $~lib/string/String.__eq (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.tee $0
  local.get $1
  call $~lib/rt/pure/__retain
  local.tee $1
  i32.eq
  if
   local.get $0
   call $~lib/rt/pure/__release
   local.get $1
   call $~lib/rt/pure/__release
   i32.const 1
   return
  end
  block $folding-inner0
   local.get $1
   i32.eqz
   i32.const 1
   local.get $0
   select
   br_if $folding-inner0
   local.get $0
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   local.tee $2
   local.get $1
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.ne
   br_if $folding-inner0
   local.get $0
   local.get $1
   local.get $2
   call $~lib/util/string/compareImpl
   i32.eqz
   local.get $0
   call $~lib/rt/pure/__release
   local.get $1
   call $~lib/rt/pure/__release
   return
  end
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  i32.const 0
 )
 (func $~lib/map/Map<~lib/string/String,i8>#find (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $0
  i32.load
  local.get $2
  local.get $0
  i32.load offset=4
  i32.and
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $0
  loop $while-continue|0
   local.get $0
   if
    local.get $0
    i32.load offset=8
    i32.const 1
    i32.and
    if (result i32)
     i32.const 0
    else
     local.get $0
     i32.load
     local.get $1
     call $~lib/string/String.__eq
    end
    if
     local.get $1
     call $~lib/rt/pure/__release
     local.get $0
     return
    end
    local.get $0
    i32.load offset=8
    i32.const -2
    i32.and
    local.set $0
    br $while-continue|0
   end
  end
  local.get $1
  call $~lib/rt/pure/__release
  i32.const 0
 )
 (func $~lib/map/Map<~lib/string/String,i8>#rehash (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  local.get $1
  i32.const 1
  i32.add
  local.tee $3
  i32.const 2
  i32.shl
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $5
  local.get $3
  i32.const 3
  i32.shl
  i32.const 3
  i32.div_s
  local.tee $7
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $3
  local.get $0
  i32.load offset=8
  local.tee $4
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $8
  local.get $3
  local.set $2
  loop $while-continue|0
   local.get $4
   local.get $8
   i32.ne
   if
    local.get $4
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $2
     local.get $4
     i32.load
     i32.store
     local.get $2
     local.get $4
     i32.load8_s offset=4
     i32.store8 offset=4
     local.get $4
     i32.load
     call $~lib/rt/pure/__retain
     local.tee $9
     call $~lib/util/hash/hashStr
     local.set $6
     local.get $9
     call $~lib/rt/pure/__release
     local.get $2
     local.get $5
     local.get $1
     local.get $6
     i32.and
     i32.const 2
     i32.shl
     i32.add
     local.tee $6
     i32.load
     i32.store offset=8
     local.get $6
     local.get $2
     i32.store
     local.get $2
     i32.const 12
     i32.add
     local.set $2
    end
    local.get $4
    i32.const 12
    i32.add
    local.set $4
    br $while-continue|0
   end
  end
  local.get $5
  local.tee $4
  local.get $0
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $4
   call $~lib/rt/pure/__retain
   local.set $4
   local.get $2
   call $~lib/rt/pure/__release
  end
  local.get $0
  local.get $4
  i32.store
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $3
  local.tee $1
  local.get $0
  i32.load offset=8
  local.tee $4
  i32.ne
  if
   local.get $1
   call $~lib/rt/pure/__retain
   local.set $1
   local.get $4
   call $~lib/rt/pure/__release
  end
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $7
  i32.store offset=12
  local.get $0
  local.get $0
  i32.load offset=20
  i32.store offset=16
  local.get $5
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
 )
 (func $~lib/map/Map<~lib/string/String,i8>#set (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  call $~lib/rt/pure/__retain
  local.tee $4
  call $~lib/rt/pure/__retain
  local.tee $3
  call $~lib/util/hash/hashStr
  local.set $1
  local.get $3
  call $~lib/rt/pure/__release
  local.get $0
  local.get $4
  local.get $1
  call $~lib/map/Map<~lib/string/String,i8>#find
  local.tee $3
  if
   local.get $3
   local.get $2
   i32.store8 offset=4
  else
   local.get $0
   i32.load offset=16
   local.get $0
   i32.load offset=12
   i32.eq
   if
    local.get $0
    local.get $0
    i32.load offset=20
    local.get $0
    i32.load offset=12
    i32.const 3
    i32.mul
    i32.const 4
    i32.div_s
    i32.lt_s
    if (result i32)
     local.get $0
     i32.load offset=4
    else
     local.get $0
     i32.load offset=4
     i32.const 1
     i32.shl
     i32.const 1
     i32.or
    end
    call $~lib/map/Map<~lib/string/String,i8>#rehash
   end
   local.get $0
   i32.load offset=8
   call $~lib/rt/pure/__retain
   local.set $5
   local.get $0
   local.get $0
   i32.load offset=16
   local.tee $3
   i32.const 1
   i32.add
   i32.store offset=16
   local.get $5
   local.get $3
   i32.const 12
   i32.mul
   i32.add
   local.tee $3
   local.get $4
   call $~lib/rt/pure/__retain
   i32.store
   local.get $3
   local.get $2
   i32.store8 offset=4
   local.get $0
   local.get $0
   i32.load offset=20
   i32.const 1
   i32.add
   i32.store offset=20
   local.get $3
   local.get $0
   i32.load
   local.get $1
   local.get $0
   i32.load offset=4
   i32.and
   i32.const 2
   i32.shl
   i32.add
   local.tee $1
   i32.load
   i32.store offset=8
   local.get $1
   local.get $3
   i32.store
   local.get $5
   call $~lib/rt/pure/__release
  end
  local.get $0
  call $~lib/rt/pure/__retain
  local.get $4
  call $~lib/rt/pure/__release
 )
 (func $~lib/array/Array<assembly/index/State>#constructor (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  i32.const 16
  i32.const 6
  call $~lib/rt/pure/__new
  call $~lib/rt/pure/__retain
  local.tee $3
  i32.const 0
  i32.store
  local.get $3
  i32.const 0
  i32.store offset=4
  local.get $3
  i32.const 0
  i32.store offset=8
  local.get $3
  i32.const 0
  i32.store offset=12
  i32.const 0
  i32.const 0
  call $~lib/rt/pure/__new
  local.tee $1
  i32.const 0
  call $~lib/memory/memory.fill
  local.get $1
  local.set $0
  local.get $1
  local.get $3
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $0
   call $~lib/rt/pure/__retain
   local.set $0
   local.get $2
   call $~lib/rt/pure/__release
  end
  local.get $3
  local.get $0
  i32.store
  local.get $3
  local.get $1
  i32.store offset=4
  local.get $3
  i32.const 0
  i32.store offset=8
  local.get $3
  i32.const 0
  i32.store offset=12
  local.get $3
 )
 (func $assembly/index/createState (param $0 i32) (result i32)
  (local $1 i32)
  i32.const 12
  i32.const 4
  call $~lib/rt/pure/__new
  call $~lib/rt/pure/__retain
  local.tee $1
  i32.const 0
  i32.store8
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $1
  local.get $0
  i32.store8
  i32.const 24
  i32.const 5
  call $~lib/rt/pure/__new
  call $~lib/rt/pure/__retain
  local.tee $0
  i32.const 16
  call $~lib/arraybuffer/ArrayBuffer#constructor
  i32.store
  local.get $0
  i32.const 3
  i32.store offset=4
  local.get $0
  i32.const 48
  call $~lib/arraybuffer/ArrayBuffer#constructor
  i32.store offset=8
  local.get $0
  i32.const 4
  i32.store offset=12
  local.get $0
  i32.const 0
  i32.store offset=16
  local.get $0
  i32.const 0
  i32.store offset=20
  local.get $1
  i32.load offset=4
  call $~lib/rt/pure/__release
  local.get $1
  local.get $0
  i32.store offset=4
  call $~lib/array/Array<assembly/index/State>#constructor
  local.set $0
  local.get $1
  i32.load offset=8
  call $~lib/rt/pure/__release
  local.get $1
  local.get $0
  i32.store offset=8
  local.get $1
 )
 (func $~lib/array/Array<~lib/string/String>#constructor (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  i32.const 16
  i32.const 7
  call $~lib/rt/pure/__new
  call $~lib/rt/pure/__retain
  local.tee $5
  i32.const 0
  i32.store
  local.get $5
  i32.const 0
  i32.store offset=4
  local.get $5
  i32.const 0
  i32.store offset=8
  local.get $5
  i32.const 0
  i32.store offset=12
  local.get $0
  i32.const 268435455
  i32.gt_u
  if
   i32.const 1248
   i32.const 1520
   i32.const 57
   i32.const 60
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 2
  i32.shl
  local.tee $4
  i32.const 0
  call $~lib/rt/pure/__new
  local.tee $2
  local.get $4
  call $~lib/memory/memory.fill
  local.get $2
  local.set $1
  local.get $2
  local.get $5
  i32.load
  local.tee $3
  i32.ne
  if
   local.get $1
   call $~lib/rt/pure/__retain
   local.set $1
   local.get $3
   call $~lib/rt/pure/__release
  end
  local.get $5
  local.get $1
  i32.store
  local.get $5
  local.get $2
  i32.store offset=4
  local.get $5
  local.get $4
  i32.store offset=8
  local.get $5
  local.get $0
  i32.store offset=12
  local.get $5
 )
 (func $~lib/string/String#charAt (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  i32.ge_u
  if
   i32.const 1680
   return
  end
  i32.const 2
  i32.const 1
  call $~lib/rt/pure/__new
  local.tee $2
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  i32.add
  i32.load16_u
  i32.store16
  local.get $2
  call $~lib/rt/pure/__retain
 )
 (func $~lib/array/Array<~lib/string/String>#__get (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   i32.const 1712
   i32.const 1520
   i32.const 104
   i32.const 42
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  call $~lib/rt/pure/__retain
  local.tee $0
  i32.eqz
  if
   i32.const 1776
   i32.const 1520
   i32.const 108
   i32.const 40
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
 )
 (func $assembly/index/peek (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.tee $0
  i32.load offset=12
  local.set $1
  local.get $0
  local.get $1
  i32.const 1
  i32.sub
  call $~lib/array/Array<~lib/string/String>#__get
  local.get $0
  call $~lib/rt/pure/__release
 )
 (func $~lib/string/String.__ne (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.tee $0
  i32.const 1904
  call $~lib/string/String.__eq
  i32.eqz
  local.get $0
  call $~lib/rt/pure/__release
  i32.const 1904
  call $~lib/rt/pure/__release
 )
 (func $~lib/map/Map<~lib/string/String,i8>#get (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/pure/__retain
  local.tee $1
  call $~lib/rt/pure/__retain
  local.tee $2
  call $~lib/util/hash/hashStr
  local.set $3
  local.get $2
  call $~lib/rt/pure/__release
  local.get $0
  local.get $1
  local.get $3
  call $~lib/map/Map<~lib/string/String,i8>#find
  local.tee $0
  i32.eqz
  if
   i32.const 1936
   i32.const 2000
   i32.const 104
   i32.const 17
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load8_s offset=4
  local.get $1
  call $~lib/rt/pure/__release
 )
 (func $~lib/array/Array<~lib/string/String>#pop (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.load offset=12
  local.tee $1
  i32.const 1
  i32.lt_s
  if
   i32.const 2048
   i32.const 1520
   i32.const 300
   i32.const 21
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 1
  i32.sub
  local.tee $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  call $~lib/rt/pure/__retain
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $~lib/string/String.__concat (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.tee $2
  i32.const 2096
  local.get $2
  select
  local.set $3
  block $__inlined_func$~lib/string/String#concat
   local.get $1
   call $~lib/rt/pure/__retain
   local.tee $5
   call $~lib/rt/pure/__retain
   local.tee $1
   i32.eqz
   if
    local.get $1
    i32.const 2096
    i32.ne
    if
     local.get $1
     call $~lib/rt/pure/__release
    end
    i32.const 2096
    local.set $1
   end
   local.get $1
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.shl
   local.tee $6
   local.get $3
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.shl
   local.tee $4
   i32.add
   local.tee $0
   i32.eqz
   if
    i32.const 1680
    local.set $0
    br $__inlined_func$~lib/string/String#concat
   end
   local.get $0
   i32.const 1
   call $~lib/rt/pure/__new
   call $~lib/rt/pure/__retain
   local.tee $0
   local.get $3
   local.get $4
   call $~lib/memory/memory.copy
   local.get $0
   local.get $4
   i32.add
   local.get $1
   local.get $6
   call $~lib/memory/memory.copy
  end
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $5
  call $~lib/rt/pure/__release
  local.get $0
 )
 (func $~lib/array/ensureSize (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  local.get $0
  i32.load offset=8
  local.tee $2
  i32.const 2
  i32.shr_u
  i32.gt_u
  if
   local.get $1
   i32.const 268435455
   i32.gt_u
   if
    i32.const 1248
    i32.const 1520
    i32.const 14
    i32.const 48
    call $~lib/builtins/abort
    unreachable
   end
   local.get $2
   local.get $0
   i32.load
   local.tee $4
   local.get $1
   i32.const 2
   i32.shl
   local.tee $3
   call $~lib/rt/pure/__renew
   local.tee $1
   i32.add
   local.get $3
   local.get $2
   i32.sub
   call $~lib/memory/memory.fill
   local.get $1
   local.get $4
   i32.ne
   if
    local.get $0
    local.get $1
    i32.store
    local.get $0
    local.get $1
    i32.store offset=4
   end
   local.get $0
   local.get $3
   i32.store offset=8
  end
 )
 (func $~lib/array/Array<~lib/string/String>#push (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $0
  local.get $0
  i32.load offset=12
  local.tee $2
  i32.const 1
  i32.add
  local.tee $3
  call $~lib/array/ensureSize
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  call $~lib/rt/pure/__retain
  i32.store
  local.get $0
  local.get $3
  i32.store offset=12
  local.get $1
  call $~lib/rt/pure/__release
 )
 (func $assembly/index/toPostfix (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  i32.const 1680
  local.set $0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $4
  loop $for-loop|0
   local.get $5
   i32.const 1644
   i32.load
   i32.const 1
   i32.shr_u
   i32.lt_s
   if
    i32.const 1648
    local.get $5
    call $~lib/string/String#charAt
    local.tee $3
    i32.const 1392
    call $~lib/string/String.__eq
    if (result i32)
     i32.const 1
    else
     local.get $3
     i32.const 1360
     call $~lib/string/String.__eq
    end
    if (result i32)
     i32.const 1
    else
     local.get $3
     i32.const 1456
     call $~lib/string/String.__eq
    end
    if (result i32)
     i32.const 1
    else
     local.get $3
     i32.const 1424
     call $~lib/string/String.__eq
    end
    if (result i32)
     i32.const 1
    else
     local.get $3
     i32.const 1488
     call $~lib/string/String.__eq
    end
    if
     loop $while-continue|1
      local.get $4
      i32.load offset=12
      if
       local.get $4
       call $assembly/index/peek
       local.tee $2
       call $~lib/string/String.__ne
       local.set $1
       local.get $2
       call $~lib/rt/pure/__release
      else
       i32.const 0
       local.set $1
      end
      local.get $1
      if
       global.get $assembly/index/operatorPrecedence
       local.get $4
       call $assembly/index/peek
       local.tee $2
       call $~lib/map/Map<~lib/string/String,i8>#get
       global.get $assembly/index/operatorPrecedence
       local.get $3
       call $~lib/map/Map<~lib/string/String,i8>#get
       i32.ge_s
       local.set $1
       local.get $2
       call $~lib/rt/pure/__release
      else
       i32.const 0
       local.set $1
      end
      local.get $1
      if
       local.get $0
       local.get $0
       local.get $4
       call $~lib/array/Array<~lib/string/String>#pop
       local.tee $2
       call $~lib/string/String.__concat
       local.tee $6
       local.tee $1
       i32.ne
       if
        local.get $1
        call $~lib/rt/pure/__retain
        local.set $1
        local.get $0
        call $~lib/rt/pure/__release
       end
       local.get $1
       local.set $0
       local.get $2
       call $~lib/rt/pure/__release
       local.get $6
       call $~lib/rt/pure/__release
       br $while-continue|1
      end
     end
     local.get $4
     local.get $3
     call $~lib/array/Array<~lib/string/String>#push
    else
     local.get $3
     i32.const 1904
     call $~lib/string/String.__eq
     if (result i32)
      i32.const 1
     else
      local.get $3
      i32.const 2128
      call $~lib/string/String.__eq
     end
     if
      local.get $3
      i32.const 1904
      call $~lib/string/String.__eq
      if
       local.get $4
       local.get $3
       call $~lib/array/Array<~lib/string/String>#push
      else
       loop $while-continue|2
        local.get $4
        call $assembly/index/peek
        local.tee $1
        call $~lib/string/String.__ne
        local.get $1
        call $~lib/rt/pure/__release
        if
         local.get $0
         local.get $4
         call $~lib/array/Array<~lib/string/String>#pop
         local.tee $6
         call $~lib/string/String.__concat
         local.set $1
         local.get $0
         local.tee $2
         local.get $1
         local.tee $0
         i32.ne
         if
          local.get $0
          call $~lib/rt/pure/__retain
          local.set $0
          local.get $2
          call $~lib/rt/pure/__release
         end
         local.get $6
         call $~lib/rt/pure/__release
         local.get $1
         call $~lib/rt/pure/__release
         br $while-continue|2
        end
       end
       local.get $4
       call $~lib/array/Array<~lib/string/String>#pop
       call $~lib/rt/pure/__release
      end
     else
      local.get $0
      local.get $3
      call $~lib/string/String.__concat
      local.set $1
      local.get $0
      local.tee $2
      local.get $1
      local.tee $0
      i32.ne
      if
       local.get $0
       call $~lib/rt/pure/__retain
       local.set $0
       local.get $2
       call $~lib/rt/pure/__release
      end
      local.get $1
      call $~lib/rt/pure/__release
     end
    end
    local.get $3
    call $~lib/rt/pure/__release
    local.get $5
    i32.const 1
    i32.add
    local.set $5
    br $for-loop|0
   end
  end
  loop $while-continue|3
   local.get $4
   i32.load offset=12
   if
    local.get $0
    local.get $4
    call $~lib/array/Array<~lib/string/String>#pop
    local.tee $3
    call $~lib/string/String.__concat
    local.set $1
    local.get $0
    local.tee $2
    local.get $1
    local.tee $0
    i32.ne
    if
     local.get $0
     call $~lib/rt/pure/__retain
     local.set $0
     local.get $2
     call $~lib/rt/pure/__release
    end
    local.get $3
    call $~lib/rt/pure/__release
    local.get $1
    call $~lib/rt/pure/__release
    br $while-continue|3
   end
  end
  local.get $4
  call $~lib/rt/pure/__release
  i32.const 1648
  call $~lib/rt/pure/__release
  local.get $0
 )
 (func $assembly/index/addEpsilonTransition (param $0 i32) (param $1 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $0
  i32.load offset=8
  local.get $1
  call $~lib/array/Array<~lib/string/String>#push
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
 )
 (func $assembly/index/Automata#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  i32.const 8
  i32.const 8
  call $~lib/rt/pure/__new
  call $~lib/rt/pure/__retain
  local.tee $2
  i32.const 0
  i32.store
  local.get $2
  i32.const 0
  i32.store offset=4
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $3
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $4
  local.get $3
  local.tee $0
  local.get $2
  local.tee $1
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $0
   call $~lib/rt/pure/__retain
   local.set $0
   local.get $2
   call $~lib/rt/pure/__release
  end
  local.get $1
  local.get $0
  i32.store
  local.get $4
  local.tee $0
  local.get $1
  i32.load offset=4
  local.tee $2
  i32.ne
  if
   local.get $0
   call $~lib/rt/pure/__retain
   local.set $0
   local.get $2
   call $~lib/rt/pure/__release
  end
  local.get $1
  local.get $0
  i32.store offset=4
  local.get $3
  call $~lib/rt/pure/__release
  local.get $4
  call $~lib/rt/pure/__release
  local.get $1
 )
 (func $~lib/map/Map<~lib/string/String,assembly/index/State>#rehash (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  local.get $1
  i32.const 1
  i32.add
  local.tee $3
  i32.const 2
  i32.shl
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $5
  local.get $3
  i32.const 3
  i32.shl
  i32.const 3
  i32.div_s
  local.tee $7
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $3
  local.get $0
  i32.load offset=8
  local.tee $4
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $8
  local.get $3
  local.set $2
  loop $while-continue|0
   local.get $4
   local.get $8
   i32.ne
   if
    local.get $4
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $2
     local.get $4
     i32.load
     i32.store
     local.get $2
     local.get $4
     i32.load offset=4
     i32.store offset=4
     local.get $4
     i32.load
     call $~lib/rt/pure/__retain
     local.tee $9
     call $~lib/util/hash/hashStr
     local.set $6
     local.get $9
     call $~lib/rt/pure/__release
     local.get $2
     local.get $5
     local.get $1
     local.get $6
     i32.and
     i32.const 2
     i32.shl
     i32.add
     local.tee $6
     i32.load
     i32.store offset=8
     local.get $6
     local.get $2
     i32.store
     local.get $2
     i32.const 12
     i32.add
     local.set $2
    end
    local.get $4
    i32.const 12
    i32.add
    local.set $4
    br $while-continue|0
   end
  end
  local.get $5
  local.tee $4
  local.get $0
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $4
   call $~lib/rt/pure/__retain
   local.set $4
   local.get $2
   call $~lib/rt/pure/__release
  end
  local.get $0
  local.get $4
  i32.store
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $3
  local.tee $1
  local.get $0
  i32.load offset=8
  local.tee $4
  i32.ne
  if
   local.get $1
   call $~lib/rt/pure/__retain
   local.set $1
   local.get $4
   call $~lib/rt/pure/__release
  end
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $7
  i32.store offset=12
  local.get $0
  local.get $0
  i32.load offset=20
  i32.store offset=16
  local.get $5
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
 )
 (func $~lib/map/Map<~lib/string/String,assembly/index/State>#set (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $4
  local.get $2
  call $~lib/rt/pure/__retain
  local.set $2
  local.get $4
  call $~lib/rt/pure/__retain
  local.tee $3
  call $~lib/util/hash/hashStr
  local.set $1
  local.get $3
  call $~lib/rt/pure/__release
  local.get $0
  local.get $4
  local.get $1
  call $~lib/map/Map<~lib/string/String,i8>#find
  local.tee $3
  if
   local.get $2
   local.get $3
   i32.load offset=4
   local.tee $1
   i32.ne
   if
    local.get $3
    local.get $2
    call $~lib/rt/pure/__retain
    i32.store offset=4
    local.get $1
    call $~lib/rt/pure/__release
   end
  else
   local.get $0
   i32.load offset=16
   local.get $0
   i32.load offset=12
   i32.eq
   if
    local.get $0
    local.get $0
    i32.load offset=20
    local.get $0
    i32.load offset=12
    i32.const 3
    i32.mul
    i32.const 4
    i32.div_s
    i32.lt_s
    if (result i32)
     local.get $0
     i32.load offset=4
    else
     local.get $0
     i32.load offset=4
     i32.const 1
     i32.shl
     i32.const 1
     i32.or
    end
    call $~lib/map/Map<~lib/string/String,assembly/index/State>#rehash
   end
   local.get $0
   i32.load offset=8
   call $~lib/rt/pure/__retain
   local.set $5
   local.get $0
   local.get $0
   i32.load offset=16
   local.tee $3
   i32.const 1
   i32.add
   i32.store offset=16
   local.get $5
   local.get $3
   i32.const 12
   i32.mul
   i32.add
   local.tee $3
   local.get $4
   call $~lib/rt/pure/__retain
   i32.store
   local.get $3
   local.get $2
   call $~lib/rt/pure/__retain
   i32.store offset=4
   local.get $0
   local.get $0
   i32.load offset=20
   i32.const 1
   i32.add
   i32.store offset=20
   local.get $3
   local.get $0
   i32.load
   local.get $1
   local.get $0
   i32.load offset=4
   i32.and
   i32.const 2
   i32.shl
   i32.add
   local.tee $1
   i32.load
   i32.store offset=8
   local.get $1
   local.get $3
   i32.store
   local.get $5
   call $~lib/rt/pure/__release
  end
  local.get $0
  call $~lib/rt/pure/__retain
  local.get $4
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
 )
 (func $assembly/index/toNFA (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.tee $8
  i32.const 1680
  i32.eq
  if
   i32.const 0
   call $assembly/index/createState
   local.tee $0
   i32.const 1
   call $assembly/index/createState
   local.tee $2
   call $assembly/index/addEpsilonTransition
   local.get $0
   local.get $2
   call $assembly/index/Automata#constructor
   local.get $0
   call $~lib/rt/pure/__release
   local.get $2
   call $~lib/rt/pure/__release
   local.get $8
   call $~lib/rt/pure/__release
   return
  end
  i32.const 16
  i32.const 9
  call $~lib/rt/pure/__new
  call $~lib/rt/pure/__retain
  local.tee $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  i32.const 0
  i32.const 0
  call $~lib/rt/pure/__new
  local.tee $2
  i32.const 0
  call $~lib/memory/memory.fill
  local.get $2
  local.tee $1
  local.get $0
  i32.load
  local.tee $3
  i32.ne
  if
   local.get $1
   call $~lib/rt/pure/__retain
   local.set $1
   local.get $3
   call $~lib/rt/pure/__release
  end
  local.get $0
  local.get $1
  i32.store
  local.get $0
  local.get $2
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  loop $for-loop|0
   local.get $9
   local.get $8
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.lt_s
   if
    local.get $8
    local.get $9
    call $~lib/string/String#charAt
    local.tee $2
    i32.const 1456
    call $~lib/string/String.__eq
    if
     local.get $0
     call $~lib/array/Array<~lib/string/String>#pop
     local.tee $6
     call $~lib/rt/pure/__retain
     local.set $1
     i32.const 0
     call $assembly/index/createState
     local.tee $3
     i32.const 1
     call $assembly/index/createState
     local.tee $4
     call $assembly/index/addEpsilonTransition
     local.get $3
     local.get $1
     i32.load
     call $assembly/index/addEpsilonTransition
     local.get $1
     i32.load offset=4
     local.get $4
     call $assembly/index/addEpsilonTransition
     local.get $1
     i32.load offset=4
     local.get $1
     i32.load
     call $assembly/index/addEpsilonTransition
     local.get $1
     i32.load offset=4
     i32.const 0
     i32.store8
     local.get $3
     local.get $4
     call $assembly/index/Automata#constructor
     local.set $5
     local.get $3
     call $~lib/rt/pure/__release
     local.get $4
     call $~lib/rt/pure/__release
     local.get $1
     call $~lib/rt/pure/__release
     local.get $0
     local.get $5
     call $~lib/array/Array<~lib/string/String>#push
     local.get $6
     call $~lib/rt/pure/__release
     local.get $5
     call $~lib/rt/pure/__release
    else
     local.get $2
     i32.const 1424
     call $~lib/string/String.__eq
     if
      local.get $0
      call $~lib/array/Array<~lib/string/String>#pop
      local.tee $6
      call $~lib/rt/pure/__retain
      local.set $1
      i32.const 0
      call $assembly/index/createState
      local.tee $3
      i32.const 1
      call $assembly/index/createState
      local.tee $4
      call $assembly/index/addEpsilonTransition
      local.get $3
      local.get $1
      i32.load
      call $assembly/index/addEpsilonTransition
      local.get $1
      i32.load offset=4
      local.get $4
      call $assembly/index/addEpsilonTransition
      local.get $1
      i32.load offset=4
      i32.const 0
      i32.store8
      local.get $3
      local.get $4
      call $assembly/index/Automata#constructor
      local.set $5
      local.get $3
      call $~lib/rt/pure/__release
      local.get $4
      call $~lib/rt/pure/__release
      local.get $1
      call $~lib/rt/pure/__release
      local.get $0
      local.get $5
      call $~lib/array/Array<~lib/string/String>#push
      local.get $6
      call $~lib/rt/pure/__release
      local.get $5
      call $~lib/rt/pure/__release
     else
      local.get $2
      i32.const 1488
      i32.eq
      if
       local.get $0
       call $~lib/array/Array<~lib/string/String>#pop
       local.tee $6
       call $~lib/rt/pure/__retain
       local.set $1
       i32.const 0
       call $assembly/index/createState
       local.set $3
       i32.const 1
       call $assembly/index/createState
       local.set $4
       local.get $3
       local.get $1
       i32.load
       call $assembly/index/addEpsilonTransition
       local.get $1
       i32.load offset=4
       local.get $4
       call $assembly/index/addEpsilonTransition
       local.get $1
       i32.load offset=4
       local.get $1
       i32.load
       call $assembly/index/addEpsilonTransition
       local.get $1
       i32.load offset=4
       i32.const 0
       i32.store8
       local.get $3
       local.get $4
       call $assembly/index/Automata#constructor
       local.set $5
       local.get $3
       call $~lib/rt/pure/__release
       local.get $4
       call $~lib/rt/pure/__release
       local.get $1
       call $~lib/rt/pure/__release
       local.get $0
       local.get $5
       call $~lib/array/Array<~lib/string/String>#push
       local.get $6
       call $~lib/rt/pure/__release
       local.get $5
       call $~lib/rt/pure/__release
      else
       local.get $2
       i32.const 1360
       call $~lib/string/String.__eq
       if
        local.get $0
        call $~lib/array/Array<~lib/string/String>#pop
        local.set $5
        local.get $0
        call $~lib/array/Array<~lib/string/String>#pop
        local.tee $10
        call $~lib/rt/pure/__retain
        local.set $1
        local.get $5
        call $~lib/rt/pure/__retain
        local.set $3
        i32.const 0
        call $assembly/index/createState
        local.tee $6
        local.get $1
        i32.load
        call $assembly/index/addEpsilonTransition
        local.get $6
        local.get $3
        i32.load
        call $assembly/index/addEpsilonTransition
        i32.const 1
        call $assembly/index/createState
        local.set $4
        local.get $1
        i32.load offset=4
        local.get $4
        call $assembly/index/addEpsilonTransition
        local.get $1
        i32.load offset=4
        i32.const 0
        i32.store8
        local.get $3
        i32.load offset=4
        local.get $4
        call $assembly/index/addEpsilonTransition
        local.get $3
        i32.load offset=4
        i32.const 0
        i32.store8
        local.get $1
        i32.load
        local.get $3
        i32.load offset=4
        call $assembly/index/Automata#constructor
        local.set $7
        local.get $6
        call $~lib/rt/pure/__release
        local.get $4
        call $~lib/rt/pure/__release
        local.get $1
        call $~lib/rt/pure/__release
        local.get $3
        call $~lib/rt/pure/__release
        local.get $0
        local.get $7
        call $~lib/array/Array<~lib/string/String>#push
        local.get $5
        call $~lib/rt/pure/__release
        local.get $10
        call $~lib/rt/pure/__release
        local.get $7
        call $~lib/rt/pure/__release
       else
        local.get $2
        i32.const 1392
        call $~lib/string/String.__eq
        if
         local.get $0
         call $~lib/array/Array<~lib/string/String>#pop
         local.set $4
         local.get $0
         call $~lib/array/Array<~lib/string/String>#pop
         local.tee $6
         call $~lib/rt/pure/__retain
         local.set $1
         local.get $4
         call $~lib/rt/pure/__retain
         local.set $3
         local.get $1
         i32.load offset=4
         local.get $3
         i32.load
         call $assembly/index/addEpsilonTransition
         local.get $1
         i32.load offset=4
         i32.const 0
         i32.store8
         local.get $1
         i32.load
         local.get $3
         i32.load offset=4
         call $assembly/index/Automata#constructor
         local.set $5
         local.get $1
         call $~lib/rt/pure/__release
         local.get $3
         call $~lib/rt/pure/__release
         local.get $0
         local.get $5
         call $~lib/array/Array<~lib/string/String>#push
         local.get $4
         call $~lib/rt/pure/__release
         local.get $6
         call $~lib/rt/pure/__release
         local.get $5
         call $~lib/rt/pure/__release
        else
         local.get $2
         call $~lib/rt/pure/__retain
         local.set $4
         i32.const 0
         call $assembly/index/createState
         local.set $1
         i32.const 1
         call $assembly/index/createState
         local.set $3
         local.get $1
         call $~lib/rt/pure/__retain
         local.set $5
         local.get $3
         call $~lib/rt/pure/__retain
         local.set $6
         local.get $4
         call $~lib/rt/pure/__retain
         local.set $7
         local.get $5
         i32.load offset=4
         local.get $7
         local.get $6
         call $~lib/map/Map<~lib/string/String,assembly/index/State>#set
         call $~lib/rt/pure/__release
         local.get $5
         call $~lib/rt/pure/__release
         local.get $6
         call $~lib/rt/pure/__release
         local.get $7
         call $~lib/rt/pure/__release
         local.get $1
         local.get $3
         call $assembly/index/Automata#constructor
         local.set $5
         local.get $1
         call $~lib/rt/pure/__release
         local.get $3
         call $~lib/rt/pure/__release
         local.get $4
         call $~lib/rt/pure/__release
         local.get $0
         local.get $5
         call $~lib/array/Array<~lib/string/String>#push
         local.get $5
         call $~lib/rt/pure/__release
        end
       end
      end
     end
    end
    local.get $2
    call $~lib/rt/pure/__release
    local.get $9
    i32.const 1
    i32.add
    local.set $9
    br $for-loop|0
   end
  end
  local.get $0
  call $~lib/array/Array<~lib/string/String>#pop
  local.get $0
  call $~lib/rt/pure/__release
  local.get $8
  call $~lib/rt/pure/__release
 )
 (func $~lib/map/Map<~lib/string/String,assembly/index/State>#keys (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $0
  i32.load offset=8
  local.set $6
  local.get $0
  i32.load offset=16
  local.tee $7
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $0
  loop $for-loop|0
   local.get $3
   local.get $7
   i32.lt_s
   if
    local.get $6
    local.get $3
    i32.const 12
    i32.mul
    i32.add
    local.tee $4
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $2
     local.tee $1
     i32.const 1
     i32.add
     local.set $2
     local.get $4
     i32.load
     call $~lib/rt/pure/__retain
     local.set $4
     local.get $1
     local.get $0
     i32.load offset=12
     i32.ge_u
     if
      local.get $1
      i32.const 0
      i32.lt_s
      if
       i32.const 1712
       i32.const 1520
       i32.const 120
       i32.const 22
       call $~lib/builtins/abort
       unreachable
      end
      local.get $0
      local.get $1
      i32.const 1
      i32.add
      local.tee $5
      call $~lib/array/ensureSize
      local.get $0
      local.get $5
      i32.store offset=12
     end
     local.get $4
     call $~lib/rt/pure/__retain
     local.tee $5
     local.get $0
     i32.load offset=4
     local.get $1
     i32.const 2
     i32.shl
     i32.add
     local.tee $1
     i32.load
     local.tee $8
     i32.ne
     if
      local.get $1
      local.get $5
      call $~lib/rt/pure/__retain
      i32.store
      local.get $8
      call $~lib/rt/pure/__release
     end
     local.get $5
     call $~lib/rt/pure/__release
     local.get $4
     call $~lib/rt/pure/__release
    end
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  local.get $2
  local.get $0
  i32.load offset=12
  local.tee $3
  i32.lt_s
  if
   local.get $0
   i32.load offset=4
   local.tee $4
   local.get $2
   i32.const 2
   i32.shl
   i32.add
   local.set $1
   local.get $4
   local.get $3
   i32.const 2
   i32.shl
   i32.add
   local.set $3
   loop $do-continue|0
    local.get $1
    i32.load
    call $~lib/rt/pure/__release
    local.get $1
    i32.const 4
    i32.add
    local.tee $1
    local.get $3
    i32.lt_u
    br_if $do-continue|0
   end
  else
   local.get $0
   local.get $2
   call $~lib/array/ensureSize
  end
  local.get $0
  local.get $2
  i32.store offset=12
  local.get $0
 )
 (func $~lib/util/string/joinReferenceArray<~lib/string/String> (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  i32.const 2192
  call $~lib/rt/pure/__retain
  local.set $6
  local.get $1
  i32.const 1
  i32.sub
  local.tee $7
  i32.const 0
  i32.lt_s
  if
   local.get $6
   call $~lib/rt/pure/__release
   i32.const 1680
   return
  end
  local.get $7
  i32.eqz
  if
   local.get $0
   i32.load
   local.tee $3
   if
    local.get $3
    call $~lib/rt/pure/__retain
    local.set $3
   end
   local.get $3
   if (result i32)
    local.get $3
    call $~lib/rt/pure/__retain
   else
    i32.const 1680
   end
   local.get $6
   call $~lib/rt/pure/__release
   local.get $3
   call $~lib/rt/pure/__release
   return
  end
  i32.const 1680
  local.set $1
  local.get $6
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 1
  i32.shr_u
  local.set $8
  loop $for-loop|0
   local.get $3
   local.get $7
   i32.lt_s
   if
    local.get $4
    local.get $0
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $2
    i32.ne
    if
     local.get $2
     call $~lib/rt/pure/__retain
     local.set $2
     local.get $4
     call $~lib/rt/pure/__release
    end
    local.get $2
    local.tee $4
    if
     local.get $1
     local.get $1
     local.get $4
     call $~lib/rt/pure/__retain
     local.tee $5
     call $~lib/string/String.__concat
     local.tee $9
     local.tee $2
     i32.ne
     if
      local.get $2
      call $~lib/rt/pure/__retain
      local.set $2
      local.get $1
      call $~lib/rt/pure/__release
     end
     local.get $2
     local.set $1
     local.get $5
     call $~lib/rt/pure/__release
     local.get $9
     call $~lib/rt/pure/__release
    end
    local.get $8
    if
     local.get $1
     local.get $6
     call $~lib/string/String.__concat
     local.set $2
     local.get $1
     local.tee $5
     local.get $2
     local.tee $1
     i32.ne
     if
      local.get $1
      call $~lib/rt/pure/__retain
      local.set $1
      local.get $5
      call $~lib/rt/pure/__release
     end
     local.get $2
     call $~lib/rt/pure/__release
    end
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  local.get $4
  local.get $0
  local.get $7
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $2
   call $~lib/rt/pure/__retain
   local.set $2
   local.get $4
   call $~lib/rt/pure/__release
  end
  local.get $2
  local.tee $0
  if
   local.get $0
   call $~lib/rt/pure/__retain
   local.tee $2
   local.get $1
   local.get $1
   local.get $2
   call $~lib/string/String.__concat
   local.tee $5
   local.tee $2
   i32.ne
   if
    local.get $2
    call $~lib/rt/pure/__retain
    local.set $2
    local.get $1
    call $~lib/rt/pure/__release
   end
   local.get $2
   local.set $1
   call $~lib/rt/pure/__release
   local.get $5
   call $~lib/rt/pure/__release
  end
  local.get $6
  call $~lib/rt/pure/__release
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
 )
 (func $~lib/util/hash/hash32 (param $0 i32) (result i32)
  local.get $0
  i32.const 255
  i32.and
  i32.const -2128831035
  i32.xor
  i32.const 16777619
  i32.mul
  local.get $0
  i32.const 8
  i32.shr_u
  i32.const 255
  i32.and
  i32.xor
  i32.const 16777619
  i32.mul
  local.get $0
  i32.const 16
  i32.shr_u
  i32.const 255
  i32.and
  i32.xor
  i32.const 16777619
  i32.mul
  local.get $0
  i32.const 24
  i32.shr_u
  i32.xor
  i32.const 16777619
  i32.mul
 )
 (func $~lib/map/Map<usize,i32>#find (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  local.get $0
  i32.load
  local.get $2
  local.get $0
  i32.load offset=4
  i32.and
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $0
  loop $while-continue|0
   local.get $0
   if
    local.get $0
    i32.load offset=8
    i32.const 1
    i32.and
    if (result i32)
     i32.const 0
    else
     local.get $1
     local.get $0
     i32.load
     i32.eq
    end
    if
     local.get $0
     return
    end
    local.get $0
    i32.load offset=8
    i32.const -2
    i32.and
    local.set $0
    br $while-continue|0
   end
  end
  i32.const 0
 )
 (func $~lib/map/Map<usize,i32>#rehash (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $1
  i32.const 1
  i32.add
  local.tee $3
  i32.const 2
  i32.shl
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $5
  local.get $3
  i32.const 3
  i32.shl
  i32.const 3
  i32.div_s
  local.tee $6
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $3
  local.get $0
  i32.load offset=8
  local.tee $4
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $7
  local.get $3
  local.set $2
  loop $while-continue|0
   local.get $4
   local.get $7
   i32.ne
   if
    local.get $4
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $2
     local.get $4
     i32.load
     i32.store
     local.get $2
     local.get $4
     i32.load offset=4
     i32.store offset=4
     local.get $2
     local.get $5
     local.get $4
     i32.load
     call $~lib/util/hash/hash32
     local.get $1
     i32.and
     i32.const 2
     i32.shl
     i32.add
     local.tee $8
     i32.load
     i32.store offset=8
     local.get $8
     local.get $2
     i32.store
     local.get $2
     i32.const 12
     i32.add
     local.set $2
    end
    local.get $4
    i32.const 12
    i32.add
    local.set $4
    br $while-continue|0
   end
  end
  local.get $5
  local.tee $4
  local.get $0
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $4
   call $~lib/rt/pure/__retain
   local.set $4
   local.get $2
   call $~lib/rt/pure/__release
  end
  local.get $0
  local.get $4
  i32.store
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $3
  local.tee $1
  local.get $0
  i32.load offset=8
  local.tee $4
  i32.ne
  if
   local.get $1
   call $~lib/rt/pure/__retain
   local.set $1
   local.get $4
   call $~lib/rt/pure/__release
  end
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $6
  i32.store offset=12
  local.get $0
  local.get $0
  i32.load offset=20
  i32.store offset=16
  local.get $5
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
 )
 (func $~lib/map/Map<usize,i32>#set (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  local.get $1
  local.get $1
  call $~lib/util/hash/hash32
  local.tee $5
  call $~lib/map/Map<usize,i32>#find
  local.tee $3
  if
   local.get $3
   local.get $2
   i32.store offset=4
  else
   local.get $0
   i32.load offset=16
   local.get $0
   i32.load offset=12
   i32.eq
   if
    local.get $0
    local.get $0
    i32.load offset=20
    local.get $0
    i32.load offset=12
    i32.const 3
    i32.mul
    i32.const 4
    i32.div_s
    i32.lt_s
    if (result i32)
     local.get $0
     i32.load offset=4
    else
     local.get $0
     i32.load offset=4
     i32.const 1
     i32.shl
     i32.const 1
     i32.or
    end
    call $~lib/map/Map<usize,i32>#rehash
   end
   local.get $0
   i32.load offset=8
   call $~lib/rt/pure/__retain
   local.set $4
   local.get $0
   local.get $0
   i32.load offset=16
   local.tee $3
   i32.const 1
   i32.add
   i32.store offset=16
   local.get $4
   local.get $3
   i32.const 12
   i32.mul
   i32.add
   local.tee $3
   local.get $1
   i32.store
   local.get $3
   local.get $2
   i32.store offset=4
   local.get $0
   local.get $0
   i32.load offset=20
   i32.const 1
   i32.add
   i32.store offset=20
   local.get $3
   local.get $0
   i32.load
   local.get $5
   local.get $0
   i32.load offset=4
   i32.and
   i32.const 2
   i32.shl
   i32.add
   local.tee $1
   i32.load
   i32.store offset=8
   local.get $1
   local.get $3
   i32.store
   local.get $4
   call $~lib/rt/pure/__release
  end
  local.get $0
  call $~lib/rt/pure/__retain
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/string/String> (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  block $folding-inner0
   local.get $0
   i32.eqz
   if
    i32.const 1
    i32.const 0
    i32.const 0
    i32.const 0
    i32.const 0
    i32.const 0
    i32.const 4
    i32.const 1
    i32.const 1
    i32.const 2224
    i32.const 0
    i32.const 0
    i32.const 1
    call $node_modules/@as-pect/assembly/assembly/internal/Reflect/createReflectedValue
    local.set $2
    br $folding-inner0
   end
   local.get $1
   local.get $0
   local.get $0
   call $~lib/util/hash/hash32
   call $~lib/map/Map<usize,i32>#find
   if
    local.get $1
    local.get $0
    local.get $0
    call $~lib/util/hash/hash32
    call $~lib/map/Map<usize,i32>#find
    local.tee $2
    i32.eqz
    if
     i32.const 1936
     i32.const 2000
     i32.const 104
     i32.const 17
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.load offset=4
    local.set $2
    br $folding-inner0
   end
   local.get $1
   local.get $0
   i32.const 0
   i32.const 0
   i32.const 0
   i32.const 0
   local.get $0
   i32.const 0
   local.get $0
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 2
   i32.const 1
   i32.const 2224
   local.get $0
   i32.const 0
   i32.const 1
   call $node_modules/@as-pect/assembly/assembly/internal/Reflect/createReflectedValue
   local.tee $2
   call $~lib/map/Map<usize,i32>#set
   call $~lib/rt/pure/__release
   local.get $0
   call $~lib/rt/pure/__release
   local.get $1
   call $~lib/rt/pure/__release
   local.get $2
   return
  end
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/log/log<~lib/string/String> (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  global.get $node_modules/@as-pect/assembly/assembly/internal/log/ignoreLogs
  if
   local.get $0
   call $~lib/rt/pure/__release
   return
  end
  i32.const 1
  global.set $~argumentsLength
  local.get $0
  local.set $1
  i32.const 24
  i32.const 10
  call $~lib/rt/pure/__new
  call $~lib/rt/pure/__retain
  local.tee $0
  i32.const 16
  call $~lib/arraybuffer/ArrayBuffer#constructor
  i32.store
  local.get $0
  i32.const 3
  i32.store offset=4
  local.get $0
  i32.const 48
  call $~lib/arraybuffer/ArrayBuffer#constructor
  i32.store offset=8
  local.get $0
  i32.const 4
  i32.store offset=12
  local.get $0
  i32.const 0
  i32.store offset=16
  local.get $0
  i32.const 0
  i32.store offset=20
  local.get $1
  local.get $0
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/string/String>
  local.set $2
  local.get $0
  call $~lib/rt/pure/__release
  local.get $2
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/attachStackTraceToReflectedValue
  local.get $2
  call $node_modules/@as-pect/assembly/assembly/internal/log/logReflectedValue
  local.get $1
  call $~lib/rt/pure/__release
 )
 (func $assembly/index/addNextState~anonymous|0 (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  local.get $2
  call $~lib/rt/pure/__retain
  local.get $0
  global.get $assembly/index/st
  i32.eq
  local.set $2
  local.get $0
  call $~lib/rt/pure/__release
  call $~lib/rt/pure/__release
  local.get $2
 )
 (func $assembly/index/addNextState (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $3
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $4
  local.get $2
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $3
  i32.load offset=8
  i32.load offset=12
  i32.const 0
  i32.gt_s
  if
   loop $for-loop|0
    local.get $5
    local.get $3
    i32.load offset=8
    i32.load offset=12
    i32.lt_s
    if
     local.get $3
     i32.load offset=8
     local.get $5
     call $~lib/array/Array<~lib/string/String>#__get
     global.get $assembly/index/st
     call $~lib/rt/pure/__release
     global.set $assembly/index/st
     i32.const 0
     local.set $0
     local.get $1
     i32.load offset=12
     local.set $6
     block $__inlined_func$~lib/array/Array<assembly/index/State>#findIndex
      loop $for-loop|01
       local.get $0
       local.get $6
       local.get $1
       i32.load offset=12
       local.tee $2
       local.get $2
       local.get $6
       i32.gt_s
       select
       i32.lt_s
       if
        local.get $1
        i32.load offset=4
        local.get $0
        i32.const 2
        i32.shl
        i32.add
        i32.load
        i32.const 3
        global.set $~argumentsLength
        local.get $0
        local.get $1
        i32.const 2288
        i32.load
        call_indirect (type $i32_i32_i32_=>_i32)
        if
         i32.const 2288
         call $~lib/rt/pure/__release
         br $__inlined_func$~lib/array/Array<assembly/index/State>#findIndex
        end
        local.get $0
        i32.const 1
        i32.add
        local.set $0
        br $for-loop|01
       end
      end
      i32.const 2288
      call $~lib/rt/pure/__release
      i32.const -1
      local.set $0
     end
     local.get $0
     i32.const -1
     i32.eq
     if
      local.get $1
      global.get $assembly/index/st
      call $~lib/array/Array<~lib/string/String>#push
      global.get $assembly/index/st
      local.get $4
      local.get $1
      call $assembly/index/addNextState
     end
     local.get $5
     i32.const 1
     i32.add
     local.set $5
     br $for-loop|0
    end
   end
  else
   local.get $4
   local.get $3
   call $~lib/array/Array<~lib/string/String>#push
  end
  local.get $3
  call $~lib/rt/pure/__release
  local.get $4
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
 )
 (func $~lib/rt/__newArray (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  i32.const 16
  i32.const 6
  call $~lib/rt/pure/__new
  local.tee $1
  i32.const 0
  i32.const 0
  call $~lib/rt/pure/__new
  local.set $2
  local.get $0
  if
   local.get $2
   local.get $0
   i32.const 0
   call $~lib/memory/memory.copy
  end
  local.get $2
  call $~lib/rt/pure/__retain
  i32.store
  local.get $1
  local.get $2
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $1
  i32.const 0
  i32.store offset=12
  local.get $1
 )
 (func $assembly/index/addNextState@varargs (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  block $1of1
   block $0of1
    block $outOfRange
     global.get $~argumentsLength
     i32.const 2
     i32.sub
     br_table $0of1 $1of1 $outOfRange
    end
    unreachable
   end
   i32.const 2320
   call $~lib/rt/__newArray
   call $~lib/rt/pure/__retain
   local.tee $3
   local.set $2
  end
  local.get $0
  local.get $1
  local.get $2
  call $assembly/index/addNextState
  local.get $3
  call $~lib/rt/pure/__release
 )
 (func $assembly/index/search~anonymous|0 (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  local.get $2
  call $~lib/rt/pure/__retain
  local.get $0
  i32.load8_u
  local.set $2
  local.get $0
  call $~lib/rt/pure/__release
  call $~lib/rt/pure/__release
  local.get $2
 )
 (func $assembly/index/search (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $11
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $8
  call $~lib/array/Array<assembly/index/State>#constructor
  local.set $1
  local.get $11
  i32.load
  i32.const 2
  global.set $~argumentsLength
  local.get $1
  call $assembly/index/addNextState@varargs
  loop $for-loop|0
   local.get $4
   local.get $8
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.lt_s
   if
    local.get $8
    local.get $4
    call $~lib/string/String#charAt
    local.set $5
    call $~lib/array/Array<assembly/index/State>#constructor
    local.set $2
    i32.const 0
    local.set $0
    loop $for-loop|1
     local.get $0
     local.get $1
     i32.load offset=12
     i32.lt_s
     if
      local.get $1
      local.get $0
      call $~lib/array/Array<~lib/string/String>#__get
      local.tee $6
      i32.load offset=4
      local.get $5
      call $~lib/rt/pure/__retain
      local.tee $7
      call $~lib/rt/pure/__retain
      local.tee $9
      call $~lib/util/hash/hashStr
      local.set $10
      local.get $9
      call $~lib/rt/pure/__release
      local.get $7
      local.get $10
      call $~lib/map/Map<~lib/string/String,i8>#find
      i32.const 0
      i32.ne
      local.get $7
      call $~lib/rt/pure/__release
      if
       local.get $6
       i32.load offset=4
       local.get $5
       call $~lib/rt/pure/__retain
       local.tee $7
       call $~lib/rt/pure/__retain
       local.tee $9
       call $~lib/util/hash/hashStr
       local.set $10
       local.get $9
       call $~lib/rt/pure/__release
       local.get $7
       local.get $10
       call $~lib/map/Map<~lib/string/String,i8>#find
       local.tee $3
       i32.eqz
       if
        i32.const 1936
        i32.const 2000
        i32.const 104
        i32.const 17
        call $~lib/builtins/abort
        unreachable
       end
       local.get $3
       i32.load offset=4
       call $~lib/rt/pure/__retain
       local.set $3
       local.get $7
       call $~lib/rt/pure/__release
       i32.const 2
       global.set $~argumentsLength
       local.get $3
       local.get $2
       call $assembly/index/addNextState@varargs
       local.get $3
       call $~lib/rt/pure/__release
      end
      local.get $6
      call $~lib/rt/pure/__release
      local.get $0
      i32.const 1
      i32.add
      local.set $0
      br $for-loop|1
     end
    end
    local.get $2
    local.tee $0
    local.get $1
    i32.ne
    if
     local.get $0
     call $~lib/rt/pure/__retain
     local.set $0
     local.get $1
     call $~lib/rt/pure/__release
    end
    local.get $0
    local.set $1
    local.get $5
    call $~lib/rt/pure/__release
    local.get $2
    call $~lib/rt/pure/__release
    local.get $4
    i32.const 1
    i32.add
    local.set $4
    br $for-loop|0
   end
  end
  i32.const 0
  local.set $0
  i32.const 0
  call $~lib/rt/__newArray
  call $~lib/rt/pure/__retain
  local.set $2
  local.get $1
  i32.load offset=12
  local.set $6
  loop $for-loop|01
   local.get $0
   local.get $6
   local.get $1
   i32.load offset=12
   local.tee $4
   local.get $4
   local.get $6
   i32.gt_s
   select
   i32.lt_s
   if
    local.get $1
    i32.load offset=4
    local.get $0
    i32.const 2
    i32.shl
    i32.add
    i32.load
    call $~lib/rt/pure/__retain
    local.set $4
    i32.const 3
    global.set $~argumentsLength
    local.get $4
    local.get $0
    local.get $1
    i32.const 2352
    i32.load
    call_indirect (type $i32_i32_i32_=>_i32)
    if
     local.get $2
     local.get $4
     call $~lib/array/Array<~lib/string/String>#push
    end
    local.get $4
    call $~lib/rt/pure/__release
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    br $for-loop|01
   end
  end
  i32.const 2352
  call $~lib/rt/pure/__release
  local.get $2
  i32.load offset=12
  i32.const 0
  i32.gt_s
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $11
  call $~lib/rt/pure/__release
  local.get $8
  call $~lib/rt/pure/__release
 )
 (func $assembly/index/recognize (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.tee $0
  local.get $1
  call $~lib/rt/pure/__retain
  local.tee $1
  call $assembly/index/search
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
 )
 (func $start:assembly/__tests__/example.spec~anonymous|0~anonymous|0
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  i32.const 2160
  call $assembly/index/toPostfix
  local.tee $3
  call $assembly/index/toNFA
  local.tee $2
  i32.load
  i32.load offset=4
  call $~lib/map/Map<~lib/string/String,assembly/index/State>#keys
  local.tee $4
  local.tee $0
  i32.load offset=4
  local.get $0
  i32.load offset=12
  call $~lib/util/string/joinReferenceArray<~lib/string/String>
  local.set $0
  i32.const 2192
  call $~lib/rt/pure/__release
  local.get $0
  call $~lib/string/String.__concat
  local.tee $1
  call $node_modules/@as-pect/assembly/assembly/internal/log/log<~lib/string/String>
  local.get $2
  i32.const 2256
  call $assembly/index/recognize
  if (result i32)
   i32.const 2384
   local.tee $5
  else
   i32.const 2416
   local.tee $6
  end
  call $node_modules/@as-pect/assembly/assembly/internal/log/log<~lib/string/String>
  local.get $2
  i32.const 2448
  call $assembly/index/recognize
  if (result i32)
   i32.const 2384
   local.tee $7
  else
   i32.const 2416
   local.tee $8
  end
  call $node_modules/@as-pect/assembly/assembly/internal/log/log<~lib/string/String>
  local.get $3
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $4
  call $~lib/rt/pure/__release
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $5
  call $~lib/rt/pure/__release
  local.get $6
  call $~lib/rt/pure/__release
  local.get $7
  call $~lib/rt/pure/__release
  local.get $8
  call $~lib/rt/pure/__release
 )
 (func $start:assembly/__tests__/example.spec~anonymous|0
  i32.const 1616
  i32.const 2480
  call $node_modules/@as-pect/assembly/assembly/internal/Test/it
 )
 (func $start:node_modules/@as-pect/assembly/assembly/internal/noOp~anonymous|0
  nop
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/call/__call (param $0 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  i32.const 0
  global.set $~argumentsLength
  local.get $0
  i32.load
  call_indirect (type $none_=>_none)
  local.get $0
  call $~lib/rt/pure/__release
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/log/__ignoreLogs (param $0 i32)
  local.get $0
  i32.const 0
  i32.ne
  global.set $node_modules/@as-pect/assembly/assembly/internal/log/ignoreLogs
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/RTrace/__getUsizeArrayId (result i32)
  i32.const 14
 )
 (func $~start
  (local $0 i32)
  global.get $~started
  if
   return
  else
   i32.const 1
   global.set $~started
  end
  i32.const 24
  i32.const 3
  call $~lib/rt/pure/__new
  call $~lib/rt/pure/__retain
  local.tee $0
  i32.const 16
  call $~lib/arraybuffer/ArrayBuffer#constructor
  i32.store
  local.get $0
  i32.const 3
  i32.store offset=4
  local.get $0
  i32.const 48
  call $~lib/arraybuffer/ArrayBuffer#constructor
  i32.store offset=8
  local.get $0
  i32.const 4
  i32.store offset=12
  local.get $0
  i32.const 0
  i32.store offset=16
  local.get $0
  i32.const 0
  i32.store offset=20
  local.get $0
  global.set $assembly/index/operatorPrecedence
  global.get $assembly/index/operatorPrecedence
  i32.const 1360
  i32.const 0
  call $~lib/map/Map<~lib/string/String,i8>#set
  call $~lib/rt/pure/__release
  global.get $assembly/index/operatorPrecedence
  i32.const 1392
  i32.const 1
  call $~lib/map/Map<~lib/string/String,i8>#set
  call $~lib/rt/pure/__release
  global.get $assembly/index/operatorPrecedence
  i32.const 1424
  i32.const 2
  call $~lib/map/Map<~lib/string/String,i8>#set
  call $~lib/rt/pure/__release
  global.get $assembly/index/operatorPrecedence
  i32.const 1456
  i32.const 2
  call $~lib/map/Map<~lib/string/String,i8>#set
  call $~lib/rt/pure/__release
  global.get $assembly/index/operatorPrecedence
  i32.const 1488
  i32.const 2
  call $~lib/map/Map<~lib/string/String,i8>#set
  call $~lib/rt/pure/__release
  i32.const 0
  call $assembly/index/createState
  global.set $assembly/index/st
  i32.const 1568
  i32.const 2512
  call $node_modules/@as-pect/assembly/assembly/internal/Test/describe
 )
 (func $~lib/rt/pure/decrement (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 268435455
  i32.and
  local.set $1
  local.get $0
  call $~lib/rt/rtrace/ondecrement
  local.get $0
  i32.load
  i32.const 1
  i32.and
  if
   i32.const 0
   i32.const 1120
   i32.const 122
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 1
  i32.eq
  if
   local.get $0
   i32.const 20
   i32.add
   i32.const 1
   call $~lib/rt/__visit_members
   local.get $2
   i32.const -2147483648
   i32.and
   if
    local.get $0
    i32.const -2147483648
    i32.store offset=4
   else
    global.get $~lib/rt/tlsf/ROOT
    local.get $0
    call $~lib/rt/tlsf/freeBlock
   end
  else
   local.get $1
   i32.eqz
   if
    i32.const 0
    i32.const 1120
    i32.const 136
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.load offset=12
   local.tee $3
   i32.const 2608
   i32.load
   i32.gt_u
   if
    i32.const 1712
    i32.const 2576
    i32.const 22
    i32.const 28
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 3
   i32.shl
   i32.const 2612
   i32.add
   i32.load
   i32.const 32
   i32.and
   if
    local.get $0
    local.get $1
    i32.const 1
    i32.sub
    local.get $2
    i32.const -268435456
    i32.and
    i32.or
    i32.store offset=4
   else
    local.get $0
    local.get $1
    i32.const 1
    i32.sub
    i32.const -1342177280
    i32.or
    i32.store offset=4
    local.get $2
    i32.const -2147483648
    i32.and
    i32.eqz
    if
     global.get $~lib/rt/pure/CUR
     local.tee $1
     global.get $~lib/rt/pure/END
     i32.ge_u
     if
      global.get $~lib/rt/pure/CUR
      global.get $~lib/rt/pure/ROOTS
      local.tee $1
      i32.sub
      local.tee $3
      i32.const 1
      i32.shl
      local.tee $2
      i32.const 256
      local.get $2
      i32.const 256
      i32.gt_u
      select
      local.tee $4
      call $~lib/rt/tlsf/__alloc
      local.tee $2
      local.get $1
      local.get $3
      call $~lib/memory/memory.copy
      local.get $1
      if
       local.get $1
       i32.const 2732
       i32.ge_u
       if
        global.get $~lib/rt/tlsf/ROOT
        i32.eqz
        if
         call $~lib/rt/tlsf/initialize
        end
        global.get $~lib/rt/tlsf/ROOT
        local.get $1
        call $~lib/rt/tlsf/checkUsedBlock
        call $~lib/rt/tlsf/freeBlock
       end
      end
      local.get $2
      global.set $~lib/rt/pure/ROOTS
      local.get $2
      local.get $3
      i32.add
      global.set $~lib/rt/pure/CUR
      local.get $2
      local.get $4
      i32.add
      global.set $~lib/rt/pure/END
      global.get $~lib/rt/pure/CUR
      local.set $1
     end
     local.get $1
     local.get $0
     i32.store
     local.get $1
     i32.const 4
     i32.add
     global.set $~lib/rt/pure/CUR
    end
   end
  end
 )
 (func $~lib/rt/pure/scanBlack (param $0 i32)
  local.get $0
  local.get $0
  i32.load offset=4
  i32.const -1879048193
  i32.and
  i32.store offset=4
  local.get $0
  i32.const 20
  i32.add
  i32.const 4
  call $~lib/rt/__visit_members
 )
 (func $~lib/rt/pure/__visit (param $0 i32) (param $1 i32)
  local.get $0
  i32.const 2732
  i32.lt_u
  if
   return
  end
  local.get $0
  i32.const 20
  i32.sub
  local.set $0
  block $break|0
   block $case5|0
    block $case4|0
     block $case3|0
      block $case2|0
       block $case1|0
        block $case0|0
         local.get $1
         i32.const 1
         i32.sub
         br_table $case0|0 $case1|0 $case2|0 $case3|0 $case4|0 $case5|0
        end
        local.get $0
        call $~lib/rt/pure/decrement
        br $break|0
       end
       local.get $0
       i32.load offset=4
       i32.const 268435455
       i32.and
       i32.eqz
       if
        i32.const 0
        i32.const 1120
        i32.const 79
        i32.const 20
        call $~lib/builtins/abort
        unreachable
       end
       local.get $0
       local.get $0
       i32.load offset=4
       i32.const 1
       i32.sub
       i32.store offset=4
       local.get $0
       i32.load offset=4
       local.tee $1
       i32.const 1879048192
       i32.and
       i32.const 268435456
       i32.ne
       if
        local.get $0
        local.get $1
        i32.const -1879048193
        i32.and
        i32.const 268435456
        i32.or
        i32.store offset=4
        local.get $0
        i32.const 20
        i32.add
        i32.const 2
        call $~lib/rt/__visit_members
       end
       br $break|0
      end
      local.get $0
      i32.load offset=4
      local.tee $1
      i32.const 1879048192
      i32.and
      i32.const 268435456
      i32.eq
      if
       local.get $1
       i32.const 268435455
       i32.and
       if
        local.get $0
        call $~lib/rt/pure/scanBlack
       else
        local.get $0
        local.get $1
        i32.const -1879048193
        i32.and
        i32.const 536870912
        i32.or
        i32.store offset=4
        local.get $0
        i32.const 20
        i32.add
        i32.const 3
        call $~lib/rt/__visit_members
       end
      end
      br $break|0
     end
     local.get $0
     i32.load offset=4
     local.tee $1
     i32.const -268435456
     i32.and
     local.get $1
     i32.const 1
     i32.add
     i32.const -268435456
     i32.and
     i32.ne
     if
      i32.const 0
      i32.const 1120
      i32.const 90
      i32.const 9
      call $~lib/builtins/abort
      unreachable
     end
     local.get $0
     local.get $1
     i32.const 1
     i32.add
     i32.store offset=4
     local.get $1
     i32.const 1879048192
     i32.and
     if
      local.get $0
      call $~lib/rt/pure/scanBlack
     end
     br $break|0
    end
    local.get $0
    i32.load offset=4
    local.tee $1
    i32.const -2147483648
    i32.and
    i32.eqz
    i32.const 0
    local.get $1
    i32.const 1879048192
    i32.and
    i32.const 536870912
    i32.eq
    select
    if
     local.get $0
     local.get $1
     i32.const -1879048193
     i32.and
     i32.store offset=4
     local.get $0
     i32.const 20
     i32.add
     i32.const 5
     call $~lib/rt/__visit_members
     global.get $~lib/rt/tlsf/ROOT
     local.get $0
     call $~lib/rt/tlsf/freeBlock
    end
    br $break|0
   end
   i32.const 0
   i32.const 1120
   i32.const 101
   i32.const 27
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/rt/__visit_members (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  block $folding-inner2
   block $folding-inner1
    block $folding-inner0
     block $switch$1$default
      block $switch$1$case$12
       block $switch$1$case$10
        block $switch$1$case$7
         block $switch$1$case$6
          block $switch$1$case$5
           block $switch$1$case$4
            block $switch$1$case$2
             local.get $0
             i32.const 8
             i32.sub
             i32.load
             br_table $switch$1$case$2 $switch$1$case$2 $switch$1$case$4 $switch$1$case$5 $switch$1$case$6 $switch$1$case$7 $folding-inner0 $folding-inner0 $switch$1$case$10 $folding-inner0 $switch$1$case$12 $folding-inner1 $folding-inner2 $folding-inner1 $folding-inner2 $switch$1$default
            end
            return
           end
           local.get $0
           i32.load
           local.tee $0
           if
            local.get $0
            local.get $1
            call $~lib/rt/pure/__visit
           end
           return
          end
          local.get $0
          i32.load
          local.get $1
          local.tee $2
          call $~lib/rt/pure/__visit
          local.get $0
          i32.load offset=8
          local.tee $3
          local.tee $1
          local.get $0
          i32.load offset=16
          i32.const 12
          i32.mul
          i32.add
          local.set $0
          loop $while-continue|0
           local.get $0
           local.get $1
           i32.gt_u
           if
            local.get $1
            i32.load offset=8
            i32.const 1
            i32.and
            i32.eqz
            if
             local.get $1
             i32.load
             local.get $2
             call $~lib/rt/pure/__visit
            end
            local.get $1
            i32.const 12
            i32.add
            local.set $1
            br $while-continue|0
           end
          end
          local.get $3
          local.get $2
          call $~lib/rt/pure/__visit
          return
         end
         local.get $0
         i32.load offset=4
         local.tee $2
         if
          local.get $2
          local.get $1
          call $~lib/rt/pure/__visit
         end
         local.get $0
         i32.load offset=8
         local.tee $0
         if
          local.get $0
          local.get $1
          call $~lib/rt/pure/__visit
         end
         return
        end
        local.get $0
        i32.load
        local.get $1
        call $~lib/rt/pure/__visit
        local.get $0
        i32.load offset=8
        local.tee $3
        local.tee $2
        local.get $0
        i32.load offset=16
        i32.const 12
        i32.mul
        i32.add
        local.set $0
        loop $while-continue|00
         local.get $0
         local.get $2
         i32.gt_u
         if
          local.get $2
          i32.load offset=8
          i32.const 1
          i32.and
          i32.eqz
          if
           local.get $2
           i32.load
           local.get $1
           call $~lib/rt/pure/__visit
           local.get $2
           i32.load offset=4
           local.get $1
           call $~lib/rt/pure/__visit
          end
          local.get $2
          i32.const 12
          i32.add
          local.set $2
          br $while-continue|00
         end
        end
        local.get $3
        local.get $1
        call $~lib/rt/pure/__visit
        return
       end
       local.get $0
       i32.load
       local.tee $2
       if
        local.get $2
        local.get $1
        call $~lib/rt/pure/__visit
       end
       local.get $0
       i32.load offset=4
       local.tee $0
       if
        local.get $0
        local.get $1
        call $~lib/rt/pure/__visit
       end
       return
      end
      local.get $0
      i32.load
      local.get $1
      call $~lib/rt/pure/__visit
      local.get $0
      i32.load offset=8
      local.get $1
      call $~lib/rt/pure/__visit
      return
     end
     unreachable
    end
    local.get $0
    i32.load offset=4
    local.tee $2
    local.get $0
    i32.load offset=12
    i32.const 2
    i32.shl
    i32.add
    local.set $3
    loop $while-continue|01
     local.get $2
     local.get $3
     i32.lt_u
     if
      local.get $2
      i32.load
      local.tee $4
      if
       local.get $4
       local.get $1
       call $~lib/rt/pure/__visit
      end
      local.get $2
      i32.const 4
      i32.add
      local.set $2
      br $while-continue|01
     end
    end
    local.get $0
    i32.load
    local.get $1
    call $~lib/rt/pure/__visit
    return
   end
   local.get $0
   i32.load offset=4
   local.get $1
   call $~lib/rt/pure/__visit
   return
  end
  local.get $0
  i32.load
  local.get $1
  call $~lib/rt/pure/__visit
 )
)
