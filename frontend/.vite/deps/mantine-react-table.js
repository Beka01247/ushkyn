import {
  IconArrowAutofitContent,
  IconArrowsSort,
  IconBaselineDensityLarge,
  IconBaselineDensityMedium,
  IconBaselineDensitySmall,
  IconBoxMultiple,
  IconChevronDown,
  IconChevronLeft,
  IconChevronLeftPipe,
  IconChevronRight,
  IconChevronRightPipe,
  IconChevronsDown,
  IconCircleX,
  IconClearAll,
  IconColumns,
  IconDeviceFloppy,
  IconDots,
  IconDotsVertical,
  IconEdit,
  IconEyeOff,
  IconFilter,
  IconFilterCog,
  IconFilterOff,
  IconGripHorizontal,
  IconMaximize,
  IconMinimize,
  IconPinned,
  IconPinnedOff,
  IconSearch,
  IconSearchOff,
  IconSortAscending,
  IconSortDescending,
  IconX
} from "./chunk-URLRDX2X.js";
import {
  AccordionChevron,
  ActionIcon,
  Alert,
  Autocomplete,
  Badge,
  Box,
  Button,
  CheckIcon,
  Checkbox,
  CloseButton,
  Collapse,
  CopyButton,
  Divider,
  Flex,
  Group,
  Highlight,
  Indicator,
  Input,
  InputBase,
  LoadingOverlay,
  Menu,
  Modal,
  MultiSelect,
  Pagination,
  Paper,
  Popover,
  Progress,
  Radio,
  RangeSlider,
  Select,
  Skeleton,
  Stack,
  Switch,
  Table,
  TableTbody,
  TableTd,
  TableTfoot,
  TableTh,
  TableThead,
  TableTr,
  Text,
  TextInput,
  Tooltip,
  Transition,
  UnstyledButton,
  clsx_default,
  createVarsResolver,
  darken,
  factory,
  getFontSize,
  getSize,
  getSpacing,
  lighten,
  useDirection,
  useInputProps,
  useMantineColorScheme,
  useMantineTheme,
  useProps,
  useResolvedStylesApi,
  useStyles
} from "./chunk-F6YLG7IS.js";
import {
  clamp,
  useDebouncedValue,
  useDidUpdate,
  useDisclosure,
  useMediaQuery,
  useMergedRef,
  useUncontrolled
} from "./chunk-RVCDVWEE.js";
import {
  require_jsx_runtime
} from "./chunk-XKNC3ECD.js";
import {
  require_dayjs_min
} from "./chunk-FQXRACN4.js";
import "./chunk-CRS3CFTV.js";
import {
  require_react_dom
} from "./chunk-VSK6FCDQ.js";
import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-M47QXNUA.js";

// node_modules/dayjs/plugin/timezone.js
var require_timezone = __commonJS({
  "node_modules/dayjs/plugin/timezone.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_timezone = e();
    }(exports, function() {
      "use strict";
      var t = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, e = {};
      return function(n, i, o) {
        var r, a = function(t2, n2, i2) {
          void 0 === i2 && (i2 = {});
          var o2 = new Date(t2), r2 = function(t3, n3) {
            void 0 === n3 && (n3 = {});
            var i3 = n3.timeZoneName || "short", o3 = t3 + "|" + i3, r3 = e[o3];
            return r3 || (r3 = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: t3, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: i3 }), e[o3] = r3), r3;
          }(n2, i2);
          return r2.formatToParts(o2);
        }, u = function(e2, n2) {
          for (var i2 = a(e2, n2), r2 = [], u2 = 0; u2 < i2.length; u2 += 1) {
            var f2 = i2[u2], s2 = f2.type, m = f2.value, c = t[s2];
            c >= 0 && (r2[c] = parseInt(m, 10));
          }
          var d = r2[3], l = 24 === d ? 0 : d, h = r2[0] + "-" + r2[1] + "-" + r2[2] + " " + l + ":" + r2[4] + ":" + r2[5] + ":000", v = +e2;
          return (o.utc(h).valueOf() - (v -= v % 1e3)) / 6e4;
        }, f = i.prototype;
        f.tz = function(t2, e2) {
          void 0 === t2 && (t2 = r);
          var n2 = this.utcOffset(), i2 = this.toDate(), a2 = i2.toLocaleString("en-US", { timeZone: t2 }), u2 = Math.round((i2 - new Date(a2)) / 1e3 / 60), f2 = o(a2, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(i2.getTimezoneOffset() / 15) - u2, true);
          if (e2) {
            var s2 = f2.utcOffset();
            f2 = f2.add(n2 - s2, "minute");
          }
          return f2.$x.$timezone = t2, f2;
        }, f.offsetName = function(t2) {
          var e2 = this.$x.$timezone || o.tz.guess(), n2 = a(this.valueOf(), e2, { timeZoneName: t2 }).find(function(t3) {
            return "timezonename" === t3.type.toLowerCase();
          });
          return n2 && n2.value;
        };
        var s = f.startOf;
        f.startOf = function(t2, e2) {
          if (!this.$x || !this.$x.$timezone)
            return s.call(this, t2, e2);
          var n2 = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
          return s.call(n2, t2, e2).tz(this.$x.$timezone, true);
        }, o.tz = function(t2, e2, n2) {
          var i2 = n2 && e2, a2 = n2 || e2 || r, f2 = u(+o(), a2);
          if ("string" != typeof t2)
            return o(t2).tz(a2);
          var s2 = function(t3, e3, n3) {
            var i3 = t3 - 60 * e3 * 1e3, o2 = u(i3, n3);
            if (e3 === o2)
              return [i3, e3];
            var r2 = u(i3 -= 60 * (o2 - e3) * 1e3, n3);
            return o2 === r2 ? [i3, o2] : [t3 - 60 * Math.min(o2, r2) * 1e3, Math.max(o2, r2)];
          }(o.utc(t2, i2).valueOf(), f2, a2), m = s2[0], c = s2[1], d = o(m).utcOffset(c);
          return d.$x.$timezone = a2, d;
        }, o.tz.guess = function() {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }, o.tz.setDefault = function(t2) {
          r = t2;
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/utc.js
var require_utc = __commonJS({
  "node_modules/dayjs/plugin/utc.js"(exports, module) {
    !function(t, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_utc = i();
    }(exports, function() {
      "use strict";
      var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
      return function(s, f, n) {
        var u = f.prototype;
        n.utc = function(t2) {
          var i2 = { date: t2, utc: true, args: arguments };
          return new f(i2);
        }, u.utc = function(i2) {
          var e2 = n(this.toDate(), { locale: this.$L, utc: true });
          return i2 ? e2.add(this.utcOffset(), t) : e2;
        }, u.local = function() {
          return n(this.toDate(), { locale: this.$L, utc: false });
        };
        var o = u.parse;
        u.parse = function(t2) {
          t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), o.call(this, t2);
        };
        var r = u.init;
        u.init = function() {
          if (this.$u) {
            var t2 = this.$d;
            this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
          } else
            r.call(this);
        };
        var a = u.utcOffset;
        u.utcOffset = function(s2, f2) {
          var n2 = this.$utils().u;
          if (n2(s2))
            return this.$u ? 0 : n2(this.$offset) ? a.call(this) : this.$offset;
          if ("string" == typeof s2 && (s2 = function(t2) {
            void 0 === t2 && (t2 = "");
            var s3 = t2.match(i);
            if (!s3)
              return null;
            var f3 = ("" + s3[0]).match(e) || ["-", 0, 0], n3 = f3[0], u3 = 60 * +f3[1] + +f3[2];
            return 0 === u3 ? 0 : "+" === n3 ? u3 : -u3;
          }(s2), null === s2))
            return this;
          var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2, o2 = this;
          if (f2)
            return o2.$offset = u2, o2.$u = 0 === s2, o2;
          if (0 !== s2) {
            var r2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
            (o2 = this.local().add(u2 + r2, t)).$offset = u2, o2.$x.$localOffset = r2;
          } else
            o2 = this.utc();
          return o2;
        };
        var h = u.format;
        u.format = function(t2) {
          var i2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return h.call(this, i2);
        }, u.valueOf = function() {
          var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * t2;
        }, u.isUTC = function() {
          return !!this.$u;
        }, u.toISOString = function() {
          return this.toDate().toISOString();
        }, u.toString = function() {
          return this.toDate().toUTCString();
        };
        var l = u.toDate;
        u.toDate = function(t2) {
          return "s" === t2 && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
        };
        var c = u.diff;
        u.diff = function(t2, i2, e2) {
          if (t2 && this.$u === t2.$u)
            return c.call(this, t2, i2, e2);
          var s2 = this.local(), f2 = n(t2).local();
          return c.call(s2, f2, i2, e2);
        };
      };
    });
  }
});

// node_modules/@tanstack/react-table/build/lib/index.mjs
var React = __toESM(require_react(), 1);

// node_modules/@tanstack/table-core/build/lib/index.mjs
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function makeStateUpdater(key, instance) {
  return (updater) => {
    instance.setState((old) => {
      return {
        ...old,
        [key]: functionalUpdate(updater, old[key])
      };
    });
  };
}
function isFunction(d) {
  return d instanceof Function;
}
function isNumberArray(d) {
  return Array.isArray(d) && d.every((val) => typeof val === "number");
}
function flattenBy(arr, getChildren) {
  const flat = [];
  const recurse = (subArr) => {
    subArr.forEach((item) => {
      flat.push(item);
      const children = getChildren(item);
      if (children != null && children.length) {
        recurse(children);
      }
    });
  };
  recurse(arr);
  return flat;
}
function memo(getDeps, fn, opts) {
  let deps = [];
  let result;
  return (depArgs) => {
    let depTime;
    if (opts.key && opts.debug)
      depTime = Date.now();
    const newDeps = getDeps(depArgs);
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && opts.debug)
      resultTime = Date.now();
    result = fn(...newDeps);
    opts == null || opts.onChange == null || opts.onChange(result);
    if (opts.key && opts.debug) {
      if (opts != null && opts.debug()) {
        const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
        const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
        const resultFpsPercentage = resultEndTime / 16;
        const pad = (str, num) => {
          str = String(str);
          while (str.length < num) {
            str = " " + str;
          }
          return str;
        };
        console.info(`%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120))}deg 100% 31%);`, opts == null ? void 0 : opts.key);
      }
    }
    return result;
  };
}
function getMemoOptions(tableOptions, debugLevel, key, onChange) {
  return {
    debug: () => {
      var _tableOptions$debugAl;
      return (_tableOptions$debugAl = tableOptions == null ? void 0 : tableOptions.debugAll) != null ? _tableOptions$debugAl : tableOptions[debugLevel];
    },
    key,
    onChange
  };
}
function createCell(table, row, column, columnId) {
  const getRenderValue = () => {
    var _cell$getValue;
    return (_cell$getValue = cell.getValue()) != null ? _cell$getValue : table.options.renderFallbackValue;
  };
  const cell = {
    id: `${row.id}_${column.id}`,
    row,
    column,
    getValue: () => row.getValue(columnId),
    renderValue: getRenderValue,
    getContext: memo(() => [table, column, row, cell], (table2, column2, row2, cell2) => ({
      table: table2,
      column: column2,
      row: row2,
      cell: cell2,
      getValue: cell2.getValue,
      renderValue: cell2.renderValue
    }), getMemoOptions(table.options, "debugCells", "cell.getContext"))
  };
  table._features.forEach((feature) => {
    feature.createCell == null || feature.createCell(cell, column, row, table);
  }, {});
  return cell;
}
function createColumn(table, columnDef, depth, parent) {
  var _ref, _resolvedColumnDef$id;
  const defaultColumn = table._getDefaultColumnDef();
  const resolvedColumnDef = {
    ...defaultColumn,
    ...columnDef
  };
  const accessorKey = resolvedColumnDef.accessorKey;
  let id = (_ref = (_resolvedColumnDef$id = resolvedColumnDef.id) != null ? _resolvedColumnDef$id : accessorKey ? accessorKey.replace(".", "_") : void 0) != null ? _ref : typeof resolvedColumnDef.header === "string" ? resolvedColumnDef.header : void 0;
  let accessorFn;
  if (resolvedColumnDef.accessorFn) {
    accessorFn = resolvedColumnDef.accessorFn;
  } else if (accessorKey) {
    if (accessorKey.includes(".")) {
      accessorFn = (originalRow) => {
        let result = originalRow;
        for (const key of accessorKey.split(".")) {
          var _result;
          result = (_result = result) == null ? void 0 : _result[key];
          if (result === void 0) {
            console.warn(`"${key}" in deeply nested key "${accessorKey}" returned undefined.`);
          }
        }
        return result;
      };
    } else {
      accessorFn = (originalRow) => originalRow[resolvedColumnDef.accessorKey];
    }
  }
  if (!id) {
    if (true) {
      throw new Error(resolvedColumnDef.accessorFn ? `Columns require an id when using an accessorFn` : `Columns require an id when using a non-string header`);
    }
    throw new Error();
  }
  let column = {
    id: `${String(id)}`,
    accessorFn,
    parent,
    depth,
    columnDef: resolvedColumnDef,
    columns: [],
    getFlatColumns: memo(() => [true], () => {
      var _column$columns;
      return [column, ...(_column$columns = column.columns) == null ? void 0 : _column$columns.flatMap((d) => d.getFlatColumns())];
    }, getMemoOptions(table.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: memo(() => [table._getOrderColumnsFn()], (orderColumns2) => {
      var _column$columns2;
      if ((_column$columns2 = column.columns) != null && _column$columns2.length) {
        let leafColumns = column.columns.flatMap((column2) => column2.getLeafColumns());
        return orderColumns2(leafColumns);
      }
      return [column];
    }, getMemoOptions(table.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const feature of table._features) {
    feature.createColumn == null || feature.createColumn(column, table);
  }
  return column;
}
var debug = "debugHeaders";
function createHeader(table, column, options) {
  var _options$id;
  const id = (_options$id = options.id) != null ? _options$id : column.id;
  let header = {
    id,
    column,
    index: options.index,
    isPlaceholder: !!options.isPlaceholder,
    placeholderId: options.placeholderId,
    depth: options.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const leafHeaders = [];
      const recurseHeader = (h) => {
        if (h.subHeaders && h.subHeaders.length) {
          h.subHeaders.map(recurseHeader);
        }
        leafHeaders.push(h);
      };
      recurseHeader(header);
      return leafHeaders;
    },
    getContext: () => ({
      table,
      header,
      column
    })
  };
  table._features.forEach((feature) => {
    feature.createHeader == null || feature.createHeader(header, table);
  });
  return header;
}
var Headers = {
  createTable: (table) => {
    table.getHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
      var _left$map$filter, _right$map$filter;
      const leftColumns = (_left$map$filter = left == null ? void 0 : left.map((columnId) => leafColumns.find((d) => d.id === columnId)).filter(Boolean)) != null ? _left$map$filter : [];
      const rightColumns = (_right$map$filter = right == null ? void 0 : right.map((columnId) => leafColumns.find((d) => d.id === columnId)).filter(Boolean)) != null ? _right$map$filter : [];
      const centerColumns = leafColumns.filter((column) => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
      const headerGroups = buildHeaderGroups(allColumns, [...leftColumns, ...centerColumns, ...rightColumns], table);
      return headerGroups;
    }, getMemoOptions(table.options, debug, "getHeaderGroups"));
    table.getCenterHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
      leafColumns = leafColumns.filter((column) => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
      return buildHeaderGroups(allColumns, leafColumns, table, "center");
    }, getMemoOptions(table.options, debug, "getCenterHeaderGroups"));
    table.getLeftHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left], (allColumns, leafColumns, left) => {
      var _left$map$filter2;
      const orderedLeafColumns = (_left$map$filter2 = left == null ? void 0 : left.map((columnId) => leafColumns.find((d) => d.id === columnId)).filter(Boolean)) != null ? _left$map$filter2 : [];
      return buildHeaderGroups(allColumns, orderedLeafColumns, table, "left");
    }, getMemoOptions(table.options, debug, "getLeftHeaderGroups"));
    table.getRightHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.right], (allColumns, leafColumns, right) => {
      var _right$map$filter2;
      const orderedLeafColumns = (_right$map$filter2 = right == null ? void 0 : right.map((columnId) => leafColumns.find((d) => d.id === columnId)).filter(Boolean)) != null ? _right$map$filter2 : [];
      return buildHeaderGroups(allColumns, orderedLeafColumns, table, "right");
    }, getMemoOptions(table.options, debug, "getRightHeaderGroups"));
    table.getFooterGroups = memo(() => [table.getHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug, "getFooterGroups"));
    table.getLeftFooterGroups = memo(() => [table.getLeftHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug, "getLeftFooterGroups"));
    table.getCenterFooterGroups = memo(() => [table.getCenterHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug, "getCenterFooterGroups"));
    table.getRightFooterGroups = memo(() => [table.getRightHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, getMemoOptions(table.options, debug, "getRightFooterGroups"));
    table.getFlatHeaders = memo(() => [table.getHeaderGroups()], (headerGroups) => {
      return headerGroups.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug, "getFlatHeaders"));
    table.getLeftFlatHeaders = memo(() => [table.getLeftHeaderGroups()], (left) => {
      return left.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug, "getLeftFlatHeaders"));
    table.getCenterFlatHeaders = memo(() => [table.getCenterHeaderGroups()], (left) => {
      return left.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug, "getCenterFlatHeaders"));
    table.getRightFlatHeaders = memo(() => [table.getRightHeaderGroups()], (left) => {
      return left.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, getMemoOptions(table.options, debug, "getRightFlatHeaders"));
    table.getCenterLeafHeaders = memo(() => [table.getCenterFlatHeaders()], (flatHeaders) => {
      return flatHeaders.filter((header) => {
        var _header$subHeaders;
        return !((_header$subHeaders = header.subHeaders) != null && _header$subHeaders.length);
      });
    }, getMemoOptions(table.options, debug, "getCenterLeafHeaders"));
    table.getLeftLeafHeaders = memo(() => [table.getLeftFlatHeaders()], (flatHeaders) => {
      return flatHeaders.filter((header) => {
        var _header$subHeaders2;
        return !((_header$subHeaders2 = header.subHeaders) != null && _header$subHeaders2.length);
      });
    }, getMemoOptions(table.options, debug, "getLeftLeafHeaders"));
    table.getRightLeafHeaders = memo(() => [table.getRightFlatHeaders()], (flatHeaders) => {
      return flatHeaders.filter((header) => {
        var _header$subHeaders3;
        return !((_header$subHeaders3 = header.subHeaders) != null && _header$subHeaders3.length);
      });
    }, getMemoOptions(table.options, debug, "getRightLeafHeaders"));
    table.getLeafHeaders = memo(() => [table.getLeftHeaderGroups(), table.getCenterHeaderGroups(), table.getRightHeaderGroups()], (left, center, right) => {
      var _left$0$headers, _left$, _center$0$headers, _center$, _right$0$headers, _right$;
      return [...(_left$0$headers = (_left$ = left[0]) == null ? void 0 : _left$.headers) != null ? _left$0$headers : [], ...(_center$0$headers = (_center$ = center[0]) == null ? void 0 : _center$.headers) != null ? _center$0$headers : [], ...(_right$0$headers = (_right$ = right[0]) == null ? void 0 : _right$.headers) != null ? _right$0$headers : []].map((header) => {
        return header.getLeafHeaders();
      }).flat();
    }, getMemoOptions(table.options, debug, "getLeafHeaders"));
  }
};
function buildHeaderGroups(allColumns, columnsToGroup, table, headerFamily) {
  var _headerGroups$0$heade, _headerGroups$;
  let maxDepth = 0;
  const findMaxDepth = function(columns, depth) {
    if (depth === void 0) {
      depth = 1;
    }
    maxDepth = Math.max(maxDepth, depth);
    columns.filter((column) => column.getIsVisible()).forEach((column) => {
      var _column$columns;
      if ((_column$columns = column.columns) != null && _column$columns.length) {
        findMaxDepth(column.columns, depth + 1);
      }
    }, 0);
  };
  findMaxDepth(allColumns);
  let headerGroups = [];
  const createHeaderGroup = (headersToGroup, depth) => {
    const headerGroup = {
      depth,
      id: [headerFamily, `${depth}`].filter(Boolean).join("_"),
      headers: []
    };
    const pendingParentHeaders = [];
    headersToGroup.forEach((headerToGroup) => {
      const latestPendingParentHeader = [...pendingParentHeaders].reverse()[0];
      const isLeafHeader = headerToGroup.column.depth === headerGroup.depth;
      let column;
      let isPlaceholder = false;
      if (isLeafHeader && headerToGroup.column.parent) {
        column = headerToGroup.column.parent;
      } else {
        column = headerToGroup.column;
        isPlaceholder = true;
      }
      if (latestPendingParentHeader && (latestPendingParentHeader == null ? void 0 : latestPendingParentHeader.column) === column) {
        latestPendingParentHeader.subHeaders.push(headerToGroup);
      } else {
        const header = createHeader(table, column, {
          id: [headerFamily, depth, column.id, headerToGroup == null ? void 0 : headerToGroup.id].filter(Boolean).join("_"),
          isPlaceholder,
          placeholderId: isPlaceholder ? `${pendingParentHeaders.filter((d) => d.column === column).length}` : void 0,
          depth,
          index: pendingParentHeaders.length
        });
        header.subHeaders.push(headerToGroup);
        pendingParentHeaders.push(header);
      }
      headerGroup.headers.push(headerToGroup);
      headerToGroup.headerGroup = headerGroup;
    });
    headerGroups.push(headerGroup);
    if (depth > 0) {
      createHeaderGroup(pendingParentHeaders, depth - 1);
    }
  };
  const bottomHeaders = columnsToGroup.map((column, index) => createHeader(table, column, {
    depth: maxDepth,
    index
  }));
  createHeaderGroup(bottomHeaders, maxDepth - 1);
  headerGroups.reverse();
  const recurseHeadersForSpans = (headers) => {
    const filteredHeaders = headers.filter((header) => header.column.getIsVisible());
    return filteredHeaders.map((header) => {
      let colSpan = 0;
      let rowSpan = 0;
      let childRowSpans = [0];
      if (header.subHeaders && header.subHeaders.length) {
        childRowSpans = [];
        recurseHeadersForSpans(header.subHeaders).forEach((_ref) => {
          let {
            colSpan: childColSpan,
            rowSpan: childRowSpan
          } = _ref;
          colSpan += childColSpan;
          childRowSpans.push(childRowSpan);
        });
      } else {
        colSpan = 1;
      }
      const minChildRowSpan = Math.min(...childRowSpans);
      rowSpan = rowSpan + minChildRowSpan;
      header.colSpan = colSpan;
      header.rowSpan = rowSpan;
      return {
        colSpan,
        rowSpan
      };
    });
  };
  recurseHeadersForSpans((_headerGroups$0$heade = (_headerGroups$ = headerGroups[0]) == null ? void 0 : _headerGroups$.headers) != null ? _headerGroups$0$heade : []);
  return headerGroups;
}
var createRow = (table, id, original, rowIndex, depth, subRows, parentId) => {
  let row = {
    id,
    index: rowIndex,
    original,
    depth,
    parentId,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (columnId) => {
      if (row._valuesCache.hasOwnProperty(columnId)) {
        return row._valuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.accessorFn)) {
        return void 0;
      }
      row._valuesCache[columnId] = column.accessorFn(row.original, rowIndex);
      return row._valuesCache[columnId];
    },
    getUniqueValues: (columnId) => {
      if (row._uniqueValuesCache.hasOwnProperty(columnId)) {
        return row._uniqueValuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.accessorFn)) {
        return void 0;
      }
      if (!column.columnDef.getUniqueValues) {
        row._uniqueValuesCache[columnId] = [row.getValue(columnId)];
        return row._uniqueValuesCache[columnId];
      }
      row._uniqueValuesCache[columnId] = column.columnDef.getUniqueValues(row.original, rowIndex);
      return row._uniqueValuesCache[columnId];
    },
    renderValue: (columnId) => {
      var _row$getValue;
      return (_row$getValue = row.getValue(columnId)) != null ? _row$getValue : table.options.renderFallbackValue;
    },
    subRows: subRows != null ? subRows : [],
    getLeafRows: () => flattenBy(row.subRows, (d) => d.subRows),
    getParentRow: () => row.parentId ? table.getRow(row.parentId, true) : void 0,
    getParentRows: () => {
      let parentRows = [];
      let currentRow = row;
      while (true) {
        const parentRow = currentRow.getParentRow();
        if (!parentRow)
          break;
        parentRows.push(parentRow);
        currentRow = parentRow;
      }
      return parentRows.reverse();
    },
    getAllCells: memo(() => [table.getAllLeafColumns()], (leafColumns) => {
      return leafColumns.map((column) => {
        return createCell(table, row, column, column.id);
      });
    }, getMemoOptions(table.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: memo(() => [row.getAllCells()], (allCells) => {
      return allCells.reduce((acc, cell) => {
        acc[cell.column.id] = cell;
        return acc;
      }, {});
    }, getMemoOptions(table.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let i = 0; i < table._features.length; i++) {
    const feature = table._features[i];
    feature == null || feature.createRow == null || feature.createRow(row, table);
  }
  return row;
};
var ColumnFaceting = {
  createColumn: (column, table) => {
    column._getFacetedRowModel = table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, column.id);
    column.getFacetedRowModel = () => {
      if (!column._getFacetedRowModel) {
        return table.getPreFilteredRowModel();
      }
      return column._getFacetedRowModel();
    };
    column._getFacetedUniqueValues = table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, column.id);
    column.getFacetedUniqueValues = () => {
      if (!column._getFacetedUniqueValues) {
        return /* @__PURE__ */ new Map();
      }
      return column._getFacetedUniqueValues();
    };
    column._getFacetedMinMaxValues = table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, column.id);
    column.getFacetedMinMaxValues = () => {
      if (!column._getFacetedMinMaxValues) {
        return void 0;
      }
      return column._getFacetedMinMaxValues();
    };
  }
};
var includesString = (row, columnId, filterValue) => {
  var _row$getValue;
  const search = filterValue.toLowerCase();
  return Boolean((_row$getValue = row.getValue(columnId)) == null || (_row$getValue = _row$getValue.toString()) == null || (_row$getValue = _row$getValue.toLowerCase()) == null ? void 0 : _row$getValue.includes(search));
};
includesString.autoRemove = (val) => testFalsey(val);
var includesStringSensitive = (row, columnId, filterValue) => {
  var _row$getValue2;
  return Boolean((_row$getValue2 = row.getValue(columnId)) == null || (_row$getValue2 = _row$getValue2.toString()) == null ? void 0 : _row$getValue2.includes(filterValue));
};
includesStringSensitive.autoRemove = (val) => testFalsey(val);
var equalsString = (row, columnId, filterValue) => {
  var _row$getValue3;
  return ((_row$getValue3 = row.getValue(columnId)) == null || (_row$getValue3 = _row$getValue3.toString()) == null ? void 0 : _row$getValue3.toLowerCase()) === (filterValue == null ? void 0 : filterValue.toLowerCase());
};
equalsString.autoRemove = (val) => testFalsey(val);
var arrIncludes = (row, columnId, filterValue) => {
  var _row$getValue4;
  return (_row$getValue4 = row.getValue(columnId)) == null ? void 0 : _row$getValue4.includes(filterValue);
};
arrIncludes.autoRemove = (val) => testFalsey(val) || !(val != null && val.length);
var arrIncludesAll = (row, columnId, filterValue) => {
  return !filterValue.some((val) => {
    var _row$getValue5;
    return !((_row$getValue5 = row.getValue(columnId)) != null && _row$getValue5.includes(val));
  });
};
arrIncludesAll.autoRemove = (val) => testFalsey(val) || !(val != null && val.length);
var arrIncludesSome = (row, columnId, filterValue) => {
  return filterValue.some((val) => {
    var _row$getValue6;
    return (_row$getValue6 = row.getValue(columnId)) == null ? void 0 : _row$getValue6.includes(val);
  });
};
arrIncludesSome.autoRemove = (val) => testFalsey(val) || !(val != null && val.length);
var equals = (row, columnId, filterValue) => {
  return row.getValue(columnId) === filterValue;
};
equals.autoRemove = (val) => testFalsey(val);
var weakEquals = (row, columnId, filterValue) => {
  return row.getValue(columnId) == filterValue;
};
weakEquals.autoRemove = (val) => testFalsey(val);
var inNumberRange = (row, columnId, filterValue) => {
  let [min2, max2] = filterValue;
  const rowValue = row.getValue(columnId);
  return rowValue >= min2 && rowValue <= max2;
};
inNumberRange.resolveFilterValue = (val) => {
  let [unsafeMin, unsafeMax] = val;
  let parsedMin = typeof unsafeMin !== "number" ? parseFloat(unsafeMin) : unsafeMin;
  let parsedMax = typeof unsafeMax !== "number" ? parseFloat(unsafeMax) : unsafeMax;
  let min2 = unsafeMin === null || Number.isNaN(parsedMin) ? -Infinity : parsedMin;
  let max2 = unsafeMax === null || Number.isNaN(parsedMax) ? Infinity : parsedMax;
  if (min2 > max2) {
    const temp = min2;
    min2 = max2;
    max2 = temp;
  }
  return [min2, max2];
};
inNumberRange.autoRemove = (val) => testFalsey(val) || testFalsey(val[0]) && testFalsey(val[1]);
var filterFns = {
  includesString,
  includesStringSensitive,
  equalsString,
  arrIncludes,
  arrIncludesAll,
  arrIncludesSome,
  equals,
  weakEquals,
  inNumberRange
};
function testFalsey(val) {
  return val === void 0 || val === null || val === "";
}
var ColumnFiltering = {
  getDefaultColumnDef: () => {
    return {
      filterFn: "auto"
    };
  },
  getInitialState: (state) => {
    return {
      columnFilters: [],
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onColumnFiltersChange: makeStateUpdater("columnFilters", table),
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100
    };
  },
  createColumn: (column, table) => {
    column.getAutoFilterFn = () => {
      const firstRow = table.getCoreRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === "string") {
        return filterFns.includesString;
      }
      if (typeof value === "number") {
        return filterFns.inNumberRange;
      }
      if (typeof value === "boolean") {
        return filterFns.equals;
      }
      if (value !== null && typeof value === "object") {
        return filterFns.equals;
      }
      if (Array.isArray(value)) {
        return filterFns.arrIncludes;
      }
      return filterFns.weakEquals;
    };
    column.getFilterFn = () => {
      var _table$options$filter, _table$options$filter2;
      return isFunction(column.columnDef.filterFn) ? column.columnDef.filterFn : column.columnDef.filterFn === "auto" ? column.getAutoFilterFn() : (
        // @ts-ignore
        (_table$options$filter = (_table$options$filter2 = table.options.filterFns) == null ? void 0 : _table$options$filter2[column.columnDef.filterFn]) != null ? _table$options$filter : filterFns[column.columnDef.filterFn]
      );
    };
    column.getCanFilter = () => {
      var _column$columnDef$ena, _table$options$enable, _table$options$enable2;
      return ((_column$columnDef$ena = column.columnDef.enableColumnFilter) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnFilters) != null ? _table$options$enable : true) && ((_table$options$enable2 = table.options.enableFilters) != null ? _table$options$enable2 : true) && !!column.accessorFn;
    };
    column.getIsFiltered = () => column.getFilterIndex() > -1;
    column.getFilterValue = () => {
      var _table$getState$colum;
      return (_table$getState$colum = table.getState().columnFilters) == null || (_table$getState$colum = _table$getState$colum.find((d) => d.id === column.id)) == null ? void 0 : _table$getState$colum.value;
    };
    column.getFilterIndex = () => {
      var _table$getState$colum2, _table$getState$colum3;
      return (_table$getState$colum2 = (_table$getState$colum3 = table.getState().columnFilters) == null ? void 0 : _table$getState$colum3.findIndex((d) => d.id === column.id)) != null ? _table$getState$colum2 : -1;
    };
    column.setFilterValue = (value) => {
      table.setColumnFilters((old) => {
        const filterFn = column.getFilterFn();
        const previousFilter = old == null ? void 0 : old.find((d) => d.id === column.id);
        const newFilter = functionalUpdate(value, previousFilter ? previousFilter.value : void 0);
        if (shouldAutoRemoveFilter(filterFn, newFilter, column)) {
          var _old$filter;
          return (_old$filter = old == null ? void 0 : old.filter((d) => d.id !== column.id)) != null ? _old$filter : [];
        }
        const newFilterObj = {
          id: column.id,
          value: newFilter
        };
        if (previousFilter) {
          var _old$map;
          return (_old$map = old == null ? void 0 : old.map((d) => {
            if (d.id === column.id) {
              return newFilterObj;
            }
            return d;
          })) != null ? _old$map : [];
        }
        if (old != null && old.length) {
          return [...old, newFilterObj];
        }
        return [newFilterObj];
      });
    };
  },
  createRow: (row, _table) => {
    row.columnFilters = {};
    row.columnFiltersMeta = {};
  },
  createTable: (table) => {
    table.setColumnFilters = (updater) => {
      const leafColumns = table.getAllLeafColumns();
      const updateFn = (old) => {
        var _functionalUpdate;
        return (_functionalUpdate = functionalUpdate(updater, old)) == null ? void 0 : _functionalUpdate.filter((filter) => {
          const column = leafColumns.find((d) => d.id === filter.id);
          if (column) {
            const filterFn = column.getFilterFn();
            if (shouldAutoRemoveFilter(filterFn, filter.value, column)) {
              return false;
            }
          }
          return true;
        });
      };
      table.options.onColumnFiltersChange == null || table.options.onColumnFiltersChange(updateFn);
    };
    table.resetColumnFilters = (defaultState) => {
      var _table$initialState$c, _table$initialState;
      table.setColumnFilters(defaultState ? [] : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnFilters) != null ? _table$initialState$c : []);
    };
    table.getPreFilteredRowModel = () => table.getCoreRowModel();
    table.getFilteredRowModel = () => {
      if (!table._getFilteredRowModel && table.options.getFilteredRowModel) {
        table._getFilteredRowModel = table.options.getFilteredRowModel(table);
      }
      if (table.options.manualFiltering || !table._getFilteredRowModel) {
        return table.getPreFilteredRowModel();
      }
      return table._getFilteredRowModel();
    };
  }
};
function shouldAutoRemoveFilter(filterFn, value, column) {
  return (filterFn && filterFn.autoRemove ? filterFn.autoRemove(value, column) : false) || typeof value === "undefined" || typeof value === "string" && !value;
}
var sum = (columnId, _leafRows, childRows) => {
  return childRows.reduce((sum2, next2) => {
    const nextValue = next2.getValue(columnId);
    return sum2 + (typeof nextValue === "number" ? nextValue : 0);
  }, 0);
};
var min = (columnId, _leafRows, childRows) => {
  let min2;
  childRows.forEach((row) => {
    const value = row.getValue(columnId);
    if (value != null && (min2 > value || min2 === void 0 && value >= value)) {
      min2 = value;
    }
  });
  return min2;
};
var max = (columnId, _leafRows, childRows) => {
  let max2;
  childRows.forEach((row) => {
    const value = row.getValue(columnId);
    if (value != null && (max2 < value || max2 === void 0 && value >= value)) {
      max2 = value;
    }
  });
  return max2;
};
var extent = (columnId, _leafRows, childRows) => {
  let min2;
  let max2;
  childRows.forEach((row) => {
    const value = row.getValue(columnId);
    if (value != null) {
      if (min2 === void 0) {
        if (value >= value)
          min2 = max2 = value;
      } else {
        if (min2 > value)
          min2 = value;
        if (max2 < value)
          max2 = value;
      }
    }
  });
  return [min2, max2];
};
var mean = (columnId, leafRows) => {
  let count2 = 0;
  let sum2 = 0;
  leafRows.forEach((row) => {
    let value = row.getValue(columnId);
    if (value != null && (value = +value) >= value) {
      ++count2, sum2 += value;
    }
  });
  if (count2)
    return sum2 / count2;
  return;
};
var median = (columnId, leafRows) => {
  if (!leafRows.length) {
    return;
  }
  const values = leafRows.map((row) => row.getValue(columnId));
  if (!isNumberArray(values)) {
    return;
  }
  if (values.length === 1) {
    return values[0];
  }
  const mid = Math.floor(values.length / 2);
  const nums = values.sort((a, b) => a - b);
  return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
var unique = (columnId, leafRows) => {
  return Array.from(new Set(leafRows.map((d) => d.getValue(columnId))).values());
};
var uniqueCount = (columnId, leafRows) => {
  return new Set(leafRows.map((d) => d.getValue(columnId))).size;
};
var count = (_columnId, leafRows) => {
  return leafRows.length;
};
var aggregationFns = {
  sum,
  min,
  max,
  extent,
  mean,
  median,
  unique,
  uniqueCount,
  count
};
var ColumnGrouping = {
  getDefaultColumnDef: () => {
    return {
      aggregatedCell: (props) => {
        var _toString, _props$getValue;
        return (_toString = (_props$getValue = props.getValue()) == null || _props$getValue.toString == null ? void 0 : _props$getValue.toString()) != null ? _toString : null;
      },
      aggregationFn: "auto"
    };
  },
  getInitialState: (state) => {
    return {
      grouping: [],
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onGroupingChange: makeStateUpdater("grouping", table),
      groupedColumnMode: "reorder"
    };
  },
  createColumn: (column, table) => {
    column.toggleGrouping = () => {
      table.setGrouping((old) => {
        if (old != null && old.includes(column.id)) {
          return old.filter((d) => d !== column.id);
        }
        return [...old != null ? old : [], column.id];
      });
    };
    column.getCanGroup = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableGrouping) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableGrouping) != null ? _table$options$enable : true) && (!!column.accessorFn || !!column.columnDef.getGroupingValue);
    };
    column.getIsGrouped = () => {
      var _table$getState$group;
      return (_table$getState$group = table.getState().grouping) == null ? void 0 : _table$getState$group.includes(column.id);
    };
    column.getGroupedIndex = () => {
      var _table$getState$group2;
      return (_table$getState$group2 = table.getState().grouping) == null ? void 0 : _table$getState$group2.indexOf(column.id);
    };
    column.getToggleGroupingHandler = () => {
      const canGroup = column.getCanGroup();
      return () => {
        if (!canGroup)
          return;
        column.toggleGrouping();
      };
    };
    column.getAutoAggregationFn = () => {
      const firstRow = table.getCoreRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === "number") {
        return aggregationFns.sum;
      }
      if (Object.prototype.toString.call(value) === "[object Date]") {
        return aggregationFns.extent;
      }
    };
    column.getAggregationFn = () => {
      var _table$options$aggreg, _table$options$aggreg2;
      if (!column) {
        throw new Error();
      }
      return isFunction(column.columnDef.aggregationFn) ? column.columnDef.aggregationFn : column.columnDef.aggregationFn === "auto" ? column.getAutoAggregationFn() : (_table$options$aggreg = (_table$options$aggreg2 = table.options.aggregationFns) == null ? void 0 : _table$options$aggreg2[column.columnDef.aggregationFn]) != null ? _table$options$aggreg : aggregationFns[column.columnDef.aggregationFn];
    };
  },
  createTable: (table) => {
    table.setGrouping = (updater) => table.options.onGroupingChange == null ? void 0 : table.options.onGroupingChange(updater);
    table.resetGrouping = (defaultState) => {
      var _table$initialState$g, _table$initialState;
      table.setGrouping(defaultState ? [] : (_table$initialState$g = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.grouping) != null ? _table$initialState$g : []);
    };
    table.getPreGroupedRowModel = () => table.getFilteredRowModel();
    table.getGroupedRowModel = () => {
      if (!table._getGroupedRowModel && table.options.getGroupedRowModel) {
        table._getGroupedRowModel = table.options.getGroupedRowModel(table);
      }
      if (table.options.manualGrouping || !table._getGroupedRowModel) {
        return table.getPreGroupedRowModel();
      }
      return table._getGroupedRowModel();
    };
  },
  createRow: (row, table) => {
    row.getIsGrouped = () => !!row.groupingColumnId;
    row.getGroupingValue = (columnId) => {
      if (row._groupingValuesCache.hasOwnProperty(columnId)) {
        return row._groupingValuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.columnDef.getGroupingValue)) {
        return row.getValue(columnId);
      }
      row._groupingValuesCache[columnId] = column.columnDef.getGroupingValue(row.original);
      return row._groupingValuesCache[columnId];
    };
    row._groupingValuesCache = {};
  },
  createCell: (cell, column, row, table) => {
    cell.getIsGrouped = () => column.getIsGrouped() && column.id === row.groupingColumnId;
    cell.getIsPlaceholder = () => !cell.getIsGrouped() && column.getIsGrouped();
    cell.getIsAggregated = () => {
      var _row$subRows;
      return !cell.getIsGrouped() && !cell.getIsPlaceholder() && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
    };
  }
};
function orderColumns(leafColumns, grouping, groupedColumnMode) {
  if (!(grouping != null && grouping.length) || !groupedColumnMode) {
    return leafColumns;
  }
  const nonGroupingColumns = leafColumns.filter((col) => !grouping.includes(col.id));
  if (groupedColumnMode === "remove") {
    return nonGroupingColumns;
  }
  const groupingColumns = grouping.map((g) => leafColumns.find((col) => col.id === g)).filter(Boolean);
  return [...groupingColumns, ...nonGroupingColumns];
}
var ColumnOrdering = {
  getInitialState: (state) => {
    return {
      columnOrder: [],
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onColumnOrderChange: makeStateUpdater("columnOrder", table)
    };
  },
  createColumn: (column, table) => {
    column.getIndex = memo((position) => [_getVisibleLeafColumns(table, position)], (columns) => columns.findIndex((d) => d.id === column.id), getMemoOptions(table.options, "debugColumns", "getIndex"));
    column.getIsFirstColumn = (position) => {
      var _columns$;
      const columns = _getVisibleLeafColumns(table, position);
      return ((_columns$ = columns[0]) == null ? void 0 : _columns$.id) === column.id;
    };
    column.getIsLastColumn = (position) => {
      var _columns;
      const columns = _getVisibleLeafColumns(table, position);
      return ((_columns = columns[columns.length - 1]) == null ? void 0 : _columns.id) === column.id;
    };
  },
  createTable: (table) => {
    table.setColumnOrder = (updater) => table.options.onColumnOrderChange == null ? void 0 : table.options.onColumnOrderChange(updater);
    table.resetColumnOrder = (defaultState) => {
      var _table$initialState$c;
      table.setColumnOrder(defaultState ? [] : (_table$initialState$c = table.initialState.columnOrder) != null ? _table$initialState$c : []);
    };
    table._getOrderColumnsFn = memo(() => [table.getState().columnOrder, table.getState().grouping, table.options.groupedColumnMode], (columnOrder, grouping, groupedColumnMode) => (columns) => {
      let orderedColumns = [];
      if (!(columnOrder != null && columnOrder.length)) {
        orderedColumns = columns;
      } else {
        const columnOrderCopy = [...columnOrder];
        const columnsCopy = [...columns];
        while (columnsCopy.length && columnOrderCopy.length) {
          const targetColumnId = columnOrderCopy.shift();
          const foundIndex = columnsCopy.findIndex((d) => d.id === targetColumnId);
          if (foundIndex > -1) {
            orderedColumns.push(columnsCopy.splice(foundIndex, 1)[0]);
          }
        }
        orderedColumns = [...orderedColumns, ...columnsCopy];
      }
      return orderColumns(orderedColumns, grouping, groupedColumnMode);
    }, getMemoOptions(table.options, "debugTable", "_getOrderColumnsFn"));
  }
};
var getDefaultColumnPinningState = () => ({
  left: [],
  right: []
});
var ColumnPinning = {
  getInitialState: (state) => {
    return {
      columnPinning: getDefaultColumnPinningState(),
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onColumnPinningChange: makeStateUpdater("columnPinning", table)
    };
  },
  createColumn: (column, table) => {
    column.pin = (position) => {
      const columnIds = column.getLeafColumns().map((d) => d.id).filter(Boolean);
      table.setColumnPinning((old) => {
        var _old$left3, _old$right3;
        if (position === "right") {
          var _old$left, _old$right;
          return {
            left: ((_old$left = old == null ? void 0 : old.left) != null ? _old$left : []).filter((d) => !(columnIds != null && columnIds.includes(d))),
            right: [...((_old$right = old == null ? void 0 : old.right) != null ? _old$right : []).filter((d) => !(columnIds != null && columnIds.includes(d))), ...columnIds]
          };
        }
        if (position === "left") {
          var _old$left2, _old$right2;
          return {
            left: [...((_old$left2 = old == null ? void 0 : old.left) != null ? _old$left2 : []).filter((d) => !(columnIds != null && columnIds.includes(d))), ...columnIds],
            right: ((_old$right2 = old == null ? void 0 : old.right) != null ? _old$right2 : []).filter((d) => !(columnIds != null && columnIds.includes(d)))
          };
        }
        return {
          left: ((_old$left3 = old == null ? void 0 : old.left) != null ? _old$left3 : []).filter((d) => !(columnIds != null && columnIds.includes(d))),
          right: ((_old$right3 = old == null ? void 0 : old.right) != null ? _old$right3 : []).filter((d) => !(columnIds != null && columnIds.includes(d)))
        };
      });
    };
    column.getCanPin = () => {
      const leafColumns = column.getLeafColumns();
      return leafColumns.some((d) => {
        var _d$columnDef$enablePi, _ref, _table$options$enable;
        return ((_d$columnDef$enablePi = d.columnDef.enablePinning) != null ? _d$columnDef$enablePi : true) && ((_ref = (_table$options$enable = table.options.enableColumnPinning) != null ? _table$options$enable : table.options.enablePinning) != null ? _ref : true);
      });
    };
    column.getIsPinned = () => {
      const leafColumnIds = column.getLeafColumns().map((d) => d.id);
      const {
        left,
        right
      } = table.getState().columnPinning;
      const isLeft = leafColumnIds.some((d) => left == null ? void 0 : left.includes(d));
      const isRight = leafColumnIds.some((d) => right == null ? void 0 : right.includes(d));
      return isLeft ? "left" : isRight ? "right" : false;
    };
    column.getPinnedIndex = () => {
      var _table$getState$colum, _table$getState$colum2;
      const position = column.getIsPinned();
      return position ? (_table$getState$colum = (_table$getState$colum2 = table.getState().columnPinning) == null || (_table$getState$colum2 = _table$getState$colum2[position]) == null ? void 0 : _table$getState$colum2.indexOf(column.id)) != null ? _table$getState$colum : -1 : 0;
    };
  },
  createRow: (row, table) => {
    row.getCenterVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allCells, left, right) => {
      const leftAndRight = [...left != null ? left : [], ...right != null ? right : []];
      return allCells.filter((d) => !leftAndRight.includes(d.column.id));
    }, getMemoOptions(table.options, "debugRows", "getCenterVisibleCells"));
    row.getLeftVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left], (allCells, left) => {
      const cells = (left != null ? left : []).map((columnId) => allCells.find((cell) => cell.column.id === columnId)).filter(Boolean).map((d) => ({
        ...d,
        position: "left"
      }));
      return cells;
    }, getMemoOptions(table.options, "debugRows", "getLeftVisibleCells"));
    row.getRightVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.right], (allCells, right) => {
      const cells = (right != null ? right : []).map((columnId) => allCells.find((cell) => cell.column.id === columnId)).filter(Boolean).map((d) => ({
        ...d,
        position: "right"
      }));
      return cells;
    }, getMemoOptions(table.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (table) => {
    table.setColumnPinning = (updater) => table.options.onColumnPinningChange == null ? void 0 : table.options.onColumnPinningChange(updater);
    table.resetColumnPinning = (defaultState) => {
      var _table$initialState$c, _table$initialState;
      return table.setColumnPinning(defaultState ? getDefaultColumnPinningState() : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnPinning) != null ? _table$initialState$c : getDefaultColumnPinningState());
    };
    table.getIsSomeColumnsPinned = (position) => {
      var _pinningState$positio;
      const pinningState = table.getState().columnPinning;
      if (!position) {
        var _pinningState$left, _pinningState$right;
        return Boolean(((_pinningState$left = pinningState.left) == null ? void 0 : _pinningState$left.length) || ((_pinningState$right = pinningState.right) == null ? void 0 : _pinningState$right.length));
      }
      return Boolean((_pinningState$positio = pinningState[position]) == null ? void 0 : _pinningState$positio.length);
    };
    table.getLeftLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left], (allColumns, left) => {
      return (left != null ? left : []).map((columnId) => allColumns.find((column) => column.id === columnId)).filter(Boolean);
    }, getMemoOptions(table.options, "debugColumns", "getLeftLeafColumns"));
    table.getRightLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.right], (allColumns, right) => {
      return (right != null ? right : []).map((columnId) => allColumns.find((column) => column.id === columnId)).filter(Boolean);
    }, getMemoOptions(table.options, "debugColumns", "getRightLeafColumns"));
    table.getCenterLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, left, right) => {
      const leftAndRight = [...left != null ? left : [], ...right != null ? right : []];
      return allColumns.filter((d) => !leftAndRight.includes(d.id));
    }, getMemoOptions(table.options, "debugColumns", "getCenterLeafColumns"));
  }
};
var defaultColumnSizing = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
};
var getDefaultColumnSizingInfoState = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: false,
  columnSizingStart: []
});
var ColumnSizing = {
  getDefaultColumnDef: () => {
    return defaultColumnSizing;
  },
  getInitialState: (state) => {
    return {
      columnSizing: {},
      columnSizingInfo: getDefaultColumnSizingInfoState(),
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnSizingChange: makeStateUpdater("columnSizing", table),
      onColumnSizingInfoChange: makeStateUpdater("columnSizingInfo", table)
    };
  },
  createColumn: (column, table) => {
    column.getSize = () => {
      var _column$columnDef$min, _ref, _column$columnDef$max;
      const columnSize = table.getState().columnSizing[column.id];
      return Math.min(Math.max((_column$columnDef$min = column.columnDef.minSize) != null ? _column$columnDef$min : defaultColumnSizing.minSize, (_ref = columnSize != null ? columnSize : column.columnDef.size) != null ? _ref : defaultColumnSizing.size), (_column$columnDef$max = column.columnDef.maxSize) != null ? _column$columnDef$max : defaultColumnSizing.maxSize);
    };
    column.getStart = memo((position) => [position, _getVisibleLeafColumns(table, position), table.getState().columnSizing], (position, columns) => columns.slice(0, column.getIndex(position)).reduce((sum2, column2) => sum2 + column2.getSize(), 0), getMemoOptions(table.options, "debugColumns", "getStart"));
    column.getAfter = memo((position) => [position, _getVisibleLeafColumns(table, position), table.getState().columnSizing], (position, columns) => columns.slice(column.getIndex(position) + 1).reduce((sum2, column2) => sum2 + column2.getSize(), 0), getMemoOptions(table.options, "debugColumns", "getAfter"));
    column.resetSize = () => {
      table.setColumnSizing((_ref2) => {
        let {
          [column.id]: _,
          ...rest
        } = _ref2;
        return rest;
      });
    };
    column.getCanResize = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableResizing) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnResizing) != null ? _table$options$enable : true);
    };
    column.getIsResizing = () => {
      return table.getState().columnSizingInfo.isResizingColumn === column.id;
    };
  },
  createHeader: (header, table) => {
    header.getSize = () => {
      let sum2 = 0;
      const recurse = (header2) => {
        if (header2.subHeaders.length) {
          header2.subHeaders.forEach(recurse);
        } else {
          var _header$column$getSiz;
          sum2 += (_header$column$getSiz = header2.column.getSize()) != null ? _header$column$getSiz : 0;
        }
      };
      recurse(header);
      return sum2;
    };
    header.getStart = () => {
      if (header.index > 0) {
        const prevSiblingHeader = header.headerGroup.headers[header.index - 1];
        return prevSiblingHeader.getStart() + prevSiblingHeader.getSize();
      }
      return 0;
    };
    header.getResizeHandler = (_contextDocument) => {
      const column = table.getColumn(header.column.id);
      const canResize = column == null ? void 0 : column.getCanResize();
      return (e) => {
        if (!column || !canResize) {
          return;
        }
        e.persist == null || e.persist();
        if (isTouchStartEvent(e)) {
          if (e.touches && e.touches.length > 1) {
            return;
          }
        }
        const startSize = header.getSize();
        const columnSizingStart = header ? header.getLeafHeaders().map((d) => [d.column.id, d.column.getSize()]) : [[column.id, column.getSize()]];
        const clientX = isTouchStartEvent(e) ? Math.round(e.touches[0].clientX) : e.clientX;
        const newColumnSizing = {};
        const updateOffset = (eventType, clientXPos) => {
          if (typeof clientXPos !== "number") {
            return;
          }
          table.setColumnSizingInfo((old) => {
            var _old$startOffset, _old$startSize;
            const deltaDirection = table.options.columnResizeDirection === "rtl" ? -1 : 1;
            const deltaOffset = (clientXPos - ((_old$startOffset = old == null ? void 0 : old.startOffset) != null ? _old$startOffset : 0)) * deltaDirection;
            const deltaPercentage = Math.max(deltaOffset / ((_old$startSize = old == null ? void 0 : old.startSize) != null ? _old$startSize : 0), -0.999999);
            old.columnSizingStart.forEach((_ref3) => {
              let [columnId, headerSize] = _ref3;
              newColumnSizing[columnId] = Math.round(Math.max(headerSize + headerSize * deltaPercentage, 0) * 100) / 100;
            });
            return {
              ...old,
              deltaOffset,
              deltaPercentage
            };
          });
          if (table.options.columnResizeMode === "onChange" || eventType === "end") {
            table.setColumnSizing((old) => ({
              ...old,
              ...newColumnSizing
            }));
          }
        };
        const onMove = (clientXPos) => updateOffset("move", clientXPos);
        const onEnd = (clientXPos) => {
          updateOffset("end", clientXPos);
          table.setColumnSizingInfo((old) => ({
            ...old,
            isResizingColumn: false,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        };
        const contextDocument = _contextDocument || typeof document !== "undefined" ? document : null;
        const mouseEvents = {
          moveHandler: (e2) => onMove(e2.clientX),
          upHandler: (e2) => {
            contextDocument == null || contextDocument.removeEventListener("mousemove", mouseEvents.moveHandler);
            contextDocument == null || contextDocument.removeEventListener("mouseup", mouseEvents.upHandler);
            onEnd(e2.clientX);
          }
        };
        const touchEvents = {
          moveHandler: (e2) => {
            if (e2.cancelable) {
              e2.preventDefault();
              e2.stopPropagation();
            }
            onMove(e2.touches[0].clientX);
            return false;
          },
          upHandler: (e2) => {
            var _e$touches$;
            contextDocument == null || contextDocument.removeEventListener("touchmove", touchEvents.moveHandler);
            contextDocument == null || contextDocument.removeEventListener("touchend", touchEvents.upHandler);
            if (e2.cancelable) {
              e2.preventDefault();
              e2.stopPropagation();
            }
            onEnd((_e$touches$ = e2.touches[0]) == null ? void 0 : _e$touches$.clientX);
          }
        };
        const passiveIfSupported = passiveEventSupported() ? {
          passive: false
        } : false;
        if (isTouchStartEvent(e)) {
          contextDocument == null || contextDocument.addEventListener("touchmove", touchEvents.moveHandler, passiveIfSupported);
          contextDocument == null || contextDocument.addEventListener("touchend", touchEvents.upHandler, passiveIfSupported);
        } else {
          contextDocument == null || contextDocument.addEventListener("mousemove", mouseEvents.moveHandler, passiveIfSupported);
          contextDocument == null || contextDocument.addEventListener("mouseup", mouseEvents.upHandler, passiveIfSupported);
        }
        table.setColumnSizingInfo((old) => ({
          ...old,
          startOffset: clientX,
          startSize,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart,
          isResizingColumn: column.id
        }));
      };
    };
  },
  createTable: (table) => {
    table.setColumnSizing = (updater) => table.options.onColumnSizingChange == null ? void 0 : table.options.onColumnSizingChange(updater);
    table.setColumnSizingInfo = (updater) => table.options.onColumnSizingInfoChange == null ? void 0 : table.options.onColumnSizingInfoChange(updater);
    table.resetColumnSizing = (defaultState) => {
      var _table$initialState$c;
      table.setColumnSizing(defaultState ? {} : (_table$initialState$c = table.initialState.columnSizing) != null ? _table$initialState$c : {});
    };
    table.resetHeaderSizeInfo = (defaultState) => {
      var _table$initialState$c2;
      table.setColumnSizingInfo(defaultState ? getDefaultColumnSizingInfoState() : (_table$initialState$c2 = table.initialState.columnSizingInfo) != null ? _table$initialState$c2 : getDefaultColumnSizingInfoState());
    };
    table.getTotalSize = () => {
      var _table$getHeaderGroup, _table$getHeaderGroup2;
      return (_table$getHeaderGroup = (_table$getHeaderGroup2 = table.getHeaderGroups()[0]) == null ? void 0 : _table$getHeaderGroup2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getHeaderGroup : 0;
    };
    table.getLeftTotalSize = () => {
      var _table$getLeftHeaderG, _table$getLeftHeaderG2;
      return (_table$getLeftHeaderG = (_table$getLeftHeaderG2 = table.getLeftHeaderGroups()[0]) == null ? void 0 : _table$getLeftHeaderG2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getLeftHeaderG : 0;
    };
    table.getCenterTotalSize = () => {
      var _table$getCenterHeade, _table$getCenterHeade2;
      return (_table$getCenterHeade = (_table$getCenterHeade2 = table.getCenterHeaderGroups()[0]) == null ? void 0 : _table$getCenterHeade2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getCenterHeade : 0;
    };
    table.getRightTotalSize = () => {
      var _table$getRightHeader, _table$getRightHeader2;
      return (_table$getRightHeader = (_table$getRightHeader2 = table.getRightHeaderGroups()[0]) == null ? void 0 : _table$getRightHeader2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getRightHeader : 0;
    };
  }
};
var passiveSupported = null;
function passiveEventSupported() {
  if (typeof passiveSupported === "boolean")
    return passiveSupported;
  let supported = false;
  try {
    const options = {
      get passive() {
        supported = true;
        return false;
      }
    };
    const noop = () => {
    };
    window.addEventListener("test", noop, options);
    window.removeEventListener("test", noop);
  } catch (err) {
    supported = false;
  }
  passiveSupported = supported;
  return passiveSupported;
}
function isTouchStartEvent(e) {
  return e.type === "touchstart";
}
var ColumnVisibility = {
  getInitialState: (state) => {
    return {
      columnVisibility: {},
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onColumnVisibilityChange: makeStateUpdater("columnVisibility", table)
    };
  },
  createColumn: (column, table) => {
    column.toggleVisibility = (value) => {
      if (column.getCanHide()) {
        table.setColumnVisibility((old) => ({
          ...old,
          [column.id]: value != null ? value : !column.getIsVisible()
        }));
      }
    };
    column.getIsVisible = () => {
      var _ref, _table$getState$colum;
      const childColumns = column.columns;
      return (_ref = childColumns.length ? childColumns.some((c) => c.getIsVisible()) : (_table$getState$colum = table.getState().columnVisibility) == null ? void 0 : _table$getState$colum[column.id]) != null ? _ref : true;
    };
    column.getCanHide = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableHiding) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableHiding) != null ? _table$options$enable : true);
    };
    column.getToggleVisibilityHandler = () => {
      return (e) => {
        column.toggleVisibility == null || column.toggleVisibility(e.target.checked);
      };
    };
  },
  createRow: (row, table) => {
    row._getAllVisibleCells = memo(() => [row.getAllCells(), table.getState().columnVisibility], (cells) => {
      return cells.filter((cell) => cell.column.getIsVisible());
    }, getMemoOptions(table.options, "debugRows", "_getAllVisibleCells"));
    row.getVisibleCells = memo(() => [row.getLeftVisibleCells(), row.getCenterVisibleCells(), row.getRightVisibleCells()], (left, center, right) => [...left, ...center, ...right], getMemoOptions(table.options, "debugRows", "getVisibleCells"));
  },
  createTable: (table) => {
    const makeVisibleColumnsMethod = (key, getColumns) => {
      return memo(() => [getColumns(), getColumns().filter((d) => d.getIsVisible()).map((d) => d.id).join("_")], (columns) => {
        return columns.filter((d) => d.getIsVisible == null ? void 0 : d.getIsVisible());
      }, getMemoOptions(table.options, "debugColumns", key));
    };
    table.getVisibleFlatColumns = makeVisibleColumnsMethod("getVisibleFlatColumns", () => table.getAllFlatColumns());
    table.getVisibleLeafColumns = makeVisibleColumnsMethod("getVisibleLeafColumns", () => table.getAllLeafColumns());
    table.getLeftVisibleLeafColumns = makeVisibleColumnsMethod("getLeftVisibleLeafColumns", () => table.getLeftLeafColumns());
    table.getRightVisibleLeafColumns = makeVisibleColumnsMethod("getRightVisibleLeafColumns", () => table.getRightLeafColumns());
    table.getCenterVisibleLeafColumns = makeVisibleColumnsMethod("getCenterVisibleLeafColumns", () => table.getCenterLeafColumns());
    table.setColumnVisibility = (updater) => table.options.onColumnVisibilityChange == null ? void 0 : table.options.onColumnVisibilityChange(updater);
    table.resetColumnVisibility = (defaultState) => {
      var _table$initialState$c;
      table.setColumnVisibility(defaultState ? {} : (_table$initialState$c = table.initialState.columnVisibility) != null ? _table$initialState$c : {});
    };
    table.toggleAllColumnsVisible = (value) => {
      var _value;
      value = (_value = value) != null ? _value : !table.getIsAllColumnsVisible();
      table.setColumnVisibility(table.getAllLeafColumns().reduce((obj, column) => ({
        ...obj,
        [column.id]: !value ? !(column.getCanHide != null && column.getCanHide()) : value
      }), {}));
    };
    table.getIsAllColumnsVisible = () => !table.getAllLeafColumns().some((column) => !(column.getIsVisible != null && column.getIsVisible()));
    table.getIsSomeColumnsVisible = () => table.getAllLeafColumns().some((column) => column.getIsVisible == null ? void 0 : column.getIsVisible());
    table.getToggleAllColumnsVisibilityHandler = () => {
      return (e) => {
        var _target;
        table.toggleAllColumnsVisible((_target = e.target) == null ? void 0 : _target.checked);
      };
    };
  }
};
function _getVisibleLeafColumns(table, position) {
  return !position ? table.getVisibleLeafColumns() : position === "center" ? table.getCenterVisibleLeafColumns() : position === "left" ? table.getLeftVisibleLeafColumns() : table.getRightVisibleLeafColumns();
}
var GlobalFaceting = {
  createTable: (table) => {
    table._getGlobalFacetedRowModel = table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, "__global__");
    table.getGlobalFacetedRowModel = () => {
      if (table.options.manualFiltering || !table._getGlobalFacetedRowModel) {
        return table.getPreFilteredRowModel();
      }
      return table._getGlobalFacetedRowModel();
    };
    table._getGlobalFacetedUniqueValues = table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, "__global__");
    table.getGlobalFacetedUniqueValues = () => {
      if (!table._getGlobalFacetedUniqueValues) {
        return /* @__PURE__ */ new Map();
      }
      return table._getGlobalFacetedUniqueValues();
    };
    table._getGlobalFacetedMinMaxValues = table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, "__global__");
    table.getGlobalFacetedMinMaxValues = () => {
      if (!table._getGlobalFacetedMinMaxValues) {
        return;
      }
      return table._getGlobalFacetedMinMaxValues();
    };
  }
};
var GlobalFiltering = {
  getInitialState: (state) => {
    return {
      globalFilter: void 0,
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onGlobalFilterChange: makeStateUpdater("globalFilter", table),
      globalFilterFn: "auto",
      getColumnCanGlobalFilter: (column) => {
        var _table$getCoreRowMode;
        const value = (_table$getCoreRowMode = table.getCoreRowModel().flatRows[0]) == null || (_table$getCoreRowMode = _table$getCoreRowMode._getAllCellsByColumnId()[column.id]) == null ? void 0 : _table$getCoreRowMode.getValue();
        return typeof value === "string" || typeof value === "number";
      }
    };
  },
  createColumn: (column, table) => {
    column.getCanGlobalFilter = () => {
      var _column$columnDef$ena, _table$options$enable, _table$options$enable2, _table$options$getCol;
      return ((_column$columnDef$ena = column.columnDef.enableGlobalFilter) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableGlobalFilter) != null ? _table$options$enable : true) && ((_table$options$enable2 = table.options.enableFilters) != null ? _table$options$enable2 : true) && ((_table$options$getCol = table.options.getColumnCanGlobalFilter == null ? void 0 : table.options.getColumnCanGlobalFilter(column)) != null ? _table$options$getCol : true) && !!column.accessorFn;
    };
  },
  createTable: (table) => {
    table.getGlobalAutoFilterFn = () => {
      return filterFns.includesString;
    };
    table.getGlobalFilterFn = () => {
      var _table$options$filter, _table$options$filter2;
      const {
        globalFilterFn
      } = table.options;
      return isFunction(globalFilterFn) ? globalFilterFn : globalFilterFn === "auto" ? table.getGlobalAutoFilterFn() : (_table$options$filter = (_table$options$filter2 = table.options.filterFns) == null ? void 0 : _table$options$filter2[globalFilterFn]) != null ? _table$options$filter : filterFns[globalFilterFn];
    };
    table.setGlobalFilter = (updater) => {
      table.options.onGlobalFilterChange == null || table.options.onGlobalFilterChange(updater);
    };
    table.resetGlobalFilter = (defaultState) => {
      table.setGlobalFilter(defaultState ? void 0 : table.initialState.globalFilter);
    };
  }
};
var RowExpanding = {
  getInitialState: (state) => {
    return {
      expanded: {},
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onExpandedChange: makeStateUpdater("expanded", table),
      paginateExpandedRows: true
    };
  },
  createTable: (table) => {
    let registered = false;
    let queued = false;
    table._autoResetExpanded = () => {
      var _ref, _table$options$autoRe;
      if (!registered) {
        table._queue(() => {
          registered = true;
        });
        return;
      }
      if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetExpanded) != null ? _ref : !table.options.manualExpanding) {
        if (queued)
          return;
        queued = true;
        table._queue(() => {
          table.resetExpanded();
          queued = false;
        });
      }
    };
    table.setExpanded = (updater) => table.options.onExpandedChange == null ? void 0 : table.options.onExpandedChange(updater);
    table.toggleAllRowsExpanded = (expanded) => {
      if (expanded != null ? expanded : !table.getIsAllRowsExpanded()) {
        table.setExpanded(true);
      } else {
        table.setExpanded({});
      }
    };
    table.resetExpanded = (defaultState) => {
      var _table$initialState$e, _table$initialState;
      table.setExpanded(defaultState ? {} : (_table$initialState$e = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.expanded) != null ? _table$initialState$e : {});
    };
    table.getCanSomeRowsExpand = () => {
      return table.getPrePaginationRowModel().flatRows.some((row) => row.getCanExpand());
    };
    table.getToggleAllRowsExpandedHandler = () => {
      return (e) => {
        e.persist == null || e.persist();
        table.toggleAllRowsExpanded();
      };
    };
    table.getIsSomeRowsExpanded = () => {
      const expanded = table.getState().expanded;
      return expanded === true || Object.values(expanded).some(Boolean);
    };
    table.getIsAllRowsExpanded = () => {
      const expanded = table.getState().expanded;
      if (typeof expanded === "boolean") {
        return expanded === true;
      }
      if (!Object.keys(expanded).length) {
        return false;
      }
      if (table.getRowModel().flatRows.some((row) => !row.getIsExpanded())) {
        return false;
      }
      return true;
    };
    table.getExpandedDepth = () => {
      let maxDepth = 0;
      const rowIds = table.getState().expanded === true ? Object.keys(table.getRowModel().rowsById) : Object.keys(table.getState().expanded);
      rowIds.forEach((id) => {
        const splitId = id.split(".");
        maxDepth = Math.max(maxDepth, splitId.length);
      });
      return maxDepth;
    };
    table.getPreExpandedRowModel = () => table.getSortedRowModel();
    table.getExpandedRowModel = () => {
      if (!table._getExpandedRowModel && table.options.getExpandedRowModel) {
        table._getExpandedRowModel = table.options.getExpandedRowModel(table);
      }
      if (table.options.manualExpanding || !table._getExpandedRowModel) {
        return table.getPreExpandedRowModel();
      }
      return table._getExpandedRowModel();
    };
  },
  createRow: (row, table) => {
    row.toggleExpanded = (expanded) => {
      table.setExpanded((old) => {
        var _expanded;
        const exists = old === true ? true : !!(old != null && old[row.id]);
        let oldExpanded = {};
        if (old === true) {
          Object.keys(table.getRowModel().rowsById).forEach((rowId) => {
            oldExpanded[rowId] = true;
          });
        } else {
          oldExpanded = old;
        }
        expanded = (_expanded = expanded) != null ? _expanded : !exists;
        if (!exists && expanded) {
          return {
            ...oldExpanded,
            [row.id]: true
          };
        }
        if (exists && !expanded) {
          const {
            [row.id]: _,
            ...rest
          } = oldExpanded;
          return rest;
        }
        return old;
      });
    };
    row.getIsExpanded = () => {
      var _table$options$getIsR;
      const expanded = table.getState().expanded;
      return !!((_table$options$getIsR = table.options.getIsRowExpanded == null ? void 0 : table.options.getIsRowExpanded(row)) != null ? _table$options$getIsR : expanded === true || (expanded == null ? void 0 : expanded[row.id]));
    };
    row.getCanExpand = () => {
      var _table$options$getRow, _table$options$enable, _row$subRows;
      return (_table$options$getRow = table.options.getRowCanExpand == null ? void 0 : table.options.getRowCanExpand(row)) != null ? _table$options$getRow : ((_table$options$enable = table.options.enableExpanding) != null ? _table$options$enable : true) && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
    };
    row.getIsAllParentsExpanded = () => {
      let isFullyExpanded = true;
      let currentRow = row;
      while (isFullyExpanded && currentRow.parentId) {
        currentRow = table.getRow(currentRow.parentId, true);
        isFullyExpanded = currentRow.getIsExpanded();
      }
      return isFullyExpanded;
    };
    row.getToggleExpandedHandler = () => {
      const canExpand = row.getCanExpand();
      return () => {
        if (!canExpand)
          return;
        row.toggleExpanded();
      };
    };
  }
};
var defaultPageIndex = 0;
var defaultPageSize = 10;
var getDefaultPaginationState = () => ({
  pageIndex: defaultPageIndex,
  pageSize: defaultPageSize
});
var RowPagination = {
  getInitialState: (state) => {
    return {
      ...state,
      pagination: {
        ...getDefaultPaginationState(),
        ...state == null ? void 0 : state.pagination
      }
    };
  },
  getDefaultOptions: (table) => {
    return {
      onPaginationChange: makeStateUpdater("pagination", table)
    };
  },
  createTable: (table) => {
    let registered = false;
    let queued = false;
    table._autoResetPageIndex = () => {
      var _ref, _table$options$autoRe;
      if (!registered) {
        table._queue(() => {
          registered = true;
        });
        return;
      }
      if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetPageIndex) != null ? _ref : !table.options.manualPagination) {
        if (queued)
          return;
        queued = true;
        table._queue(() => {
          table.resetPageIndex();
          queued = false;
        });
      }
    };
    table.setPagination = (updater) => {
      const safeUpdater = (old) => {
        let newState = functionalUpdate(updater, old);
        return newState;
      };
      return table.options.onPaginationChange == null ? void 0 : table.options.onPaginationChange(safeUpdater);
    };
    table.resetPagination = (defaultState) => {
      var _table$initialState$p;
      table.setPagination(defaultState ? getDefaultPaginationState() : (_table$initialState$p = table.initialState.pagination) != null ? _table$initialState$p : getDefaultPaginationState());
    };
    table.setPageIndex = (updater) => {
      table.setPagination((old) => {
        let pageIndex = functionalUpdate(updater, old.pageIndex);
        const maxPageIndex = typeof table.options.pageCount === "undefined" || table.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : table.options.pageCount - 1;
        pageIndex = Math.max(0, Math.min(pageIndex, maxPageIndex));
        return {
          ...old,
          pageIndex
        };
      });
    };
    table.resetPageIndex = (defaultState) => {
      var _table$initialState$p2, _table$initialState;
      table.setPageIndex(defaultState ? defaultPageIndex : (_table$initialState$p2 = (_table$initialState = table.initialState) == null || (_table$initialState = _table$initialState.pagination) == null ? void 0 : _table$initialState.pageIndex) != null ? _table$initialState$p2 : defaultPageIndex);
    };
    table.resetPageSize = (defaultState) => {
      var _table$initialState$p3, _table$initialState2;
      table.setPageSize(defaultState ? defaultPageSize : (_table$initialState$p3 = (_table$initialState2 = table.initialState) == null || (_table$initialState2 = _table$initialState2.pagination) == null ? void 0 : _table$initialState2.pageSize) != null ? _table$initialState$p3 : defaultPageSize);
    };
    table.setPageSize = (updater) => {
      table.setPagination((old) => {
        const pageSize = Math.max(1, functionalUpdate(updater, old.pageSize));
        const topRowIndex = old.pageSize * old.pageIndex;
        const pageIndex = Math.floor(topRowIndex / pageSize);
        return {
          ...old,
          pageIndex,
          pageSize
        };
      });
    };
    table.setPageCount = (updater) => table.setPagination((old) => {
      var _table$options$pageCo;
      let newPageCount = functionalUpdate(updater, (_table$options$pageCo = table.options.pageCount) != null ? _table$options$pageCo : -1);
      if (typeof newPageCount === "number") {
        newPageCount = Math.max(-1, newPageCount);
      }
      return {
        ...old,
        pageCount: newPageCount
      };
    });
    table.getPageOptions = memo(() => [table.getPageCount()], (pageCount) => {
      let pageOptions = [];
      if (pageCount && pageCount > 0) {
        pageOptions = [...new Array(pageCount)].fill(null).map((_, i) => i);
      }
      return pageOptions;
    }, getMemoOptions(table.options, "debugTable", "getPageOptions"));
    table.getCanPreviousPage = () => table.getState().pagination.pageIndex > 0;
    table.getCanNextPage = () => {
      const {
        pageIndex
      } = table.getState().pagination;
      const pageCount = table.getPageCount();
      if (pageCount === -1) {
        return true;
      }
      if (pageCount === 0) {
        return false;
      }
      return pageIndex < pageCount - 1;
    };
    table.previousPage = () => {
      return table.setPageIndex((old) => old - 1);
    };
    table.nextPage = () => {
      return table.setPageIndex((old) => {
        return old + 1;
      });
    };
    table.firstPage = () => {
      return table.setPageIndex(0);
    };
    table.lastPage = () => {
      return table.setPageIndex(table.getPageCount() - 1);
    };
    table.getPrePaginationRowModel = () => table.getExpandedRowModel();
    table.getPaginationRowModel = () => {
      if (!table._getPaginationRowModel && table.options.getPaginationRowModel) {
        table._getPaginationRowModel = table.options.getPaginationRowModel(table);
      }
      if (table.options.manualPagination || !table._getPaginationRowModel) {
        return table.getPrePaginationRowModel();
      }
      return table._getPaginationRowModel();
    };
    table.getPageCount = () => {
      var _table$options$pageCo2;
      return (_table$options$pageCo2 = table.options.pageCount) != null ? _table$options$pageCo2 : Math.ceil(table.getRowCount() / table.getState().pagination.pageSize);
    };
    table.getRowCount = () => {
      var _table$options$rowCou;
      return (_table$options$rowCou = table.options.rowCount) != null ? _table$options$rowCou : table.getPrePaginationRowModel().rows.length;
    };
  }
};
var getDefaultRowPinningState = () => ({
  top: [],
  bottom: []
});
var RowPinning = {
  getInitialState: (state) => {
    return {
      rowPinning: getDefaultRowPinningState(),
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onRowPinningChange: makeStateUpdater("rowPinning", table)
    };
  },
  createRow: (row, table) => {
    row.pin = (position, includeLeafRows, includeParentRows) => {
      const leafRowIds = includeLeafRows ? row.getLeafRows().map((_ref) => {
        let {
          id
        } = _ref;
        return id;
      }) : [];
      const parentRowIds = includeParentRows ? row.getParentRows().map((_ref2) => {
        let {
          id
        } = _ref2;
        return id;
      }) : [];
      const rowIds = /* @__PURE__ */ new Set([...parentRowIds, row.id, ...leafRowIds]);
      table.setRowPinning((old) => {
        var _old$top3, _old$bottom3;
        if (position === "bottom") {
          var _old$top, _old$bottom;
          return {
            top: ((_old$top = old == null ? void 0 : old.top) != null ? _old$top : []).filter((d) => !(rowIds != null && rowIds.has(d))),
            bottom: [...((_old$bottom = old == null ? void 0 : old.bottom) != null ? _old$bottom : []).filter((d) => !(rowIds != null && rowIds.has(d))), ...Array.from(rowIds)]
          };
        }
        if (position === "top") {
          var _old$top2, _old$bottom2;
          return {
            top: [...((_old$top2 = old == null ? void 0 : old.top) != null ? _old$top2 : []).filter((d) => !(rowIds != null && rowIds.has(d))), ...Array.from(rowIds)],
            bottom: ((_old$bottom2 = old == null ? void 0 : old.bottom) != null ? _old$bottom2 : []).filter((d) => !(rowIds != null && rowIds.has(d)))
          };
        }
        return {
          top: ((_old$top3 = old == null ? void 0 : old.top) != null ? _old$top3 : []).filter((d) => !(rowIds != null && rowIds.has(d))),
          bottom: ((_old$bottom3 = old == null ? void 0 : old.bottom) != null ? _old$bottom3 : []).filter((d) => !(rowIds != null && rowIds.has(d)))
        };
      });
    };
    row.getCanPin = () => {
      var _ref3;
      const {
        enableRowPinning,
        enablePinning
      } = table.options;
      if (typeof enableRowPinning === "function") {
        return enableRowPinning(row);
      }
      return (_ref3 = enableRowPinning != null ? enableRowPinning : enablePinning) != null ? _ref3 : true;
    };
    row.getIsPinned = () => {
      const rowIds = [row.id];
      const {
        top,
        bottom
      } = table.getState().rowPinning;
      const isTop = rowIds.some((d) => top == null ? void 0 : top.includes(d));
      const isBottom = rowIds.some((d) => bottom == null ? void 0 : bottom.includes(d));
      return isTop ? "top" : isBottom ? "bottom" : false;
    };
    row.getPinnedIndex = () => {
      var _table$_getPinnedRows, _visiblePinnedRowIds$;
      const position = row.getIsPinned();
      if (!position)
        return -1;
      const visiblePinnedRowIds = (_table$_getPinnedRows = table._getPinnedRows(position)) == null ? void 0 : _table$_getPinnedRows.map((_ref4) => {
        let {
          id
        } = _ref4;
        return id;
      });
      return (_visiblePinnedRowIds$ = visiblePinnedRowIds == null ? void 0 : visiblePinnedRowIds.indexOf(row.id)) != null ? _visiblePinnedRowIds$ : -1;
    };
  },
  createTable: (table) => {
    table.setRowPinning = (updater) => table.options.onRowPinningChange == null ? void 0 : table.options.onRowPinningChange(updater);
    table.resetRowPinning = (defaultState) => {
      var _table$initialState$r, _table$initialState;
      return table.setRowPinning(defaultState ? getDefaultRowPinningState() : (_table$initialState$r = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.rowPinning) != null ? _table$initialState$r : getDefaultRowPinningState());
    };
    table.getIsSomeRowsPinned = (position) => {
      var _pinningState$positio;
      const pinningState = table.getState().rowPinning;
      if (!position) {
        var _pinningState$top, _pinningState$bottom;
        return Boolean(((_pinningState$top = pinningState.top) == null ? void 0 : _pinningState$top.length) || ((_pinningState$bottom = pinningState.bottom) == null ? void 0 : _pinningState$bottom.length));
      }
      return Boolean((_pinningState$positio = pinningState[position]) == null ? void 0 : _pinningState$positio.length);
    };
    table._getPinnedRows = memo((position) => [table.getRowModel().rows, table.getState().rowPinning[position], position], (visibleRows, pinnedRowIds, position) => {
      var _table$options$keepPi;
      const rows = ((_table$options$keepPi = table.options.keepPinnedRows) != null ? _table$options$keepPi : true) ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (pinnedRowIds != null ? pinnedRowIds : []).map((rowId) => {
          const row = table.getRow(rowId, true);
          return row.getIsAllParentsExpanded() ? row : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (pinnedRowIds != null ? pinnedRowIds : []).map((rowId) => visibleRows.find((row) => row.id === rowId))
      );
      return rows.filter(Boolean).map((d) => ({
        ...d,
        position
      }));
    }, getMemoOptions(table.options, "debugRows", "_getPinnedRows"));
    table.getTopRows = () => table._getPinnedRows("top");
    table.getBottomRows = () => table._getPinnedRows("bottom");
    table.getCenterRows = memo(() => [table.getRowModel().rows, table.getState().rowPinning.top, table.getState().rowPinning.bottom], (allRows, top, bottom) => {
      const topAndBottom = /* @__PURE__ */ new Set([...top != null ? top : [], ...bottom != null ? bottom : []]);
      return allRows.filter((d) => !topAndBottom.has(d.id));
    }, getMemoOptions(table.options, "debugRows", "getCenterRows"));
  }
};
var RowSelection = {
  getInitialState: (state) => {
    return {
      rowSelection: {},
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onRowSelectionChange: makeStateUpdater("rowSelection", table),
      enableRowSelection: true,
      enableMultiRowSelection: true,
      enableSubRowSelection: true
      // enableGroupingRowSelection: false,
      // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
      // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
    };
  },
  createTable: (table) => {
    table.setRowSelection = (updater) => table.options.onRowSelectionChange == null ? void 0 : table.options.onRowSelectionChange(updater);
    table.resetRowSelection = (defaultState) => {
      var _table$initialState$r;
      return table.setRowSelection(defaultState ? {} : (_table$initialState$r = table.initialState.rowSelection) != null ? _table$initialState$r : {});
    };
    table.toggleAllRowsSelected = (value) => {
      table.setRowSelection((old) => {
        value = typeof value !== "undefined" ? value : !table.getIsAllRowsSelected();
        const rowSelection = {
          ...old
        };
        const preGroupedFlatRows = table.getPreGroupedRowModel().flatRows;
        if (value) {
          preGroupedFlatRows.forEach((row) => {
            if (!row.getCanSelect()) {
              return;
            }
            rowSelection[row.id] = true;
          });
        } else {
          preGroupedFlatRows.forEach((row) => {
            delete rowSelection[row.id];
          });
        }
        return rowSelection;
      });
    };
    table.toggleAllPageRowsSelected = (value) => table.setRowSelection((old) => {
      const resolvedValue = typeof value !== "undefined" ? value : !table.getIsAllPageRowsSelected();
      const rowSelection = {
        ...old
      };
      table.getRowModel().rows.forEach((row) => {
        mutateRowIsSelected(rowSelection, row.id, resolvedValue, true, table);
      });
      return rowSelection;
    });
    table.getPreSelectedRowModel = () => table.getCoreRowModel();
    table.getSelectedRowModel = memo(() => [table.getState().rowSelection, table.getCoreRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, getMemoOptions(table.options, "debugTable", "getSelectedRowModel"));
    table.getFilteredSelectedRowModel = memo(() => [table.getState().rowSelection, table.getFilteredRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, getMemoOptions(table.options, "debugTable", "getFilteredSelectedRowModel"));
    table.getGroupedSelectedRowModel = memo(() => [table.getState().rowSelection, table.getSortedRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, getMemoOptions(table.options, "debugTable", "getGroupedSelectedRowModel"));
    table.getIsAllRowsSelected = () => {
      const preGroupedFlatRows = table.getFilteredRowModel().flatRows;
      const {
        rowSelection
      } = table.getState();
      let isAllRowsSelected = Boolean(preGroupedFlatRows.length && Object.keys(rowSelection).length);
      if (isAllRowsSelected) {
        if (preGroupedFlatRows.some((row) => row.getCanSelect() && !rowSelection[row.id])) {
          isAllRowsSelected = false;
        }
      }
      return isAllRowsSelected;
    };
    table.getIsAllPageRowsSelected = () => {
      const paginationFlatRows = table.getPaginationRowModel().flatRows.filter((row) => row.getCanSelect());
      const {
        rowSelection
      } = table.getState();
      let isAllPageRowsSelected = !!paginationFlatRows.length;
      if (isAllPageRowsSelected && paginationFlatRows.some((row) => !rowSelection[row.id])) {
        isAllPageRowsSelected = false;
      }
      return isAllPageRowsSelected;
    };
    table.getIsSomeRowsSelected = () => {
      var _table$getState$rowSe;
      const totalSelected = Object.keys((_table$getState$rowSe = table.getState().rowSelection) != null ? _table$getState$rowSe : {}).length;
      return totalSelected > 0 && totalSelected < table.getFilteredRowModel().flatRows.length;
    };
    table.getIsSomePageRowsSelected = () => {
      const paginationFlatRows = table.getPaginationRowModel().flatRows;
      return table.getIsAllPageRowsSelected() ? false : paginationFlatRows.filter((row) => row.getCanSelect()).some((d) => d.getIsSelected() || d.getIsSomeSelected());
    };
    table.getToggleAllRowsSelectedHandler = () => {
      return (e) => {
        table.toggleAllRowsSelected(e.target.checked);
      };
    };
    table.getToggleAllPageRowsSelectedHandler = () => {
      return (e) => {
        table.toggleAllPageRowsSelected(e.target.checked);
      };
    };
  },
  createRow: (row, table) => {
    row.toggleSelected = (value, opts) => {
      const isSelected = row.getIsSelected();
      table.setRowSelection((old) => {
        var _opts$selectChildren;
        value = typeof value !== "undefined" ? value : !isSelected;
        if (row.getCanSelect() && isSelected === value) {
          return old;
        }
        const selectedRowIds = {
          ...old
        };
        mutateRowIsSelected(selectedRowIds, row.id, value, (_opts$selectChildren = opts == null ? void 0 : opts.selectChildren) != null ? _opts$selectChildren : true, table);
        return selectedRowIds;
      });
    };
    row.getIsSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isRowSelected(row, rowSelection);
    };
    row.getIsSomeSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isSubRowSelected(row, rowSelection) === "some";
    };
    row.getIsAllSubRowsSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isSubRowSelected(row, rowSelection) === "all";
    };
    row.getCanSelect = () => {
      var _table$options$enable;
      if (typeof table.options.enableRowSelection === "function") {
        return table.options.enableRowSelection(row);
      }
      return (_table$options$enable = table.options.enableRowSelection) != null ? _table$options$enable : true;
    };
    row.getCanSelectSubRows = () => {
      var _table$options$enable2;
      if (typeof table.options.enableSubRowSelection === "function") {
        return table.options.enableSubRowSelection(row);
      }
      return (_table$options$enable2 = table.options.enableSubRowSelection) != null ? _table$options$enable2 : true;
    };
    row.getCanMultiSelect = () => {
      var _table$options$enable3;
      if (typeof table.options.enableMultiRowSelection === "function") {
        return table.options.enableMultiRowSelection(row);
      }
      return (_table$options$enable3 = table.options.enableMultiRowSelection) != null ? _table$options$enable3 : true;
    };
    row.getToggleSelectedHandler = () => {
      const canSelect = row.getCanSelect();
      return (e) => {
        var _target;
        if (!canSelect)
          return;
        row.toggleSelected((_target = e.target) == null ? void 0 : _target.checked);
      };
    };
  }
};
var mutateRowIsSelected = (selectedRowIds, id, value, includeChildren, table) => {
  var _row$subRows;
  const row = table.getRow(id, true);
  if (value) {
    if (!row.getCanMultiSelect()) {
      Object.keys(selectedRowIds).forEach((key) => delete selectedRowIds[key]);
    }
    if (row.getCanSelect()) {
      selectedRowIds[id] = true;
    }
  } else {
    delete selectedRowIds[id];
  }
  if (includeChildren && (_row$subRows = row.subRows) != null && _row$subRows.length && row.getCanSelectSubRows()) {
    row.subRows.forEach((row2) => mutateRowIsSelected(selectedRowIds, row2.id, value, includeChildren, table));
  }
};
function selectRowsFn(table, rowModel) {
  const rowSelection = table.getState().rowSelection;
  const newSelectedFlatRows = [];
  const newSelectedRowsById = {};
  const recurseRows = function(rows, depth) {
    return rows.map((row) => {
      var _row$subRows2;
      const isSelected = isRowSelected(row, rowSelection);
      if (isSelected) {
        newSelectedFlatRows.push(row);
        newSelectedRowsById[row.id] = row;
      }
      if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length) {
        row = {
          ...row,
          subRows: recurseRows(row.subRows)
        };
      }
      if (isSelected) {
        return row;
      }
    }).filter(Boolean);
  };
  return {
    rows: recurseRows(rowModel.rows),
    flatRows: newSelectedFlatRows,
    rowsById: newSelectedRowsById
  };
}
function isRowSelected(row, selection) {
  var _selection$row$id;
  return (_selection$row$id = selection[row.id]) != null ? _selection$row$id : false;
}
function isSubRowSelected(row, selection, table) {
  var _row$subRows3;
  if (!((_row$subRows3 = row.subRows) != null && _row$subRows3.length))
    return false;
  let allChildrenSelected = true;
  let someSelected = false;
  row.subRows.forEach((subRow) => {
    if (someSelected && !allChildrenSelected) {
      return;
    }
    if (subRow.getCanSelect()) {
      if (isRowSelected(subRow, selection)) {
        someSelected = true;
      } else {
        allChildrenSelected = false;
      }
    }
    if (subRow.subRows && subRow.subRows.length) {
      const subRowChildrenSelected = isSubRowSelected(subRow, selection);
      if (subRowChildrenSelected === "all") {
        someSelected = true;
      } else if (subRowChildrenSelected === "some") {
        someSelected = true;
        allChildrenSelected = false;
      } else {
        allChildrenSelected = false;
      }
    }
  });
  return allChildrenSelected ? "all" : someSelected ? "some" : false;
}
var reSplitAlphaNumeric = /([0-9]+)/gm;
var alphanumeric = (rowA, rowB, columnId) => {
  return compareAlphanumeric(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};
var alphanumericCaseSensitive = (rowA, rowB, columnId) => {
  return compareAlphanumeric(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};
var text = (rowA, rowB, columnId) => {
  return compareBasic(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};
var textCaseSensitive = (rowA, rowB, columnId) => {
  return compareBasic(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};
var datetime = (rowA, rowB, columnId) => {
  const a = rowA.getValue(columnId);
  const b = rowB.getValue(columnId);
  return a > b ? 1 : a < b ? -1 : 0;
};
var basic = (rowA, rowB, columnId) => {
  return compareBasic(rowA.getValue(columnId), rowB.getValue(columnId));
};
function compareBasic(a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
}
function toString(a) {
  if (typeof a === "number") {
    if (isNaN(a) || a === Infinity || a === -Infinity) {
      return "";
    }
    return String(a);
  }
  if (typeof a === "string") {
    return a;
  }
  return "";
}
function compareAlphanumeric(aStr, bStr) {
  const a = aStr.split(reSplitAlphaNumeric).filter(Boolean);
  const b = bStr.split(reSplitAlphaNumeric).filter(Boolean);
  while (a.length && b.length) {
    const aa = a.shift();
    const bb = b.shift();
    const an = parseInt(aa, 10);
    const bn = parseInt(bb, 10);
    const combo = [an, bn].sort();
    if (isNaN(combo[0])) {
      if (aa > bb) {
        return 1;
      }
      if (bb > aa) {
        return -1;
      }
      continue;
    }
    if (isNaN(combo[1])) {
      return isNaN(an) ? -1 : 1;
    }
    if (an > bn) {
      return 1;
    }
    if (bn > an) {
      return -1;
    }
  }
  return a.length - b.length;
}
var sortingFns = {
  alphanumeric,
  alphanumericCaseSensitive,
  text,
  textCaseSensitive,
  datetime,
  basic
};
var RowSorting = {
  getInitialState: (state) => {
    return {
      sorting: [],
      ...state
    };
  },
  getDefaultColumnDef: () => {
    return {
      sortingFn: "auto",
      sortUndefined: 1
    };
  },
  getDefaultOptions: (table) => {
    return {
      onSortingChange: makeStateUpdater("sorting", table),
      isMultiSortEvent: (e) => {
        return e.shiftKey;
      }
    };
  },
  createColumn: (column, table) => {
    column.getAutoSortingFn = () => {
      const firstRows = table.getFilteredRowModel().flatRows.slice(10);
      let isString = false;
      for (const row of firstRows) {
        const value = row == null ? void 0 : row.getValue(column.id);
        if (Object.prototype.toString.call(value) === "[object Date]") {
          return sortingFns.datetime;
        }
        if (typeof value === "string") {
          isString = true;
          if (value.split(reSplitAlphaNumeric).length > 1) {
            return sortingFns.alphanumeric;
          }
        }
      }
      if (isString) {
        return sortingFns.text;
      }
      return sortingFns.basic;
    };
    column.getAutoSortDir = () => {
      const firstRow = table.getFilteredRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === "string") {
        return "asc";
      }
      return "desc";
    };
    column.getSortingFn = () => {
      var _table$options$sortin, _table$options$sortin2;
      if (!column) {
        throw new Error();
      }
      return isFunction(column.columnDef.sortingFn) ? column.columnDef.sortingFn : column.columnDef.sortingFn === "auto" ? column.getAutoSortingFn() : (_table$options$sortin = (_table$options$sortin2 = table.options.sortingFns) == null ? void 0 : _table$options$sortin2[column.columnDef.sortingFn]) != null ? _table$options$sortin : sortingFns[column.columnDef.sortingFn];
    };
    column.toggleSorting = (desc, multi) => {
      const nextSortingOrder = column.getNextSortingOrder();
      const hasManualValue = typeof desc !== "undefined" && desc !== null;
      table.setSorting((old) => {
        const existingSorting = old == null ? void 0 : old.find((d) => d.id === column.id);
        const existingIndex = old == null ? void 0 : old.findIndex((d) => d.id === column.id);
        let newSorting = [];
        let sortAction;
        let nextDesc = hasManualValue ? desc : nextSortingOrder === "desc";
        if (old != null && old.length && column.getCanMultiSort() && multi) {
          if (existingSorting) {
            sortAction = "toggle";
          } else {
            sortAction = "add";
          }
        } else {
          if (old != null && old.length && existingIndex !== old.length - 1) {
            sortAction = "replace";
          } else if (existingSorting) {
            sortAction = "toggle";
          } else {
            sortAction = "replace";
          }
        }
        if (sortAction === "toggle") {
          if (!hasManualValue) {
            if (!nextSortingOrder) {
              sortAction = "remove";
            }
          }
        }
        if (sortAction === "add") {
          var _table$options$maxMul;
          newSorting = [...old, {
            id: column.id,
            desc: nextDesc
          }];
          newSorting.splice(0, newSorting.length - ((_table$options$maxMul = table.options.maxMultiSortColCount) != null ? _table$options$maxMul : Number.MAX_SAFE_INTEGER));
        } else if (sortAction === "toggle") {
          newSorting = old.map((d) => {
            if (d.id === column.id) {
              return {
                ...d,
                desc: nextDesc
              };
            }
            return d;
          });
        } else if (sortAction === "remove") {
          newSorting = old.filter((d) => d.id !== column.id);
        } else {
          newSorting = [{
            id: column.id,
            desc: nextDesc
          }];
        }
        return newSorting;
      });
    };
    column.getFirstSortDir = () => {
      var _ref, _column$columnDef$sor;
      const sortDescFirst = (_ref = (_column$columnDef$sor = column.columnDef.sortDescFirst) != null ? _column$columnDef$sor : table.options.sortDescFirst) != null ? _ref : column.getAutoSortDir() === "desc";
      return sortDescFirst ? "desc" : "asc";
    };
    column.getNextSortingOrder = (multi) => {
      var _table$options$enable, _table$options$enable2;
      const firstSortDirection = column.getFirstSortDir();
      const isSorted = column.getIsSorted();
      if (!isSorted) {
        return firstSortDirection;
      }
      if (isSorted !== firstSortDirection && ((_table$options$enable = table.options.enableSortingRemoval) != null ? _table$options$enable : true) && // If enableSortRemove, enable in general
      (multi ? (_table$options$enable2 = table.options.enableMultiRemove) != null ? _table$options$enable2 : true : true)) {
        return false;
      }
      return isSorted === "desc" ? "asc" : "desc";
    };
    column.getCanSort = () => {
      var _column$columnDef$ena, _table$options$enable3;
      return ((_column$columnDef$ena = column.columnDef.enableSorting) != null ? _column$columnDef$ena : true) && ((_table$options$enable3 = table.options.enableSorting) != null ? _table$options$enable3 : true) && !!column.accessorFn;
    };
    column.getCanMultiSort = () => {
      var _ref2, _column$columnDef$ena2;
      return (_ref2 = (_column$columnDef$ena2 = column.columnDef.enableMultiSort) != null ? _column$columnDef$ena2 : table.options.enableMultiSort) != null ? _ref2 : !!column.accessorFn;
    };
    column.getIsSorted = () => {
      var _table$getState$sorti;
      const columnSort = (_table$getState$sorti = table.getState().sorting) == null ? void 0 : _table$getState$sorti.find((d) => d.id === column.id);
      return !columnSort ? false : columnSort.desc ? "desc" : "asc";
    };
    column.getSortIndex = () => {
      var _table$getState$sorti2, _table$getState$sorti3;
      return (_table$getState$sorti2 = (_table$getState$sorti3 = table.getState().sorting) == null ? void 0 : _table$getState$sorti3.findIndex((d) => d.id === column.id)) != null ? _table$getState$sorti2 : -1;
    };
    column.clearSorting = () => {
      table.setSorting((old) => old != null && old.length ? old.filter((d) => d.id !== column.id) : []);
    };
    column.getToggleSortingHandler = () => {
      const canSort = column.getCanSort();
      return (e) => {
        if (!canSort)
          return;
        e.persist == null || e.persist();
        column.toggleSorting == null || column.toggleSorting(void 0, column.getCanMultiSort() ? table.options.isMultiSortEvent == null ? void 0 : table.options.isMultiSortEvent(e) : false);
      };
    };
  },
  createTable: (table) => {
    table.setSorting = (updater) => table.options.onSortingChange == null ? void 0 : table.options.onSortingChange(updater);
    table.resetSorting = (defaultState) => {
      var _table$initialState$s, _table$initialState;
      table.setSorting(defaultState ? [] : (_table$initialState$s = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.sorting) != null ? _table$initialState$s : []);
    };
    table.getPreSortedRowModel = () => table.getGroupedRowModel();
    table.getSortedRowModel = () => {
      if (!table._getSortedRowModel && table.options.getSortedRowModel) {
        table._getSortedRowModel = table.options.getSortedRowModel(table);
      }
      if (table.options.manualSorting || !table._getSortedRowModel) {
        return table.getPreSortedRowModel();
      }
      return table._getSortedRowModel();
    };
  }
};
var builtInFeatures = [
  Headers,
  ColumnVisibility,
  ColumnOrdering,
  ColumnPinning,
  ColumnFaceting,
  ColumnFiltering,
  GlobalFaceting,
  //depends on ColumnFaceting
  GlobalFiltering,
  //depends on ColumnFiltering
  RowSorting,
  ColumnGrouping,
  //depends on RowSorting
  RowExpanding,
  RowPagination,
  RowPinning,
  RowSelection,
  ColumnSizing
];
function createTable(options) {
  var _options$_features, _options$initialState;
  if (options.debugAll || options.debugTable) {
    console.info("Creating Table Instance...");
  }
  const _features = [...builtInFeatures, ...(_options$_features = options._features) != null ? _options$_features : []];
  let table = {
    _features
  };
  const defaultOptions = table._features.reduce((obj, feature) => {
    return Object.assign(obj, feature.getDefaultOptions == null ? void 0 : feature.getDefaultOptions(table));
  }, {});
  const mergeOptions = (options2) => {
    if (table.options.mergeOptions) {
      return table.options.mergeOptions(defaultOptions, options2);
    }
    return {
      ...defaultOptions,
      ...options2
    };
  };
  const coreInitialState = {};
  let initialState = {
    ...coreInitialState,
    ...(_options$initialState = options.initialState) != null ? _options$initialState : {}
  };
  table._features.forEach((feature) => {
    var _feature$getInitialSt;
    initialState = (_feature$getInitialSt = feature.getInitialState == null ? void 0 : feature.getInitialState(initialState)) != null ? _feature$getInitialSt : initialState;
  });
  const queued = [];
  let queuedTimeout = false;
  const coreInstance = {
    _features,
    options: {
      ...defaultOptions,
      ...options
    },
    initialState,
    _queue: (cb) => {
      queued.push(cb);
      if (!queuedTimeout) {
        queuedTimeout = true;
        Promise.resolve().then(() => {
          while (queued.length) {
            queued.shift()();
          }
          queuedTimeout = false;
        }).catch((error) => setTimeout(() => {
          throw error;
        }));
      }
    },
    reset: () => {
      table.setState(table.initialState);
    },
    setOptions: (updater) => {
      const newOptions = functionalUpdate(updater, table.options);
      table.options = mergeOptions(newOptions);
    },
    getState: () => {
      return table.options.state;
    },
    setState: (updater) => {
      table.options.onStateChange == null || table.options.onStateChange(updater);
    },
    _getRowId: (row, index, parent) => {
      var _table$options$getRow;
      return (_table$options$getRow = table.options.getRowId == null ? void 0 : table.options.getRowId(row, index, parent)) != null ? _table$options$getRow : `${parent ? [parent.id, index].join(".") : index}`;
    },
    getCoreRowModel: () => {
      if (!table._getCoreRowModel) {
        table._getCoreRowModel = table.options.getCoreRowModel(table);
      }
      return table._getCoreRowModel();
    },
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => {
      return table.getPaginationRowModel();
    },
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (id, searchAll) => {
      let row = (searchAll ? table.getPrePaginationRowModel() : table.getRowModel()).rowsById[id];
      if (!row) {
        row = table.getCoreRowModel().rowsById[id];
        if (!row) {
          if (true) {
            throw new Error(`getRow could not find row with ID: ${id}`);
          }
          throw new Error();
        }
      }
      return row;
    },
    _getDefaultColumnDef: memo(() => [table.options.defaultColumn], (defaultColumn) => {
      var _defaultColumn;
      defaultColumn = (_defaultColumn = defaultColumn) != null ? _defaultColumn : {};
      return {
        header: (props) => {
          const resolvedColumnDef = props.header.column.columnDef;
          if (resolvedColumnDef.accessorKey) {
            return resolvedColumnDef.accessorKey;
          }
          if (resolvedColumnDef.accessorFn) {
            return resolvedColumnDef.id;
          }
          return null;
        },
        // footer: props => props.header.column.id,
        cell: (props) => {
          var _props$renderValue$to, _props$renderValue;
          return (_props$renderValue$to = (_props$renderValue = props.renderValue()) == null || _props$renderValue.toString == null ? void 0 : _props$renderValue.toString()) != null ? _props$renderValue$to : null;
        },
        ...table._features.reduce((obj, feature) => {
          return Object.assign(obj, feature.getDefaultColumnDef == null ? void 0 : feature.getDefaultColumnDef());
        }, {}),
        ...defaultColumn
      };
    }, getMemoOptions(options, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => table.options.columns,
    getAllColumns: memo(() => [table._getColumnDefs()], (columnDefs) => {
      const recurseColumns = function(columnDefs2, parent, depth) {
        if (depth === void 0) {
          depth = 0;
        }
        return columnDefs2.map((columnDef) => {
          const column = createColumn(table, columnDef, depth, parent);
          const groupingColumnDef = columnDef;
          column.columns = groupingColumnDef.columns ? recurseColumns(groupingColumnDef.columns, column, depth + 1) : [];
          return column;
        });
      };
      return recurseColumns(columnDefs);
    }, getMemoOptions(options, "debugColumns", "getAllColumns")),
    getAllFlatColumns: memo(() => [table.getAllColumns()], (allColumns) => {
      return allColumns.flatMap((column) => {
        return column.getFlatColumns();
      });
    }, getMemoOptions(options, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: memo(() => [table.getAllFlatColumns()], (flatColumns) => {
      return flatColumns.reduce((acc, column) => {
        acc[column.id] = column;
        return acc;
      }, {});
    }, getMemoOptions(options, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: memo(() => [table.getAllColumns(), table._getOrderColumnsFn()], (allColumns, orderColumns2) => {
      let leafColumns = allColumns.flatMap((column) => column.getLeafColumns());
      return orderColumns2(leafColumns);
    }, getMemoOptions(options, "debugColumns", "getAllLeafColumns")),
    getColumn: (columnId) => {
      const column = table._getAllFlatColumnsById()[columnId];
      if (!column) {
        console.error(`[Table] Column with id '${columnId}' does not exist.`);
      }
      return column;
    }
  };
  Object.assign(table, coreInstance);
  for (let index = 0; index < table._features.length; index++) {
    const feature = table._features[index];
    feature == null || feature.createTable == null || feature.createTable(table);
  }
  return table;
}
function getCoreRowModel() {
  return (table) => memo(() => [table.options.data], (data) => {
    const rowModel = {
      rows: [],
      flatRows: [],
      rowsById: {}
    };
    const accessRows = function(originalRows, depth, parentRow) {
      if (depth === void 0) {
        depth = 0;
      }
      const rows = [];
      for (let i = 0; i < originalRows.length; i++) {
        const row = createRow(table, table._getRowId(originalRows[i], i, parentRow), originalRows[i], i, depth, void 0, parentRow == null ? void 0 : parentRow.id);
        rowModel.flatRows.push(row);
        rowModel.rowsById[row.id] = row;
        rows.push(row);
        if (table.options.getSubRows) {
          var _row$originalSubRows;
          row.originalSubRows = table.options.getSubRows(originalRows[i], i);
          if ((_row$originalSubRows = row.originalSubRows) != null && _row$originalSubRows.length) {
            row.subRows = accessRows(row.originalSubRows, depth + 1, row);
          }
        }
      }
      return rows;
    };
    rowModel.rows = accessRows(data);
    return rowModel;
  }, getMemoOptions(table.options, "debugTable", "getRowModel", () => table._autoResetPageIndex()));
}
function getExpandedRowModel() {
  return (table) => memo(() => [table.getState().expanded, table.getPreExpandedRowModel(), table.options.paginateExpandedRows], (expanded, rowModel, paginateExpandedRows) => {
    if (!rowModel.rows.length || expanded !== true && !Object.keys(expanded != null ? expanded : {}).length) {
      return rowModel;
    }
    if (!paginateExpandedRows) {
      return rowModel;
    }
    return expandRows(rowModel);
  }, getMemoOptions(table.options, "debugTable", "getExpandedRowModel"));
}
function expandRows(rowModel) {
  const expandedRows = [];
  const handleRow = (row) => {
    var _row$subRows;
    expandedRows.push(row);
    if ((_row$subRows = row.subRows) != null && _row$subRows.length && row.getIsExpanded()) {
      row.subRows.forEach(handleRow);
    }
  };
  rowModel.rows.forEach(handleRow);
  return {
    rows: expandedRows,
    flatRows: rowModel.flatRows,
    rowsById: rowModel.rowsById
  };
}
function getFacetedMinMaxValues() {
  return (table, columnId) => memo(() => {
    var _table$getColumn;
    return [(_table$getColumn = table.getColumn(columnId)) == null ? void 0 : _table$getColumn.getFacetedRowModel()];
  }, (facetedRowModel) => {
    var _facetedRowModel$flat;
    if (!facetedRowModel)
      return void 0;
    const firstValue = (_facetedRowModel$flat = facetedRowModel.flatRows[0]) == null ? void 0 : _facetedRowModel$flat.getUniqueValues(columnId);
    if (typeof firstValue === "undefined") {
      return void 0;
    }
    let facetedMinMaxValues = [firstValue, firstValue];
    for (let i = 0; i < facetedRowModel.flatRows.length; i++) {
      const values = facetedRowModel.flatRows[i].getUniqueValues(columnId);
      for (let j = 0; j < values.length; j++) {
        const value = values[j];
        if (value < facetedMinMaxValues[0]) {
          facetedMinMaxValues[0] = value;
        } else if (value > facetedMinMaxValues[1]) {
          facetedMinMaxValues[1] = value;
        }
      }
    }
    return facetedMinMaxValues;
  }, getMemoOptions(table.options, "debugTable", "getFacetedMinMaxValues"));
}
function filterRows(rows, filterRowImpl, table) {
  if (table.options.filterFromLeafRows) {
    return filterRowModelFromLeafs(rows, filterRowImpl, table);
  }
  return filterRowModelFromRoot(rows, filterRowImpl, table);
}
function filterRowModelFromLeafs(rowsToFilter, filterRow, table) {
  var _table$options$maxLea;
  const newFilteredFlatRows = [];
  const newFilteredRowsById = {};
  const maxDepth = (_table$options$maxLea = table.options.maxLeafRowFilterDepth) != null ? _table$options$maxLea : 100;
  const recurseFilterRows = function(rowsToFilter2, depth) {
    if (depth === void 0) {
      depth = 0;
    }
    const rows = [];
    for (let i = 0; i < rowsToFilter2.length; i++) {
      var _row$subRows;
      let row = rowsToFilter2[i];
      const newRow = createRow(table, row.id, row.original, row.index, row.depth, void 0, row.parentId);
      newRow.columnFilters = row.columnFilters;
      if ((_row$subRows = row.subRows) != null && _row$subRows.length && depth < maxDepth) {
        newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
        row = newRow;
        if (filterRow(row) && !newRow.subRows.length) {
          rows.push(row);
          newFilteredRowsById[row.id] = row;
          newFilteredFlatRows.push(row);
          continue;
        }
        if (filterRow(row) || newRow.subRows.length) {
          rows.push(row);
          newFilteredRowsById[row.id] = row;
          newFilteredFlatRows.push(row);
          continue;
        }
      } else {
        row = newRow;
        if (filterRow(row)) {
          rows.push(row);
          newFilteredRowsById[row.id] = row;
          newFilteredFlatRows.push(row);
        }
      }
    }
    return rows;
  };
  return {
    rows: recurseFilterRows(rowsToFilter),
    flatRows: newFilteredFlatRows,
    rowsById: newFilteredRowsById
  };
}
function filterRowModelFromRoot(rowsToFilter, filterRow, table) {
  var _table$options$maxLea2;
  const newFilteredFlatRows = [];
  const newFilteredRowsById = {};
  const maxDepth = (_table$options$maxLea2 = table.options.maxLeafRowFilterDepth) != null ? _table$options$maxLea2 : 100;
  const recurseFilterRows = function(rowsToFilter2, depth) {
    if (depth === void 0) {
      depth = 0;
    }
    const rows = [];
    for (let i = 0; i < rowsToFilter2.length; i++) {
      let row = rowsToFilter2[i];
      const pass = filterRow(row);
      if (pass) {
        var _row$subRows2;
        if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length && depth < maxDepth) {
          const newRow = createRow(table, row.id, row.original, row.index, row.depth, void 0, row.parentId);
          newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
          row = newRow;
        }
        rows.push(row);
        newFilteredFlatRows.push(row);
        newFilteredRowsById[row.id] = row;
      }
    }
    return rows;
  };
  return {
    rows: recurseFilterRows(rowsToFilter),
    flatRows: newFilteredFlatRows,
    rowsById: newFilteredRowsById
  };
}
function getFacetedRowModel() {
  return (table, columnId) => memo(() => [table.getPreFilteredRowModel(), table.getState().columnFilters, table.getState().globalFilter, table.getFilteredRowModel()], (preRowModel, columnFilters, globalFilter) => {
    if (!preRowModel.rows.length || !(columnFilters != null && columnFilters.length) && !globalFilter) {
      return preRowModel;
    }
    const filterableIds = [...columnFilters.map((d) => d.id).filter((d) => d !== columnId), globalFilter ? "__global__" : void 0].filter(Boolean);
    const filterRowsImpl = (row) => {
      for (let i = 0; i < filterableIds.length; i++) {
        if (row.columnFilters[filterableIds[i]] === false) {
          return false;
        }
      }
      return true;
    };
    return filterRows(preRowModel.rows, filterRowsImpl, table);
  }, getMemoOptions(table.options, "debugTable", "getFacetedRowModel"));
}
function getFacetedUniqueValues() {
  return (table, columnId) => memo(() => {
    var _table$getColumn;
    return [(_table$getColumn = table.getColumn(columnId)) == null ? void 0 : _table$getColumn.getFacetedRowModel()];
  }, (facetedRowModel) => {
    if (!facetedRowModel)
      return /* @__PURE__ */ new Map();
    let facetedUniqueValues = /* @__PURE__ */ new Map();
    for (let i = 0; i < facetedRowModel.flatRows.length; i++) {
      const values = facetedRowModel.flatRows[i].getUniqueValues(columnId);
      for (let j = 0; j < values.length; j++) {
        const value = values[j];
        if (facetedUniqueValues.has(value)) {
          var _facetedUniqueValues$;
          facetedUniqueValues.set(value, ((_facetedUniqueValues$ = facetedUniqueValues.get(value)) != null ? _facetedUniqueValues$ : 0) + 1);
        } else {
          facetedUniqueValues.set(value, 1);
        }
      }
    }
    return facetedUniqueValues;
  }, getMemoOptions(table.options, "debugTable", `getFacetedUniqueValues_${columnId}`));
}
function getFilteredRowModel() {
  return (table) => memo(() => [table.getPreFilteredRowModel(), table.getState().columnFilters, table.getState().globalFilter], (rowModel, columnFilters, globalFilter) => {
    if (!rowModel.rows.length || !(columnFilters != null && columnFilters.length) && !globalFilter) {
      for (let i = 0; i < rowModel.flatRows.length; i++) {
        rowModel.flatRows[i].columnFilters = {};
        rowModel.flatRows[i].columnFiltersMeta = {};
      }
      return rowModel;
    }
    const resolvedColumnFilters = [];
    const resolvedGlobalFilters = [];
    (columnFilters != null ? columnFilters : []).forEach((d) => {
      var _filterFn$resolveFilt;
      const column = table.getColumn(d.id);
      if (!column) {
        return;
      }
      const filterFn = column.getFilterFn();
      if (!filterFn) {
        if (true) {
          console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${column.id}.`);
        }
        return;
      }
      resolvedColumnFilters.push({
        id: d.id,
        filterFn,
        resolvedValue: (_filterFn$resolveFilt = filterFn.resolveFilterValue == null ? void 0 : filterFn.resolveFilterValue(d.value)) != null ? _filterFn$resolveFilt : d.value
      });
    });
    const filterableIds = columnFilters.map((d) => d.id);
    const globalFilterFn = table.getGlobalFilterFn();
    const globallyFilterableColumns = table.getAllLeafColumns().filter((column) => column.getCanGlobalFilter());
    if (globalFilter && globalFilterFn && globallyFilterableColumns.length) {
      filterableIds.push("__global__");
      globallyFilterableColumns.forEach((column) => {
        var _globalFilterFn$resol;
        resolvedGlobalFilters.push({
          id: column.id,
          filterFn: globalFilterFn,
          resolvedValue: (_globalFilterFn$resol = globalFilterFn.resolveFilterValue == null ? void 0 : globalFilterFn.resolveFilterValue(globalFilter)) != null ? _globalFilterFn$resol : globalFilter
        });
      });
    }
    let currentColumnFilter;
    let currentGlobalFilter;
    for (let j = 0; j < rowModel.flatRows.length; j++) {
      const row = rowModel.flatRows[j];
      row.columnFilters = {};
      if (resolvedColumnFilters.length) {
        for (let i = 0; i < resolvedColumnFilters.length; i++) {
          currentColumnFilter = resolvedColumnFilters[i];
          const id = currentColumnFilter.id;
          row.columnFilters[id] = currentColumnFilter.filterFn(row, id, currentColumnFilter.resolvedValue, (filterMeta) => {
            row.columnFiltersMeta[id] = filterMeta;
          });
        }
      }
      if (resolvedGlobalFilters.length) {
        for (let i = 0; i < resolvedGlobalFilters.length; i++) {
          currentGlobalFilter = resolvedGlobalFilters[i];
          const id = currentGlobalFilter.id;
          if (currentGlobalFilter.filterFn(row, id, currentGlobalFilter.resolvedValue, (filterMeta) => {
            row.columnFiltersMeta[id] = filterMeta;
          })) {
            row.columnFilters.__global__ = true;
            break;
          }
        }
        if (row.columnFilters.__global__ !== true) {
          row.columnFilters.__global__ = false;
        }
      }
    }
    const filterRowsImpl = (row) => {
      for (let i = 0; i < filterableIds.length; i++) {
        if (row.columnFilters[filterableIds[i]] === false) {
          return false;
        }
      }
      return true;
    };
    return filterRows(rowModel.rows, filterRowsImpl, table);
  }, getMemoOptions(table.options, "debugTable", "getFilteredRowModel", () => table._autoResetPageIndex()));
}
function getGroupedRowModel() {
  return (table) => memo(() => [table.getState().grouping, table.getPreGroupedRowModel()], (grouping, rowModel) => {
    if (!rowModel.rows.length || !grouping.length) {
      return rowModel;
    }
    const existingGrouping = grouping.filter((columnId) => table.getColumn(columnId));
    const groupedFlatRows = [];
    const groupedRowsById = {};
    const groupUpRecursively = function(rows, depth, parentId) {
      if (depth === void 0) {
        depth = 0;
      }
      if (depth >= existingGrouping.length) {
        return rows.map((row) => {
          row.depth = depth;
          groupedFlatRows.push(row);
          groupedRowsById[row.id] = row;
          if (row.subRows) {
            row.subRows = groupUpRecursively(row.subRows, depth + 1, row.id);
          }
          return row;
        });
      }
      const columnId = existingGrouping[depth];
      const rowGroupsMap = groupBy(rows, columnId);
      const aggregatedGroupedRows = Array.from(rowGroupsMap.entries()).map((_ref, index) => {
        let [groupingValue, groupedRows2] = _ref;
        let id = `${columnId}:${groupingValue}`;
        id = parentId ? `${parentId}>${id}` : id;
        const subRows = groupUpRecursively(groupedRows2, depth + 1, id);
        const leafRows = depth ? flattenBy(groupedRows2, (row2) => row2.subRows) : groupedRows2;
        const row = createRow(table, id, leafRows[0].original, index, depth, void 0, parentId);
        Object.assign(row, {
          groupingColumnId: columnId,
          groupingValue,
          subRows,
          leafRows,
          getValue: (columnId2) => {
            if (existingGrouping.includes(columnId2)) {
              if (row._valuesCache.hasOwnProperty(columnId2)) {
                return row._valuesCache[columnId2];
              }
              if (groupedRows2[0]) {
                var _groupedRows$0$getVal;
                row._valuesCache[columnId2] = (_groupedRows$0$getVal = groupedRows2[0].getValue(columnId2)) != null ? _groupedRows$0$getVal : void 0;
              }
              return row._valuesCache[columnId2];
            }
            if (row._groupingValuesCache.hasOwnProperty(columnId2)) {
              return row._groupingValuesCache[columnId2];
            }
            const column = table.getColumn(columnId2);
            const aggregateFn = column == null ? void 0 : column.getAggregationFn();
            if (aggregateFn) {
              row._groupingValuesCache[columnId2] = aggregateFn(columnId2, leafRows, groupedRows2);
              return row._groupingValuesCache[columnId2];
            }
          }
        });
        subRows.forEach((subRow) => {
          groupedFlatRows.push(subRow);
          groupedRowsById[subRow.id] = subRow;
        });
        return row;
      });
      return aggregatedGroupedRows;
    };
    const groupedRows = groupUpRecursively(rowModel.rows, 0);
    groupedRows.forEach((subRow) => {
      groupedFlatRows.push(subRow);
      groupedRowsById[subRow.id] = subRow;
    });
    return {
      rows: groupedRows,
      flatRows: groupedFlatRows,
      rowsById: groupedRowsById
    };
  }, getMemoOptions(table.options, "debugTable", "getGroupedRowModel", () => {
    table._queue(() => {
      table._autoResetExpanded();
      table._autoResetPageIndex();
    });
  }));
}
function groupBy(rows, columnId) {
  const groupMap = /* @__PURE__ */ new Map();
  return rows.reduce((map, row) => {
    const resKey = `${row.getGroupingValue(columnId)}`;
    const previous = map.get(resKey);
    if (!previous) {
      map.set(resKey, [row]);
    } else {
      previous.push(row);
    }
    return map;
  }, groupMap);
}
function getPaginationRowModel(opts) {
  return (table) => memo(() => [table.getState().pagination, table.getPrePaginationRowModel(), table.options.paginateExpandedRows ? void 0 : table.getState().expanded], (pagination, rowModel) => {
    if (!rowModel.rows.length) {
      return rowModel;
    }
    const {
      pageSize,
      pageIndex
    } = pagination;
    let {
      rows,
      flatRows,
      rowsById
    } = rowModel;
    const pageStart = pageSize * pageIndex;
    const pageEnd = pageStart + pageSize;
    rows = rows.slice(pageStart, pageEnd);
    let paginatedRowModel;
    if (!table.options.paginateExpandedRows) {
      paginatedRowModel = expandRows({
        rows,
        flatRows,
        rowsById
      });
    } else {
      paginatedRowModel = {
        rows,
        flatRows,
        rowsById
      };
    }
    paginatedRowModel.flatRows = [];
    const handleRow = (row) => {
      paginatedRowModel.flatRows.push(row);
      if (row.subRows.length) {
        row.subRows.forEach(handleRow);
      }
    };
    paginatedRowModel.rows.forEach(handleRow);
    return paginatedRowModel;
  }, getMemoOptions(table.options, "debugTable", "getPaginationRowModel"));
}
function getSortedRowModel() {
  return (table) => memo(() => [table.getState().sorting, table.getPreSortedRowModel()], (sorting, rowModel) => {
    if (!rowModel.rows.length || !(sorting != null && sorting.length)) {
      return rowModel;
    }
    const sortingState = table.getState().sorting;
    const sortedFlatRows = [];
    const availableSorting = sortingState.filter((sort) => {
      var _table$getColumn;
      return (_table$getColumn = table.getColumn(sort.id)) == null ? void 0 : _table$getColumn.getCanSort();
    });
    const columnInfoById = {};
    availableSorting.forEach((sortEntry) => {
      const column = table.getColumn(sortEntry.id);
      if (!column)
        return;
      columnInfoById[sortEntry.id] = {
        sortUndefined: column.columnDef.sortUndefined,
        invertSorting: column.columnDef.invertSorting,
        sortingFn: column.getSortingFn()
      };
    });
    const sortData = (rows) => {
      const sortedData = rows.map((row) => ({
        ...row
      }));
      sortedData.sort((rowA, rowB) => {
        for (let i = 0; i < availableSorting.length; i += 1) {
          var _sortEntry$desc;
          const sortEntry = availableSorting[i];
          const columnInfo = columnInfoById[sortEntry.id];
          const sortUndefined = columnInfo.sortUndefined;
          const isDesc = (_sortEntry$desc = sortEntry == null ? void 0 : sortEntry.desc) != null ? _sortEntry$desc : false;
          let sortInt = 0;
          if (sortUndefined) {
            const aValue = rowA.getValue(sortEntry.id);
            const bValue = rowB.getValue(sortEntry.id);
            const aUndefined = aValue === void 0;
            const bUndefined = bValue === void 0;
            if (aUndefined || bUndefined) {
              if (sortUndefined === "first")
                return aUndefined ? -1 : 1;
              if (sortUndefined === "last")
                return aUndefined ? 1 : -1;
              sortInt = aUndefined && bUndefined ? 0 : aUndefined ? sortUndefined : -sortUndefined;
            }
          }
          if (sortInt === 0) {
            sortInt = columnInfo.sortingFn(rowA, rowB, sortEntry.id);
          }
          if (sortInt !== 0) {
            if (isDesc) {
              sortInt *= -1;
            }
            if (columnInfo.invertSorting) {
              sortInt *= -1;
            }
            return sortInt;
          }
        }
        return rowA.index - rowB.index;
      });
      sortedData.forEach((row) => {
        var _row$subRows;
        sortedFlatRows.push(row);
        if ((_row$subRows = row.subRows) != null && _row$subRows.length) {
          row.subRows = sortData(row.subRows);
        }
      });
      return sortedData;
    };
    return {
      rows: sortData(rowModel.rows),
      flatRows: sortedFlatRows,
      rowsById: rowModel.rowsById
    };
  }, getMemoOptions(table.options, "debugTable", "getSortedRowModel", () => table._autoResetPageIndex()));
}

// node_modules/@tanstack/react-table/build/lib/index.mjs
function flexRender(Comp, props) {
  return !Comp ? null : isReactComponent(Comp) ? React.createElement(Comp, props) : Comp;
}
function isReactComponent(component) {
  return isClassComponent(component) || typeof component === "function" || isExoticComponent(component);
}
function isClassComponent(component) {
  return typeof component === "function" && (() => {
    const proto = Object.getPrototypeOf(component);
    return proto.prototype && proto.prototype.isReactComponent;
  })();
}
function isExoticComponent(component) {
  return typeof component === "object" && typeof component.$$typeof === "symbol" && ["react.memo", "react.forward_ref"].includes(component.$$typeof.description);
}
function useReactTable(options) {
  const resolvedOptions = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...options
  };
  const [tableRef] = React.useState(() => ({
    current: createTable(resolvedOptions)
  }));
  const [state, setState] = React.useState(() => tableRef.current.initialState);
  tableRef.current.setOptions((prev) => ({
    ...prev,
    ...options,
    state: {
      ...state,
      ...options.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (updater) => {
      setState(updater);
      options.onStateChange == null || options.onStateChange(updater);
    }
  }));
  return tableRef.current;
}

// node_modules/@tanstack/match-sorter-utils/build/lib/index.mjs
var characterMap = {
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  Ấ: "A",
  Ắ: "A",
  Ẳ: "A",
  Ẵ: "A",
  Ặ: "A",
  Æ: "AE",
  Ầ: "A",
  Ằ: "A",
  Ȃ: "A",
  Ç: "C",
  Ḉ: "C",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  Ế: "E",
  Ḗ: "E",
  Ề: "E",
  Ḕ: "E",
  Ḝ: "E",
  Ȇ: "E",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  Ḯ: "I",
  Ȋ: "I",
  Ð: "D",
  Ñ: "N",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  Ố: "O",
  Ṍ: "O",
  Ṓ: "O",
  Ȏ: "O",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  Ý: "Y",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  ấ: "a",
  ắ: "a",
  ẳ: "a",
  ẵ: "a",
  ặ: "a",
  æ: "ae",
  ầ: "a",
  ằ: "a",
  ȃ: "a",
  ç: "c",
  ḉ: "c",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  ế: "e",
  ḗ: "e",
  ề: "e",
  ḕ: "e",
  ḝ: "e",
  ȇ: "e",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  ḯ: "i",
  ȋ: "i",
  ð: "d",
  ñ: "n",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  ố: "o",
  ṍ: "o",
  ṓ: "o",
  ȏ: "o",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  ý: "y",
  ÿ: "y",
  Ā: "A",
  ā: "a",
  Ă: "A",
  ă: "a",
  Ą: "A",
  ą: "a",
  Ć: "C",
  ć: "c",
  Ĉ: "C",
  ĉ: "c",
  Ċ: "C",
  ċ: "c",
  Č: "C",
  č: "c",
  C̆: "C",
  c̆: "c",
  Ď: "D",
  ď: "d",
  Đ: "D",
  đ: "d",
  Ē: "E",
  ē: "e",
  Ĕ: "E",
  ĕ: "e",
  Ė: "E",
  ė: "e",
  Ę: "E",
  ę: "e",
  Ě: "E",
  ě: "e",
  Ĝ: "G",
  Ǵ: "G",
  ĝ: "g",
  ǵ: "g",
  Ğ: "G",
  ğ: "g",
  Ġ: "G",
  ġ: "g",
  Ģ: "G",
  ģ: "g",
  Ĥ: "H",
  ĥ: "h",
  Ħ: "H",
  ħ: "h",
  Ḫ: "H",
  ḫ: "h",
  Ĩ: "I",
  ĩ: "i",
  Ī: "I",
  ī: "i",
  Ĭ: "I",
  ĭ: "i",
  Į: "I",
  į: "i",
  İ: "I",
  ı: "i",
  Ĳ: "IJ",
  ĳ: "ij",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  Ḱ: "K",
  ḱ: "k",
  K̆: "K",
  k̆: "k",
  Ĺ: "L",
  ĺ: "l",
  Ļ: "L",
  ļ: "l",
  Ľ: "L",
  ľ: "l",
  Ŀ: "L",
  ŀ: "l",
  Ł: "l",
  ł: "l",
  Ḿ: "M",
  ḿ: "m",
  M̆: "M",
  m̆: "m",
  Ń: "N",
  ń: "n",
  Ņ: "N",
  ņ: "n",
  Ň: "N",
  ň: "n",
  ŉ: "n",
  N̆: "N",
  n̆: "n",
  Ō: "O",
  ō: "o",
  Ŏ: "O",
  ŏ: "o",
  Ő: "O",
  ő: "o",
  Œ: "OE",
  œ: "oe",
  P̆: "P",
  p̆: "p",
  Ŕ: "R",
  ŕ: "r",
  Ŗ: "R",
  ŗ: "r",
  Ř: "R",
  ř: "r",
  R̆: "R",
  r̆: "r",
  Ȓ: "R",
  ȓ: "r",
  Ś: "S",
  ś: "s",
  Ŝ: "S",
  ŝ: "s",
  Ş: "S",
  Ș: "S",
  ș: "s",
  ş: "s",
  Š: "S",
  š: "s",
  Ţ: "T",
  ţ: "t",
  ț: "t",
  Ț: "T",
  Ť: "T",
  ť: "t",
  Ŧ: "T",
  ŧ: "t",
  T̆: "T",
  t̆: "t",
  Ũ: "U",
  ũ: "u",
  Ū: "U",
  ū: "u",
  Ŭ: "U",
  ŭ: "u",
  Ů: "U",
  ů: "u",
  Ű: "U",
  ű: "u",
  Ų: "U",
  ų: "u",
  Ȗ: "U",
  ȗ: "u",
  V̆: "V",
  v̆: "v",
  Ŵ: "W",
  ŵ: "w",
  Ẃ: "W",
  ẃ: "w",
  X̆: "X",
  x̆: "x",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Y̆: "Y",
  y̆: "y",
  Ź: "Z",
  ź: "z",
  Ż: "Z",
  ż: "z",
  Ž: "Z",
  ž: "z",
  ſ: "s",
  ƒ: "f",
  Ơ: "O",
  ơ: "o",
  Ư: "U",
  ư: "u",
  Ǎ: "A",
  ǎ: "a",
  Ǐ: "I",
  ǐ: "i",
  Ǒ: "O",
  ǒ: "o",
  Ǔ: "U",
  ǔ: "u",
  Ǖ: "U",
  ǖ: "u",
  Ǘ: "U",
  ǘ: "u",
  Ǚ: "U",
  ǚ: "u",
  Ǜ: "U",
  ǜ: "u",
  Ứ: "U",
  ứ: "u",
  Ṹ: "U",
  ṹ: "u",
  Ǻ: "A",
  ǻ: "a",
  Ǽ: "AE",
  ǽ: "ae",
  Ǿ: "O",
  ǿ: "o",
  Þ: "TH",
  þ: "th",
  Ṕ: "P",
  ṕ: "p",
  Ṥ: "S",
  ṥ: "s",
  X́: "X",
  x́: "x",
  Ѓ: "Г",
  ѓ: "г",
  Ќ: "К",
  ќ: "к",
  A̋: "A",
  a̋: "a",
  E̋: "E",
  e̋: "e",
  I̋: "I",
  i̋: "i",
  Ǹ: "N",
  ǹ: "n",
  Ồ: "O",
  ồ: "o",
  Ṑ: "O",
  ṑ: "o",
  Ừ: "U",
  ừ: "u",
  Ẁ: "W",
  ẁ: "w",
  Ỳ: "Y",
  ỳ: "y",
  Ȁ: "A",
  ȁ: "a",
  Ȅ: "E",
  ȅ: "e",
  Ȉ: "I",
  ȉ: "i",
  Ȍ: "O",
  ȍ: "o",
  Ȑ: "R",
  ȑ: "r",
  Ȕ: "U",
  ȕ: "u",
  B̌: "B",
  b̌: "b",
  Č̣: "C",
  č̣: "c",
  Ê̌: "E",
  ê̌: "e",
  F̌: "F",
  f̌: "f",
  Ǧ: "G",
  ǧ: "g",
  Ȟ: "H",
  ȟ: "h",
  J̌: "J",
  ǰ: "j",
  Ǩ: "K",
  ǩ: "k",
  M̌: "M",
  m̌: "m",
  P̌: "P",
  p̌: "p",
  Q̌: "Q",
  q̌: "q",
  Ř̩: "R",
  ř̩: "r",
  Ṧ: "S",
  ṧ: "s",
  V̌: "V",
  v̌: "v",
  W̌: "W",
  w̌: "w",
  X̌: "X",
  x̌: "x",
  Y̌: "Y",
  y̌: "y",
  A̧: "A",
  a̧: "a",
  B̧: "B",
  b̧: "b",
  Ḑ: "D",
  ḑ: "d",
  Ȩ: "E",
  ȩ: "e",
  Ɛ̧: "E",
  ɛ̧: "e",
  Ḩ: "H",
  ḩ: "h",
  I̧: "I",
  i̧: "i",
  Ɨ̧: "I",
  ɨ̧: "i",
  M̧: "M",
  m̧: "m",
  O̧: "O",
  o̧: "o",
  Q̧: "Q",
  q̧: "q",
  U̧: "U",
  u̧: "u",
  X̧: "X",
  x̧: "x",
  Z̧: "Z",
  z̧: "z"
};
var chars = Object.keys(characterMap).join("|");
var allAccents = new RegExp(chars, "g");
function removeAccents(str) {
  return str.replace(allAccents, (match) => {
    return characterMap[match];
  });
}
var rankings = {
  CASE_SENSITIVE_EQUAL: 7,
  EQUAL: 6,
  STARTS_WITH: 5,
  WORD_STARTS_WITH: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0
};
function rankItem(item, value, options) {
  var _options$threshold;
  options = options || {};
  options.threshold = (_options$threshold = options.threshold) != null ? _options$threshold : rankings.MATCHES;
  if (!options.accessors) {
    const rank = getMatchRanking(item, value, options);
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedValue: item,
      rank,
      accessorIndex: -1,
      accessorThreshold: options.threshold,
      passed: rank >= options.threshold
    };
  }
  const valuesToRank = getAllValuesToRank(item, options.accessors);
  const rankingInfo = {
    rankedValue: item,
    rank: rankings.NO_MATCH,
    accessorIndex: -1,
    accessorThreshold: options.threshold,
    passed: false
  };
  for (let i = 0; i < valuesToRank.length; i++) {
    const rankValue = valuesToRank[i];
    let newRank = getMatchRanking(rankValue.itemValue, value, options);
    const {
      minRanking,
      maxRanking,
      threshold = options.threshold
    } = rankValue.attributes;
    if (newRank < minRanking && newRank >= rankings.MATCHES) {
      newRank = minRanking;
    } else if (newRank > maxRanking) {
      newRank = maxRanking;
    }
    newRank = Math.min(newRank, maxRanking);
    if (newRank >= threshold && newRank > rankingInfo.rank) {
      rankingInfo.rank = newRank;
      rankingInfo.passed = true;
      rankingInfo.accessorIndex = i;
      rankingInfo.accessorThreshold = threshold;
      rankingInfo.rankedValue = rankValue.itemValue;
    }
  }
  return rankingInfo;
}
function getMatchRanking(testString, stringToRank, options) {
  testString = prepareValueForComparison(testString, options);
  stringToRank = prepareValueForComparison(stringToRank, options);
  if (stringToRank.length > testString.length) {
    return rankings.NO_MATCH;
  }
  if (testString === stringToRank) {
    return rankings.CASE_SENSITIVE_EQUAL;
  }
  testString = testString.toLowerCase();
  stringToRank = stringToRank.toLowerCase();
  if (testString === stringToRank) {
    return rankings.EQUAL;
  }
  if (testString.startsWith(stringToRank)) {
    return rankings.STARTS_WITH;
  }
  if (testString.includes(` ${stringToRank}`)) {
    return rankings.WORD_STARTS_WITH;
  }
  if (testString.includes(stringToRank)) {
    return rankings.CONTAINS;
  } else if (stringToRank.length === 1) {
    return rankings.NO_MATCH;
  }
  if (getAcronym(testString).includes(stringToRank)) {
    return rankings.ACRONYM;
  }
  return getClosenessRanking(testString, stringToRank);
}
function getAcronym(string) {
  let acronym = "";
  const wordsInString = string.split(" ");
  wordsInString.forEach((wordInString) => {
    const splitByHyphenWords = wordInString.split("-");
    splitByHyphenWords.forEach((splitByHyphenWord) => {
      acronym += splitByHyphenWord.substr(0, 1);
    });
  });
  return acronym;
}
function getClosenessRanking(testString, stringToRank) {
  let matchingInOrderCharCount = 0;
  let charNumber = 0;
  function findMatchingCharacter(matchChar, string, index) {
    for (let j = index, J = string.length; j < J; j++) {
      const stringChar = string[j];
      if (stringChar === matchChar) {
        matchingInOrderCharCount += 1;
        return j + 1;
      }
    }
    return -1;
  }
  function getRanking(spread2) {
    const spreadPercentage = 1 / spread2;
    const inOrderPercentage = matchingInOrderCharCount / stringToRank.length;
    const ranking = rankings.MATCHES + inOrderPercentage * spreadPercentage;
    return ranking;
  }
  const firstIndex = findMatchingCharacter(stringToRank[0], testString, 0);
  if (firstIndex < 0) {
    return rankings.NO_MATCH;
  }
  charNumber = firstIndex;
  for (let i = 1, I = stringToRank.length; i < I; i++) {
    const matchChar = stringToRank[i];
    charNumber = findMatchingCharacter(matchChar, testString, charNumber);
    const found = charNumber > -1;
    if (!found) {
      return rankings.NO_MATCH;
    }
  }
  const spread = charNumber - firstIndex;
  return getRanking(spread);
}
function compareItems(a, b) {
  return a.rank === b.rank ? 0 : a.rank > b.rank ? -1 : 1;
}
function prepareValueForComparison(value, _ref) {
  let {
    keepDiacritics
  } = _ref;
  value = `${value}`;
  if (!keepDiacritics) {
    value = removeAccents(value);
  }
  return value;
}
function getItemValues(item, accessor) {
  let accessorFn = accessor;
  if (typeof accessor === "object") {
    accessorFn = accessor.accessor;
  }
  const value = accessorFn(item);
  if (value == null) {
    return [];
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [String(value)];
}
function getAllValuesToRank(item, accessors) {
  const allValues = [];
  for (let j = 0, J = accessors.length; j < J; j++) {
    const accessor = accessors[j];
    const attributes = getAccessorAttributes(accessor);
    const itemValues = getItemValues(item, accessor);
    for (let i = 0, I = itemValues.length; i < I; i++) {
      allValues.push({
        itemValue: itemValues[i],
        attributes
      });
    }
  }
  return allValues;
}
var defaultKeyAttributes = {
  maxRanking: Infinity,
  minRanking: -Infinity
};
function getAccessorAttributes(accessor) {
  if (typeof accessor === "function") {
    return defaultKeyAttributes;
  }
  return {
    ...defaultKeyAttributes,
    ...accessor
  };
}

// node_modules/mantine-react-table/dist/index.esm.mjs
var import_react17 = __toESM(require_react(), 1);
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var React2 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/@tanstack/virtual-core/dist/esm/utils.js
function memo2(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  return () => {
    var _a, _b, _c, _d;
    let depTime;
    if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts)))
      depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts)))
      resultTime = Date.now();
    result = fn(...newDeps);
    if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad = (str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info(
        `%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * resultFpsPercentage, 120)
        )}deg 100% 31%);`,
        opts == null ? void 0 : opts.key
      );
    }
    (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
    return result;
  };
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
  } else {
    return value;
  }
}
var approxEqual = (a, b) => Math.abs(a - b) < 1;
var debounce = (fn, ms) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

// node_modules/@tanstack/virtual-core/dist/esm/index.js
var defaultKeyExtractor = (index) => index;
var defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};
var observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(element.getBoundingClientRect());
  if (typeof ResizeObserver === "undefined") {
    return () => {
    };
  }
  const observer = new ResizeObserver((entries) => {
    const entry = entries[0];
    if (entry == null ? void 0 : entry.borderBoxSize) {
      const box = entry.borderBoxSize[0];
      if (box) {
        handler({ width: box.inlineSize, height: box.blockSize });
        return;
      }
    }
    handler(element.getBoundingClientRect());
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
var addEventListenerOptions = {
  passive: true
};
var supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
var observeElementOffset = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  let offset = 0;
  const fallback = supportsScrollend ? () => void 0 : debounce(() => {
    cb(offset, false);
  }, instance.options.isScrollingResetDelay);
  const createHandler = (isScrolling) => () => {
    offset = element[instance.options.horizontal ? "scrollLeft" : "scrollTop"];
    fallback();
    cb(offset, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  endHandler();
  element.addEventListener("scroll", handler, addEventListenerOptions);
  element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  return () => {
    element.removeEventListener("scroll", handler);
    element.removeEventListener("scrollend", endHandler);
  };
};
var measureElement = (element, entry, instance) => {
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size;
    }
  }
  return Math.round(
    element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]
  );
};
var elementScroll = (offset, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  const toOffset = offset + adjustments;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: toOffset,
    behavior
  });
};
var Virtualizer = class {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.isScrolling = false;
    this.scrollToIndexTimeoutId = null;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.pendingMeasuredCacheIndexes = [];
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.measureElementCache = /* @__PURE__ */ new Map();
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get = () => {
        if (_ro) {
          return _ro;
        } else if (typeof ResizeObserver !== "undefined") {
          return _ro = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
              this._measureElement(entry.target, entry);
            });
          });
        } else {
          return null;
        }
      };
      return {
        disconnect: () => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.disconnect();
        },
        observe: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      Object.entries(opts2).forEach(([key, value]) => {
        if (typeof value === "undefined")
          delete opts2[key];
      });
      this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        ...opts2
      };
    };
    this.notify = (force, sync) => {
      var _a, _b;
      const { startIndex, endIndex } = this.range ?? {
        startIndex: void 0,
        endIndex: void 0
      };
      const range = this.calculateRange();
      if (force || startIndex !== (range == null ? void 0 : range.startIndex) || endIndex !== (range == null ? void 0 : range.endIndex)) {
        (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
      }
    };
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d) => d());
      this.unsubs = [];
      this.scrollElement = null;
    };
    this._didMount = () => {
      this.measureElementCache.forEach(this.observer.observe);
      return () => {
        this.observer.disconnect();
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      const scrollElement = this.options.getScrollElement();
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        this.scrollElement = scrollElement;
        this._scrollToOffset(this.scrollOffset, {
          adjustments: void 0,
          behavior: void 0
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.notify(false, false);
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset, isScrolling) => {
            this.scrollAdjustments = 0;
            this.scrollDirection = isScrolling ? this.scrollOffset < offset ? "forward" : "backward" : null;
            this.scrollOffset = offset;
            const prevIsScrolling = this.isScrolling;
            this.isScrolling = isScrolling;
            this.notify(prevIsScrolling !== isScrolling, isScrolling);
          })
        );
      }
    };
    this.getSize = () => {
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getMeasurementOptions = memo2(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey
      ],
      (count2, paddingStart, scrollMargin, getItemKey) => {
        this.pendingMeasuredCacheIndexes = [];
        return {
          count: count2,
          paddingStart,
          scrollMargin,
          getItemKey
        };
      },
      {
        key: false
      }
    );
    this.getFurthestMeasurement = (measurements, index) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map();
      const furthestMeasurements = /* @__PURE__ */ new Map();
      for (let m = index - 1; m >= 0; m--) {
        const measurement = measurements[m];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(
          measurement.lane
        );
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a, b) => {
        if (a.end === b.end) {
          return a.index - b.index;
        }
        return a.end - b.end;
      })[0] : void 0;
    };
    this.getMeasurements = memo2(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: count2, paddingStart, scrollMargin, getItemKey }, itemSizeCache) => {
        const min2 = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const measurements = this.measurementsCache.slice(0, min2);
        for (let i = min2; i < count2; i++) {
          const key = getItemKey(i);
          const furthestMeasurement = this.options.lanes === 1 ? measurements[i - 1] : this.getFurthestMeasurement(measurements, i);
          const start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
          const measuredSize = itemSizeCache.get(key);
          const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
          const end = start + size;
          const lane = furthestMeasurement ? furthestMeasurement.lane : i % this.options.lanes;
          measurements[i] = {
            index: i,
            start,
            size,
            end,
            key,
            lane
          };
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: "getMeasurements",
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo2(
      () => [this.getMeasurements(), this.getSize(), this.scrollOffset],
      (measurements, outerSize, scrollOffset) => {
        return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
          measurements,
          outerSize,
          scrollOffset
        }) : null;
      },
      {
        key: "calculateRange",
        debug: () => this.options.debug
      }
    );
    this.getIndexes = memo2(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (rangeExtractor, range, overscan, count2) => {
        return range === null ? [] : rangeExtractor({
          startIndex: range.startIndex,
          endIndex: range.endIndex,
          overscan,
          count: count2
        });
      },
      {
        key: "getIndexes",
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this._measureElement = (node, entry) => {
      const item = this.measurementsCache[this.indexFromElement(node)];
      if (!item || !node.isConnected) {
        this.measureElementCache.forEach((cached, key) => {
          if (cached === node) {
            this.observer.unobserve(node);
            this.measureElementCache.delete(key);
          }
        });
        return;
      }
      const prevNode = this.measureElementCache.get(item.key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.measureElementCache.set(item.key, node);
      }
      const measuredItemSize = this.options.measureElement(node, entry, this);
      this.resizeItem(item, measuredItemSize);
    };
    this.resizeItem = (item, size) => {
      const itemSize = this.itemSizeCache.get(item.key) ?? item.size;
      const delta = size - itemSize;
      if (delta !== 0) {
        if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.scrollOffset + this.scrollAdjustments) {
          if (this.options.debug) {
            console.info("correction", delta);
          }
          this._scrollToOffset(this.scrollOffset, {
            adjustments: this.scrollAdjustments += delta,
            behavior: void 0
          });
        }
        this.pendingMeasuredCacheIndexes.push(item.index);
        this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size));
        this.notify(true, false);
      }
    };
    this.measureElement = (node) => {
      if (!node) {
        return;
      }
      this._measureElement(node, void 0);
    };
    this.getVirtualItems = memo2(
      () => [this.getIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k = 0, len = indexes.length; k < len; k++) {
          const i = indexes[k];
          const measurement = measurements[i];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: "getIndexes",
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset) => {
      const measurements = this.getMeasurements();
      return notUndefined(
        measurements[findNearestBinarySearch(
          0,
          measurements.length - 1,
          (index) => notUndefined(measurements[index]).start,
          offset
        )]
      );
    };
    this.getOffsetForAlignment = (toOffset, align) => {
      const size = this.getSize();
      if (align === "auto") {
        if (toOffset <= this.scrollOffset) {
          align = "start";
        } else if (toOffset >= this.scrollOffset + size) {
          align = "end";
        } else {
          align = "start";
        }
      }
      if (align === "start") {
        toOffset = toOffset;
      } else if (align === "end") {
        toOffset = toOffset - size;
      } else if (align === "center") {
        toOffset = toOffset - size / 2;
      }
      const scrollSizeProp = this.options.horizontal ? "scrollWidth" : "scrollHeight";
      const scrollSize = this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[scrollSizeProp] : this.scrollElement[scrollSizeProp] : 0;
      const maxOffset = scrollSize - this.getSize();
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index, align = "auto") => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      const measurement = notUndefined(this.getMeasurements()[index]);
      if (align === "auto") {
        if (measurement.end >= this.scrollOffset + this.getSize() - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (measurement.start <= this.scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [this.scrollOffset, align];
        }
      }
      const toOffset = align === "end" ? measurement.end + this.options.scrollPaddingEnd : measurement.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(toOffset, align), align];
    };
    this.isDynamicMode = () => this.measureElementCache.size > 0;
    this.cancelScrollToIndex = () => {
      if (this.scrollToIndexTimeoutId !== null) {
        clearTimeout(this.scrollToIndexTimeoutId);
        this.scrollToIndexTimeoutId = null;
      }
    };
    this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
        adjustments: void 0,
        behavior
      });
    };
    this.scrollToIndex = (index, { align: initialAlign = "auto", behavior } = {}) => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      const [toOffset, align] = this.getOffsetForIndex(index, initialAlign);
      this._scrollToOffset(toOffset, { adjustments: void 0, behavior });
      if (behavior !== "smooth" && this.isDynamicMode()) {
        this.scrollToIndexTimeoutId = setTimeout(() => {
          this.scrollToIndexTimeoutId = null;
          const elementInDOM = this.measureElementCache.has(
            this.options.getItemKey(index)
          );
          if (elementInDOM) {
            const [toOffset2] = this.getOffsetForIndex(index, align);
            if (!approxEqual(toOffset2, this.scrollOffset)) {
              this.scrollToIndex(index, { align, behavior });
            }
          } else {
            this.scrollToIndex(index, { align, behavior });
          }
        });
      }
    };
    this.scrollBy = (delta, { behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.scrollOffset + delta, {
        adjustments: void 0,
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else {
        end = this.options.lanes === 1 ? ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0 : Math.max(
          ...measurements.slice(-this.options.lanes).map((m) => m.end)
        );
      }
      return end - this.options.scrollMargin + this.options.paddingEnd;
    };
    this._scrollToOffset = (offset, {
      adjustments,
      behavior
    }) => {
      this.options.scrollToFn(offset, { behavior, adjustments }, this);
    };
    this.measure = () => {
      var _a, _b;
      this.itemSizeCache = /* @__PURE__ */ new Map();
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, false);
    };
    this.setOptions(opts);
    this.scrollRect = this.options.initialRect;
    this.scrollOffset = typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset;
    this.measurementsCache = this.options.initialMeasurementsCache;
    this.measurementsCache.forEach((item) => {
      this.itemSizeCache.set(item.key, item.size);
    });
    this.notify(false, false);
  }
};
var findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange({
  measurements,
  outerSize,
  scrollOffset
}) {
  const count2 = measurements.length - 1;
  const getOffset = (index) => measurements[index].start;
  const startIndex = findNearestBinarySearch(0, count2, getOffset, scrollOffset);
  let endIndex = startIndex;
  while (endIndex < count2 && measurements[endIndex].end < scrollOffset + outerSize) {
    endIndex++;
  }
  return { startIndex, endIndex };
}

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? React2.useLayoutEffect : React2.useEffect;
function useVirtualizerBase(options) {
  const rerender = React2.useReducer(() => ({}), {})[1];
  const resolvedOptions = {
    ...options,
    onChange: (instance2, sync) => {
      var _a;
      if (sync) {
        (0, import_react_dom.flushSync)(rerender);
      } else {
        rerender();
      }
      (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
    }
  };
  const [instance] = React2.useState(
    () => new Virtualizer(resolvedOptions)
  );
  instance.setOptions(resolvedOptions);
  React2.useEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(() => {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll,
    ...options
  });
}

// node_modules/@mantine/dates/esm/utils/get-formatted-date.mjs
var import_dayjs = __toESM(require_dayjs_min(), 1);
function defaultDateFormatter({
  type,
  date,
  locale,
  format,
  labelSeparator
}) {
  const formatDate = (value) => (0, import_dayjs.default)(value).locale(locale).format(format);
  if (type === "default") {
    return date === null ? "" : formatDate(date);
  }
  if (type === "multiple") {
    return date.map(formatDate).join(", ");
  }
  if (type === "range" && Array.isArray(date)) {
    if (date[0] && date[1]) {
      return `${formatDate(date[0])} ${labelSeparator} ${formatDate(date[1])}`;
    }
    if (date[0]) {
      return `${formatDate(date[0])} ${labelSeparator} `;
    }
    return "";
  }
  return "";
}
function getFormattedDate({ formatter, ...others }) {
  return (formatter || defaultDateFormatter)(others);
}

// node_modules/@mantine/dates/esm/utils/handle-control-key-down.mjs
function getNextIndex({ direction, levelIndex, rowIndex, cellIndex, size }) {
  switch (direction) {
    case "up":
      if (levelIndex === 0 && rowIndex === 0) {
        return null;
      }
      if (rowIndex === 0) {
        return {
          levelIndex: levelIndex - 1,
          rowIndex: cellIndex <= size[levelIndex - 1][size[levelIndex - 1].length - 1] - 1 ? size[levelIndex - 1].length - 1 : size[levelIndex - 1].length - 2,
          cellIndex
        };
      }
      return {
        levelIndex,
        rowIndex: rowIndex - 1,
        cellIndex
      };
    case "down":
      if (rowIndex === size[levelIndex].length - 1) {
        return {
          levelIndex: levelIndex + 1,
          rowIndex: 0,
          cellIndex
        };
      }
      if (rowIndex === size[levelIndex].length - 2 && cellIndex >= size[levelIndex][size[levelIndex].length - 1]) {
        return {
          levelIndex: levelIndex + 1,
          rowIndex: 0,
          cellIndex
        };
      }
      return {
        levelIndex,
        rowIndex: rowIndex + 1,
        cellIndex
      };
    case "left":
      if (levelIndex === 0 && rowIndex === 0 && cellIndex === 0) {
        return null;
      }
      if (rowIndex === 0 && cellIndex === 0) {
        return {
          levelIndex: levelIndex - 1,
          rowIndex: size[levelIndex - 1].length - 1,
          cellIndex: size[levelIndex - 1][size[levelIndex - 1].length - 1] - 1
        };
      }
      if (cellIndex === 0) {
        return {
          levelIndex,
          rowIndex: rowIndex - 1,
          cellIndex: size[levelIndex][rowIndex - 1] - 1
        };
      }
      return {
        levelIndex,
        rowIndex,
        cellIndex: cellIndex - 1
      };
    case "right":
      if (rowIndex === size[levelIndex].length - 1 && cellIndex === size[levelIndex][rowIndex] - 1) {
        return {
          levelIndex: levelIndex + 1,
          rowIndex: 0,
          cellIndex: 0
        };
      }
      if (cellIndex === size[levelIndex][rowIndex] - 1) {
        return {
          levelIndex,
          rowIndex: rowIndex + 1,
          cellIndex: 0
        };
      }
      return {
        levelIndex,
        rowIndex,
        cellIndex: cellIndex + 1
      };
    default:
      return { levelIndex, rowIndex, cellIndex };
  }
}
function focusOnNextFocusableControl({
  controlsRef,
  direction,
  levelIndex,
  rowIndex,
  cellIndex,
  size
}) {
  var _a, _b, _c;
  const nextIndex = getNextIndex({ direction, size, rowIndex, cellIndex, levelIndex });
  if (!nextIndex) {
    return;
  }
  const controlToFocus = (_c = (_b = (_a = controlsRef.current) == null ? void 0 : _a[nextIndex.levelIndex]) == null ? void 0 : _b[nextIndex.rowIndex]) == null ? void 0 : _c[nextIndex.cellIndex];
  if (!controlToFocus) {
    return;
  }
  if (controlToFocus.disabled || controlToFocus.getAttribute("data-hidden") || controlToFocus.getAttribute("data-outside")) {
    focusOnNextFocusableControl({
      controlsRef,
      direction,
      levelIndex: nextIndex.levelIndex,
      cellIndex: nextIndex.cellIndex,
      rowIndex: nextIndex.rowIndex,
      size
    });
  } else {
    controlToFocus.focus();
  }
}
function getDirection(key) {
  switch (key) {
    case "ArrowDown":
      return "down";
    case "ArrowUp":
      return "up";
    case "ArrowRight":
      return "right";
    case "ArrowLeft":
      return "left";
    default:
      return null;
  }
}
function getControlsSize(controlsRef) {
  var _a;
  return (_a = controlsRef.current) == null ? void 0 : _a.map((column) => column.map((row) => row.length));
}
function handleControlKeyDown({
  controlsRef,
  levelIndex,
  rowIndex,
  cellIndex,
  event
}) {
  const direction = getDirection(event.key);
  if (direction) {
    event.preventDefault();
    const size = getControlsSize(controlsRef);
    focusOnNextFocusableControl({
      controlsRef,
      direction,
      levelIndex,
      rowIndex,
      cellIndex,
      size
    });
  }
}

// node_modules/@mantine/dates/esm/utils/assign-time/assign-time.mjs
function assignTime(originalDate, resultDate) {
  if (!originalDate || !resultDate) {
    return resultDate;
  }
  const hours = originalDate.getHours();
  const minutes = originalDate.getMinutes();
  const seconds = originalDate.getSeconds();
  const ms = originalDate.getMilliseconds();
  const result = new Date(resultDate);
  result.setHours(hours);
  result.setMinutes(minutes);
  result.setSeconds(seconds);
  result.setMilliseconds(ms);
  return result;
}

// node_modules/@mantine/dates/esm/utils/get-default-clamped-date.mjs
var import_dayjs4 = __toESM(require_dayjs_min(), 1);

// node_modules/@mantine/dates/esm/utils/shift-timezone.mjs
var import_dayjs3 = __toESM(require_dayjs_min(), 1);

// node_modules/@mantine/dates/esm/utils/get-timezone-offset.mjs
var import_dayjs2 = __toESM(require_dayjs_min(), 1);
var import_timezone = __toESM(require_timezone(), 1);
var import_utc = __toESM(require_utc(), 1);
import_dayjs2.default.extend(import_utc.default);
import_dayjs2.default.extend(import_timezone.default);
function getTimezoneOffset(date, timezone) {
  if (timezone) {
    return (0, import_dayjs2.default)(date).tz(timezone).utcOffset() + date.getTimezoneOffset();
  }
  return 0;
}

// node_modules/@mantine/dates/esm/utils/shift-timezone.mjs
var updateTimezone = (date, timezone, direction) => {
  if (!date) {
    return null;
  }
  if (!timezone) {
    return date;
  }
  let offset = getTimezoneOffset(date, timezone);
  if (direction === "remove") {
    offset *= -1;
  }
  return (0, import_dayjs3.default)(date).add(offset, "minutes").toDate();
};
function shiftTimezone(direction, date, timezone, disabled) {
  if (disabled || !date) {
    return date;
  }
  if (Array.isArray(date)) {
    return date.map((d) => updateTimezone(d, timezone, direction));
  }
  return updateTimezone(date, timezone, direction);
}

// node_modules/@mantine/dates/esm/utils/get-default-clamped-date.mjs
function getDefaultClampedDate({ minDate, maxDate, timezone }) {
  const today = shiftTimezone("add", /* @__PURE__ */ new Date(), timezone);
  if (!minDate && !maxDate) {
    return today;
  }
  if (minDate && (0, import_dayjs4.default)(today).isBefore(minDate)) {
    return minDate;
  }
  if (maxDate && (0, import_dayjs4.default)(today).isAfter(maxDate)) {
    return maxDate;
  }
  return today;
}

// node_modules/@mantine/dates/esm/components/DatesProvider/DatesProvider.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var DATES_PROVIDER_DEFAULT_SETTINGS = {
  locale: "en",
  timezone: null,
  firstDayOfWeek: 1,
  weekendDays: [0, 6],
  labelSeparator: "–",
  consistentWeeks: false
};
var DatesProviderContext = (0, import_react.createContext)(DATES_PROVIDER_DEFAULT_SETTINGS);

// node_modules/@mantine/dates/esm/components/DatesProvider/use-dates-context.mjs
var import_react2 = __toESM(require_react(), 1);
function useDatesContext() {
  const ctx = (0, import_react2.useContext)(DatesProviderContext);
  const getLocale = (0, import_react2.useCallback)((input) => input || ctx.locale, [ctx.locale]);
  const getTimezone = (0, import_react2.useCallback)(
    (input) => input || ctx.timezone || void 0,
    [ctx.timezone]
  );
  const getFirstDayOfWeek = (0, import_react2.useCallback)(
    (input) => typeof input === "number" ? input : ctx.firstDayOfWeek,
    [ctx.firstDayOfWeek]
  );
  const getWeekendDays = (0, import_react2.useCallback)(
    (input) => Array.isArray(input) ? input : ctx.weekendDays,
    [ctx.weekendDays]
  );
  const getLabelSeparator = (0, import_react2.useCallback)(
    (input) => typeof input === "string" ? input : ctx.labelSeparator,
    [ctx.labelSeparator]
  );
  return {
    ...ctx,
    getLocale,
    getTimezone,
    getFirstDayOfWeek,
    getWeekendDays,
    getLabelSeparator
  };
}

// node_modules/@mantine/dates/esm/components/HiddenDatesInput/HiddenDatesInput.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function formatValue(value, type) {
  if (type === "range" && Array.isArray(value)) {
    const [startDate, endDate] = value;
    if (!startDate) {
      return "";
    }
    if (!endDate) {
      return `${startDate.toISOString()} –`;
    }
    return `${startDate.toISOString()} – ${endDate.toISOString()}`;
  }
  if (type === "multiple" && Array.isArray(value)) {
    return value.map((date) => date == null ? void 0 : date.toISOString()).filter(Boolean).join(", ");
  }
  if (!Array.isArray(value) && value) {
    return value.toISOString();
  }
  return "";
}
function HiddenDatesInput({ value, type, name, form }) {
  return (0, import_jsx_runtime2.jsx)("input", { type: "hidden", value: formatValue(value, type), name, form });
}
HiddenDatesInput.displayName = "@mantine/dates/HiddenDatesInput";

// node_modules/@mantine/dates/esm/components/TimeInput/TimeInput.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/dates/esm/components/TimeInput/TimeInput.module.css.mjs
var classes = { "input": "m_468e7eda" };

// node_modules/@mantine/dates/esm/components/TimeInput/TimeInput.mjs
var defaultProps = {};
var TimeInput = factory((_props, ref) => {
  const props = useProps("TimeInput", defaultProps, _props);
  const {
    classNames,
    styles,
    unstyled,
    vars,
    withSeconds,
    minTime,
    maxTime,
    value,
    onChange,
    ...others
  } = props;
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const checkIfTimeLimitExceeded = (val) => {
    if (minTime !== void 0 || maxTime !== void 0) {
      const [hours, minutes, seconds] = val.split(":").map(Number);
      if (minTime) {
        const [minHours, minMinutes, minSeconds] = minTime.split(":").map(Number);
        if (hours < minHours || hours === minHours && minutes < minMinutes || withSeconds && hours === minHours && minutes === minMinutes && seconds < minSeconds) {
          return -1;
        }
      }
      if (maxTime) {
        const [maxHours, maxMinutes, maxSeconds] = maxTime.split(":").map(Number);
        if (hours > maxHours || hours === maxHours && minutes > maxMinutes || withSeconds && hours === maxHours && minutes === maxMinutes && seconds > maxSeconds) {
          return 1;
        }
      }
    }
    return 0;
  };
  const onTimeBlur = (event) => {
    var _a, _b, _c;
    (_a = props.onBlur) == null ? void 0 : _a.call(props, event);
    if (minTime !== void 0 || maxTime !== void 0) {
      const val = event.currentTarget.value;
      if (val) {
        const check = checkIfTimeLimitExceeded(val);
        if (check === 1) {
          event.currentTarget.value = maxTime;
          (_b = props.onChange) == null ? void 0 : _b.call(props, event);
        } else if (check === -1) {
          event.currentTarget.value = minTime;
          (_c = props.onChange) == null ? void 0 : _c.call(props, event);
        }
      }
    }
  };
  return (0, import_jsx_runtime3.jsx)(
    InputBase,
    {
      classNames: { ...resolvedClassNames, input: clsx_default(classes.input, resolvedClassNames == null ? void 0 : resolvedClassNames.input) },
      styles: resolvedStyles,
      unstyled,
      ref,
      value,
      ...others,
      step: withSeconds ? 1 : 60,
      onChange,
      onBlur: onTimeBlur,
      type: "time",
      __staticSelector: "TimeInput"
    }
  );
});
TimeInput.classes = InputBase.classes;
TimeInput.displayName = "@mantine/dates/TimeInput";

// node_modules/@mantine/dates/esm/components/Day/Day.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var import_dayjs5 = __toESM(require_dayjs_min(), 1);

// node_modules/@mantine/dates/esm/components/Day/Day.module.css.mjs
var classes2 = { "day": "m_396ce5cb" };

// node_modules/@mantine/dates/esm/components/Day/Day.mjs
var defaultProps2 = {};
var varsResolver = createVarsResolver((_, { size }) => ({
  day: {
    "--day-size": getSize(size, "day-size")
  }
}));
var Day = factory((_props, ref) => {
  const props = useProps("Day", defaultProps2, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    date,
    disabled,
    __staticSelector,
    weekend,
    outside,
    selected,
    renderDay,
    inRange,
    firstInRange,
    lastInRange,
    hidden,
    static: isStatic,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "Day",
    classes: classes2,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: "day"
  });
  const ctx = useDatesContext();
  return (0, import_jsx_runtime4.jsx)(
    UnstyledButton,
    {
      ...getStyles("day", { style: hidden ? { display: "none" } : void 0 }),
      component: isStatic ? "div" : "button",
      ref,
      disabled,
      "data-today": (0, import_dayjs5.default)(date).isSame(shiftTimezone("add", /* @__PURE__ */ new Date(), ctx.getTimezone()), "day") || void 0,
      "data-hidden": hidden || void 0,
      "data-disabled": disabled || void 0,
      "data-weekend": !disabled && !outside && weekend || void 0,
      "data-outside": !disabled && outside || void 0,
      "data-selected": !disabled && selected || void 0,
      "data-in-range": inRange && !disabled || void 0,
      "data-first-in-range": firstInRange && !disabled || void 0,
      "data-last-in-range": lastInRange && !disabled || void 0,
      "data-static": isStatic || void 0,
      unstyled,
      ...others,
      children: (renderDay == null ? void 0 : renderDay(date)) || date.getDate()
    }
  );
});
Day.classes = classes2;
Day.displayName = "@mantine/dates/Day";

// node_modules/@mantine/dates/esm/components/WeekdaysRow/WeekdaysRow.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/dates/esm/components/WeekdaysRow/get-weekdays-names/get-weekdays-names.mjs
var import_dayjs6 = __toESM(require_dayjs_min(), 1);
function getWeekdayNames({
  locale,
  format = "dd",
  firstDayOfWeek = 1
}) {
  const baseDate = (0, import_dayjs6.default)().day(firstDayOfWeek);
  const labels = [];
  for (let i = 0; i < 7; i += 1) {
    if (typeof format === "string") {
      labels.push((0, import_dayjs6.default)(baseDate).add(i, "days").locale(locale).format(format));
    } else {
      labels.push(format((0, import_dayjs6.default)(baseDate).add(i, "days").toDate()));
    }
  }
  return labels;
}

// node_modules/@mantine/dates/esm/components/WeekdaysRow/WeekdaysRow.module.css.mjs
var classes3 = { "weekday": "m_18a3eca" };

// node_modules/@mantine/dates/esm/components/WeekdaysRow/WeekdaysRow.mjs
var defaultProps3 = {};
var varsResolver2 = createVarsResolver((_, { size }) => ({
  weekdaysRow: {
    "--wr-fz": getFontSize(size),
    "--wr-spacing": getSpacing(size)
  }
}));
var WeekdaysRow = factory((_props, ref) => {
  const props = useProps("WeekdaysRow", defaultProps3, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    cellComponent: CellComponent = "th",
    __staticSelector,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "WeekdaysRow",
    classes: classes3,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2,
    rootSelector: "weekdaysRow"
  });
  const ctx = useDatesContext();
  const weekdays = getWeekdayNames({
    locale: ctx.getLocale(locale),
    format: weekdayFormat,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek)
  }).map((weekday, index) => (0, import_jsx_runtime5.jsx)(CellComponent, { ...getStyles("weekday"), children: weekday }, index));
  return (0, import_jsx_runtime5.jsx)(Box, { component: "tr", ref, ...getStyles("weekdaysRow"), ...others, children: weekdays });
});
WeekdaysRow.classes = classes3;
WeekdaysRow.displayName = "@mantine/dates/WeekdaysRow";

// node_modules/@mantine/dates/esm/components/Month/get-end-of-week/get-end-of-week.mjs
function getEndOfWeek(date, firstDayOfWeek = 1) {
  const value = new Date(date);
  const lastDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
  while (value.getDay() !== lastDayOfWeek) {
    value.setDate(value.getDate() + 1);
  }
  return value;
}

// node_modules/@mantine/dates/esm/components/Month/get-start-of-week/get-start-of-week.mjs
function getStartOfWeek(date, firstDayOfWeek = 1) {
  const value = new Date(date);
  while (value.getDay() !== firstDayOfWeek) {
    value.setDate(value.getDate() - 1);
  }
  return value;
}

// node_modules/@mantine/dates/esm/components/Month/get-month-days/get-month-days.mjs
function getMonthDays({
  month,
  firstDayOfWeek = 1,
  consistentWeeks
}) {
  const currentMonth = month.getMonth();
  const startOfMonth = new Date(month.getFullYear(), currentMonth, 1);
  const endOfMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0);
  const endDate = getEndOfWeek(endOfMonth, firstDayOfWeek);
  const date = getStartOfWeek(startOfMonth, firstDayOfWeek);
  const weeks = [];
  while (date <= endDate) {
    const days = [];
    for (let i = 0; i < 7; i += 1) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    weeks.push(days);
  }
  if (consistentWeeks && weeks.length < 6) {
    const lastWeek = weeks[weeks.length - 1];
    const lastDay = lastWeek[lastWeek.length - 1];
    const nextDay = new Date(lastDay);
    nextDay.setDate(nextDay.getDate() + 1);
    while (weeks.length < 6) {
      const days = [];
      for (let i = 0; i < 7; i += 1) {
        days.push(new Date(nextDay));
        nextDay.setDate(nextDay.getDate() + 1);
      }
      weeks.push(days);
    }
  }
  return weeks;
}

// node_modules/@mantine/dates/esm/components/Month/is-same-month/is-same-month.mjs
function isSameMonth(date, comparison) {
  return date.getFullYear() === comparison.getFullYear() && date.getMonth() === comparison.getMonth();
}

// node_modules/@mantine/dates/esm/components/Month/Month.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var import_dayjs10 = __toESM(require_dayjs_min(), 1);

// node_modules/@mantine/dates/esm/components/Month/get-date-in-tab-order/get-date-in-tab-order.mjs
var import_dayjs9 = __toESM(require_dayjs_min(), 1);

// node_modules/@mantine/dates/esm/components/Month/is-after-min-date/is-after-min-date.mjs
var import_dayjs7 = __toESM(require_dayjs_min(), 1);
function isAfterMinDate(date, minDate) {
  return minDate instanceof Date ? (0, import_dayjs7.default)(date).isAfter((0, import_dayjs7.default)(minDate).subtract(1, "day"), "day") : true;
}

// node_modules/@mantine/dates/esm/components/Month/is-before-max-date/is-before-max-date.mjs
var import_dayjs8 = __toESM(require_dayjs_min(), 1);
function isBeforeMaxDate(date, maxDate) {
  return maxDate instanceof Date ? (0, import_dayjs8.default)(date).isBefore((0, import_dayjs8.default)(maxDate).add(1, "day"), "day") : true;
}

// node_modules/@mantine/dates/esm/components/Month/get-date-in-tab-order/get-date-in-tab-order.mjs
function getDateInTabOrder(dates, minDate, maxDate, getDateControlProps, excludeDate, hideOutsideDates, month) {
  const enabledDates = dates.flat().filter(
    (date) => {
      var _a;
      return isBeforeMaxDate(date, maxDate) && isAfterMinDate(date, minDate) && !(excludeDate == null ? void 0 : excludeDate(date)) && !((_a = getDateControlProps == null ? void 0 : getDateControlProps(date)) == null ? void 0 : _a.disabled) && (!hideOutsideDates || isSameMonth(date, month));
    }
  );
  const selectedDate = enabledDates.find((date) => {
    var _a;
    return (_a = getDateControlProps == null ? void 0 : getDateControlProps(date)) == null ? void 0 : _a.selected;
  });
  if (selectedDate) {
    return selectedDate;
  }
  const currentDate = enabledDates.find((date) => (0, import_dayjs9.default)().isSame(date, "date"));
  if (currentDate) {
    return currentDate;
  }
  return enabledDates[0];
}

// node_modules/@mantine/dates/esm/components/Month/Month.module.css.mjs
var classes4 = { "month": "m_cc9820d3", "monthCell": "m_8f457cd5" };

// node_modules/@mantine/dates/esm/components/Month/Month.mjs
var defaultProps4 = {
  withCellSpacing: true
};
var Month = factory((_props, ref) => {
  const props = useProps("Month", defaultProps4, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    month,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    static: isStatic,
    __getDayRef,
    __onDayKeyDown,
    __onDayClick,
    __onDayMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing,
    size,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "Month",
    classes: classes4,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: "month"
  });
  const ctx = useDatesContext();
  const dates = getMonthDays({
    month,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
    consistentWeeks: ctx.consistentWeeks
  });
  const dateInTabOrder = getDateInTabOrder(
    dates,
    minDate,
    maxDate,
    getDayProps,
    excludeDate,
    hideOutsideDates,
    month
  );
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const rows = dates.map((row, rowIndex) => {
    const cells = row.map((date, cellIndex) => {
      const outside = !isSameMonth(date, month);
      const ariaLabel = (getDayAriaLabel == null ? void 0 : getDayAriaLabel(date)) || (0, import_dayjs10.default)(date).locale(locale || ctx.locale).format("D MMMM YYYY");
      const dayProps = getDayProps == null ? void 0 : getDayProps(date);
      const isDateInTabOrder = (0, import_dayjs10.default)(date).isSame(dateInTabOrder, "date");
      return (0, import_jsx_runtime6.jsx)(
        "td",
        {
          ...getStyles("monthCell"),
          "data-with-spacing": withCellSpacing || void 0,
          children: (0, import_jsx_runtime6.jsx)(
            Day,
            {
              __staticSelector: __staticSelector || "Month",
              classNames: resolvedClassNames,
              styles: resolvedStyles,
              unstyled,
              "data-mantine-stop-propagation": __stopPropagation || void 0,
              renderDay,
              date,
              size,
              weekend: ctx.getWeekendDays(weekendDays).includes(date.getDay()),
              outside,
              hidden: hideOutsideDates ? outside : false,
              "aria-label": ariaLabel,
              static: isStatic,
              disabled: (excludeDate == null ? void 0 : excludeDate(date)) || !isBeforeMaxDate(date, maxDate) || !isAfterMinDate(date, minDate),
              ref: (node) => __getDayRef == null ? void 0 : __getDayRef(rowIndex, cellIndex, node),
              ...dayProps,
              onKeyDown: (event) => {
                var _a;
                (_a = dayProps == null ? void 0 : dayProps.onKeyDown) == null ? void 0 : _a.call(dayProps, event);
                __onDayKeyDown == null ? void 0 : __onDayKeyDown(event, { rowIndex, cellIndex, date });
              },
              onMouseEnter: (event) => {
                var _a;
                (_a = dayProps == null ? void 0 : dayProps.onMouseEnter) == null ? void 0 : _a.call(dayProps, event);
                __onDayMouseEnter == null ? void 0 : __onDayMouseEnter(event, date);
              },
              onClick: (event) => {
                var _a;
                (_a = dayProps == null ? void 0 : dayProps.onClick) == null ? void 0 : _a.call(dayProps, event);
                __onDayClick == null ? void 0 : __onDayClick(event, date);
              },
              onMouseDown: (event) => {
                var _a;
                (_a = dayProps == null ? void 0 : dayProps.onMouseDown) == null ? void 0 : _a.call(dayProps, event);
                __preventFocus && event.preventDefault();
              },
              tabIndex: __preventFocus || !isDateInTabOrder ? -1 : 0
            }
          )
        },
        date.toString()
      );
    });
    return (0, import_jsx_runtime6.jsx)("tr", { ...getStyles("monthRow"), children: cells }, rowIndex);
  });
  return (0, import_jsx_runtime6.jsxs)(Box, { component: "table", ...getStyles("month"), size, ref, ...others, children: [
    !hideWeekdays && (0, import_jsx_runtime6.jsx)("thead", { ...getStyles("monthThead"), children: (0, import_jsx_runtime6.jsx)(
      WeekdaysRow,
      {
        __staticSelector: __staticSelector || "Month",
        locale,
        firstDayOfWeek,
        weekdayFormat,
        size,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled
      }
    ) }),
    (0, import_jsx_runtime6.jsx)("tbody", { ...getStyles("monthTbody"), children: rows })
  ] });
});
Month.classes = classes4;
Month.displayName = "@mantine/dates/Month";

// node_modules/@mantine/dates/esm/components/PickerControl/PickerControl.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/dates/esm/components/PickerControl/PickerControl.module.css.mjs
var classes5 = { "pickerControl": "m_dc6a3c71" };

// node_modules/@mantine/dates/esm/components/PickerControl/PickerControl.mjs
var defaultProps5 = {};
var varsResolver3 = createVarsResolver((_, { size }) => ({
  pickerControl: {
    "--dpc-fz": getFontSize(size),
    "--dpc-size": getSize(size, "dpc-size")
  }
}));
var PickerControl = factory((_props, ref) => {
  const props = useProps("PickerControl", defaultProps5, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    firstInRange,
    lastInRange,
    inRange,
    __staticSelector,
    selected,
    disabled,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "PickerControl",
    classes: classes5,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver3,
    rootSelector: "pickerControl"
  });
  return (0, import_jsx_runtime7.jsx)(
    UnstyledButton,
    {
      ...getStyles("pickerControl"),
      ref,
      unstyled,
      "data-picker-control": true,
      "data-selected": selected && !disabled || void 0,
      "data-disabled": disabled || void 0,
      "data-in-range": inRange && !disabled && !selected || void 0,
      "data-first-in-range": firstInRange && !disabled || void 0,
      "data-last-in-range": lastInRange && !disabled || void 0,
      disabled,
      ...others
    }
  );
});
PickerControl.classes = classes5;
PickerControl.displayName = "@mantine/dates/PickerControl";

// node_modules/@mantine/dates/esm/components/YearsList/YearsList.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var import_dayjs13 = __toESM(require_dayjs_min(), 1);

// node_modules/@mantine/dates/esm/components/YearsList/get-year-in-tab-order/get-year-in-tab-order.mjs
var import_dayjs12 = __toESM(require_dayjs_min(), 1);

// node_modules/@mantine/dates/esm/components/YearsList/is-year-disabled/is-year-disabled.mjs
var import_dayjs11 = __toESM(require_dayjs_min(), 1);
function isYearDisabled(year, minDate, maxDate) {
  if (!minDate && !maxDate) {
    return false;
  }
  if (minDate && (0, import_dayjs11.default)(year).isBefore(minDate, "year")) {
    return true;
  }
  if (maxDate && (0, import_dayjs11.default)(year).isAfter(maxDate, "year")) {
    return true;
  }
  return false;
}

// node_modules/@mantine/dates/esm/components/YearsList/get-year-in-tab-order/get-year-in-tab-order.mjs
function getYearInTabOrder(years, minDate, maxDate, getYearControlProps) {
  const enabledYears = years.flat().filter(
    (year) => {
      var _a;
      return !isYearDisabled(year, minDate, maxDate) && !((_a = getYearControlProps == null ? void 0 : getYearControlProps(year)) == null ? void 0 : _a.disabled);
    }
  );
  const selectedYear = enabledYears.find((year) => {
    var _a;
    return (_a = getYearControlProps == null ? void 0 : getYearControlProps(year)) == null ? void 0 : _a.selected;
  });
  if (selectedYear) {
    return selectedYear;
  }
  const currentYear = enabledYears.find((year) => (0, import_dayjs12.default)().isSame(year, "year"));
  if (currentYear) {
    return currentYear;
  }
  return enabledYears[0];
}

// node_modules/@mantine/dates/esm/components/YearsList/get-years-data/get-years-data.mjs
function getYearsData(decade) {
  const year = decade.getFullYear();
  const rounded = year - year % 10;
  let currentYearIndex = 0;
  const results = [[], [], [], []];
  for (let i = 0; i < 4; i += 1) {
    const max2 = i === 3 ? 1 : 3;
    for (let j = 0; j < max2; j += 1) {
      results[i].push(new Date(rounded + currentYearIndex, 0));
      currentYearIndex += 1;
    }
  }
  return results;
}

// node_modules/@mantine/dates/esm/components/YearsList/YearsList.module.css.mjs
var classes6 = { "yearsList": "m_9206547b", "yearsListCell": "m_c5a19c7d" };

// node_modules/@mantine/dates/esm/components/YearsList/YearsList.mjs
var defaultProps6 = {
  yearsListFormat: "YYYY",
  withCellSpacing: true
};
var YearsList = factory((_props, ref) => {
  const props = useProps("YearsList", defaultProps6, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    decade,
    yearsListFormat,
    locale,
    minDate,
    maxDate,
    getYearControlProps,
    __staticSelector,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing,
    size,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "YearsList",
    classes: classes6,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: "yearsList"
  });
  const ctx = useDatesContext();
  const years = getYearsData(decade);
  const yearInTabOrder = getYearInTabOrder(years, minDate, maxDate, getYearControlProps);
  const rows = years.map((yearsRow, rowIndex) => {
    const cells = yearsRow.map((year, cellIndex) => {
      const controlProps = getYearControlProps == null ? void 0 : getYearControlProps(year);
      const isYearInTabOrder = (0, import_dayjs13.default)(year).isSame(yearInTabOrder, "year");
      return (0, import_jsx_runtime8.jsx)(
        "td",
        {
          ...getStyles("yearsListCell"),
          "data-with-spacing": withCellSpacing || void 0,
          children: (0, import_jsx_runtime8.jsx)(
            PickerControl,
            {
              ...getStyles("yearsListControl"),
              size,
              unstyled,
              "data-mantine-stop-propagation": __stopPropagation || void 0,
              disabled: isYearDisabled(year, minDate, maxDate),
              ref: (node) => __getControlRef == null ? void 0 : __getControlRef(rowIndex, cellIndex, node),
              ...controlProps,
              onKeyDown: (event) => {
                var _a;
                (_a = controlProps == null ? void 0 : controlProps.onKeyDown) == null ? void 0 : _a.call(controlProps, event);
                __onControlKeyDown == null ? void 0 : __onControlKeyDown(event, { rowIndex, cellIndex, date: year });
              },
              onClick: (event) => {
                var _a;
                (_a = controlProps == null ? void 0 : controlProps.onClick) == null ? void 0 : _a.call(controlProps, event);
                __onControlClick == null ? void 0 : __onControlClick(event, year);
              },
              onMouseEnter: (event) => {
                var _a;
                (_a = controlProps == null ? void 0 : controlProps.onMouseEnter) == null ? void 0 : _a.call(controlProps, event);
                __onControlMouseEnter == null ? void 0 : __onControlMouseEnter(event, year);
              },
              onMouseDown: (event) => {
                var _a;
                (_a = controlProps == null ? void 0 : controlProps.onMouseDown) == null ? void 0 : _a.call(controlProps, event);
                __preventFocus && event.preventDefault();
              },
              tabIndex: __preventFocus || !isYearInTabOrder ? -1 : 0,
              children: (0, import_dayjs13.default)(year).locale(ctx.getLocale(locale)).format(yearsListFormat)
            }
          )
        },
        cellIndex
      );
    });
    return (0, import_jsx_runtime8.jsx)("tr", { ...getStyles("yearsListRow"), children: cells }, rowIndex);
  });
  return (0, import_jsx_runtime8.jsx)(Box, { component: "table", ref, size, ...getStyles("yearsList"), ...others, children: (0, import_jsx_runtime8.jsx)("tbody", { children: rows }) });
});
YearsList.classes = classes6;
YearsList.displayName = "@mantine/dates/YearsList";

// node_modules/@mantine/dates/esm/components/MonthsList/MonthsList.mjs
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var import_dayjs17 = __toESM(require_dayjs_min(), 1);

// node_modules/@mantine/dates/esm/components/MonthsList/get-month-in-tab-order/get-month-in-tab-order.mjs
var import_dayjs15 = __toESM(require_dayjs_min(), 1);

// node_modules/@mantine/dates/esm/components/MonthsList/is-month-disabled/is-month-disabled.mjs
var import_dayjs14 = __toESM(require_dayjs_min(), 1);
function isMonthDisabled(month, minDate, maxDate) {
  if (!minDate && !maxDate) {
    return false;
  }
  if (minDate && (0, import_dayjs14.default)(month).isBefore(minDate, "month")) {
    return true;
  }
  if (maxDate && (0, import_dayjs14.default)(month).isAfter(maxDate, "month")) {
    return true;
  }
  return false;
}

// node_modules/@mantine/dates/esm/components/MonthsList/get-month-in-tab-order/get-month-in-tab-order.mjs
function getMonthInTabOrder(months, minDate, maxDate, getMonthControlProps) {
  const enabledMonths = months.flat().filter(
    (month) => {
      var _a;
      return !isMonthDisabled(month, minDate, maxDate) && !((_a = getMonthControlProps == null ? void 0 : getMonthControlProps(month)) == null ? void 0 : _a.disabled);
    }
  );
  const selectedMonth = enabledMonths.find((month) => {
    var _a;
    return (_a = getMonthControlProps == null ? void 0 : getMonthControlProps(month)) == null ? void 0 : _a.selected;
  });
  if (selectedMonth) {
    return selectedMonth;
  }
  const currentMonth = enabledMonths.find((month) => (0, import_dayjs15.default)().isSame(month, "month"));
  if (currentMonth) {
    return currentMonth;
  }
  return enabledMonths[0];
}

// node_modules/@mantine/dates/esm/components/MonthsList/get-months-data/get-months-data.mjs
var import_dayjs16 = __toESM(require_dayjs_min(), 1);
function getMonthsData(year) {
  const startOfYear = (0, import_dayjs16.default)(year).startOf("year").toDate();
  const results = [[], [], [], []];
  let currentMonthIndex = 0;
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      results[i].push((0, import_dayjs16.default)(startOfYear).add(currentMonthIndex, "months").toDate());
      currentMonthIndex += 1;
    }
  }
  return results;
}

// node_modules/@mantine/dates/esm/components/MonthsList/MonthsList.module.css.mjs
var classes7 = { "monthsList": "m_2a6c32d", "monthsListCell": "m_fe27622f" };

// node_modules/@mantine/dates/esm/components/MonthsList/MonthsList.mjs
var defaultProps7 = {
  monthsListFormat: "MMM",
  withCellSpacing: true
};
var MonthsList = factory((_props, ref) => {
  const props = useProps("MonthsList", defaultProps7, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    year,
    monthsListFormat,
    locale,
    minDate,
    maxDate,
    getMonthControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing,
    size,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "MonthsList",
    classes: classes7,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: "monthsList"
  });
  const ctx = useDatesContext();
  const months = getMonthsData(year);
  const monthInTabOrder = getMonthInTabOrder(months, minDate, maxDate, getMonthControlProps);
  const rows = months.map((monthsRow, rowIndex) => {
    const cells = monthsRow.map((month, cellIndex) => {
      const controlProps = getMonthControlProps == null ? void 0 : getMonthControlProps(month);
      const isMonthInTabOrder = (0, import_dayjs17.default)(month).isSame(monthInTabOrder, "month");
      return (0, import_jsx_runtime9.jsx)(
        "td",
        {
          ...getStyles("monthsListCell"),
          "data-with-spacing": withCellSpacing || void 0,
          children: (0, import_jsx_runtime9.jsx)(
            PickerControl,
            {
              ...getStyles("monthsListControl"),
              size,
              unstyled,
              __staticSelector: __staticSelector || "MonthsList",
              "data-mantine-stop-propagation": __stopPropagation || void 0,
              disabled: isMonthDisabled(month, minDate, maxDate),
              ref: (node) => __getControlRef == null ? void 0 : __getControlRef(rowIndex, cellIndex, node),
              ...controlProps,
              onKeyDown: (event) => {
                var _a;
                (_a = controlProps == null ? void 0 : controlProps.onKeyDown) == null ? void 0 : _a.call(controlProps, event);
                __onControlKeyDown == null ? void 0 : __onControlKeyDown(event, { rowIndex, cellIndex, date: month });
              },
              onClick: (event) => {
                var _a;
                (_a = controlProps == null ? void 0 : controlProps.onClick) == null ? void 0 : _a.call(controlProps, event);
                __onControlClick == null ? void 0 : __onControlClick(event, month);
              },
              onMouseEnter: (event) => {
                var _a;
                (_a = controlProps == null ? void 0 : controlProps.onMouseEnter) == null ? void 0 : _a.call(controlProps, event);
                __onControlMouseEnter == null ? void 0 : __onControlMouseEnter(event, month);
              },
              onMouseDown: (event) => {
                var _a;
                (_a = controlProps == null ? void 0 : controlProps.onMouseDown) == null ? void 0 : _a.call(controlProps, event);
                __preventFocus && event.preventDefault();
              },
              tabIndex: __preventFocus || !isMonthInTabOrder ? -1 : 0,
              children: (0, import_dayjs17.default)(month).locale(ctx.getLocale(locale)).format(monthsListFormat)
            }
          )
        },
        cellIndex
      );
    });
    return (0, import_jsx_runtime9.jsx)("tr", { ...getStyles("monthsListRow"), children: cells }, rowIndex);
  });
  return (0, import_jsx_runtime9.jsx)(Box, { component: "table", ref, size, ...getStyles("monthsList"), ...others, children: (0, import_jsx_runtime9.jsx)("tbody", { children: rows }) });
});
MonthsList.classes = classes7;
MonthsList.displayName = "@mantine/dates/MonthsList";

// node_modules/@mantine/dates/esm/components/CalendarHeader/CalendarHeader.mjs
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/dates/esm/components/CalendarHeader/CalendarHeader.module.css.mjs
var classes8 = { "calendarHeader": "m_730a79ed", "calendarHeaderLevel": "m_f6645d97", "calendarHeaderControl": "m_2351eeb0", "calendarHeaderControlIcon": "m_367dc749" };

// node_modules/@mantine/dates/esm/components/CalendarHeader/CalendarHeader.mjs
var defaultProps8 = {
  nextDisabled: false,
  previousDisabled: false,
  hasNextLevel: true,
  withNext: true,
  withPrevious: true
};
var varsResolver4 = createVarsResolver((_, { size }) => ({
  calendarHeader: {
    "--dch-control-size": getSize(size, "dch-control-size"),
    "--dch-fz": getFontSize(size)
  }
}));
var CalendarHeader = factory((_props, ref) => {
  const props = useProps("CalendarHeader", defaultProps8, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    label,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    __staticSelector,
    __preventFocus,
    __stopPropagation,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "CalendarHeader",
    classes: classes8,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver4,
    rootSelector: "calendarHeader"
  });
  const preventFocus = __preventFocus ? (event) => event.preventDefault() : void 0;
  return (0, import_jsx_runtime10.jsxs)(Box, { ...getStyles("calendarHeader"), ref, ...others, children: [
    withPrevious && (0, import_jsx_runtime10.jsx)(
      UnstyledButton,
      {
        ...getStyles("calendarHeaderControl"),
        "data-direction": "previous",
        "aria-label": previousLabel,
        onClick: onPrevious,
        unstyled,
        onMouseDown: preventFocus,
        disabled: previousDisabled,
        "data-disabled": previousDisabled || void 0,
        tabIndex: __preventFocus || previousDisabled ? -1 : 0,
        "data-mantine-stop-propagation": __stopPropagation || void 0,
        children: previousIcon || (0, import_jsx_runtime10.jsx)(
          AccordionChevron,
          {
            ...getStyles("calendarHeaderControlIcon"),
            "data-direction": "previous",
            size: "45%"
          }
        )
      }
    ),
    (0, import_jsx_runtime10.jsx)(
      UnstyledButton,
      {
        component: hasNextLevel ? "button" : "div",
        ...getStyles("calendarHeaderLevel"),
        onClick: hasNextLevel ? onLevelClick : void 0,
        unstyled,
        onMouseDown: hasNextLevel ? preventFocus : void 0,
        disabled: !hasNextLevel,
        "data-static": !hasNextLevel || void 0,
        "aria-label": levelControlAriaLabel,
        tabIndex: __preventFocus || !hasNextLevel ? -1 : 0,
        "data-mantine-stop-propagation": __stopPropagation || void 0,
        children: label
      }
    ),
    withNext && (0, import_jsx_runtime10.jsx)(
      UnstyledButton,
      {
        ...getStyles("calendarHeaderControl"),
        "data-direction": "next",
        "aria-label": nextLabel,
        onClick: onNext,
        unstyled,
        onMouseDown: preventFocus,
        disabled: nextDisabled,
        "data-disabled": nextDisabled || void 0,
        tabIndex: __preventFocus || nextDisabled ? -1 : 0,
        "data-mantine-stop-propagation": __stopPropagation || void 0,
        children: nextIcon || (0, import_jsx_runtime10.jsx)(
          AccordionChevron,
          {
            ...getStyles("calendarHeaderControlIcon"),
            "data-direction": "next",
            size: "45%"
          }
        )
      }
    )
  ] });
});
CalendarHeader.classes = classes8;
CalendarHeader.displayName = "@mantine/dates/CalendarHeader";

// node_modules/@mantine/dates/esm/components/DecadeLevel/DecadeLevel.mjs
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var import_dayjs18 = __toESM(require_dayjs_min(), 1);

// node_modules/@mantine/dates/esm/components/DecadeLevel/get-decade-range/get-decade-range.mjs
function getDecadeRange(decade) {
  const years = getYearsData(decade);
  return [years[0][0], years[3][0]];
}

// node_modules/@mantine/dates/esm/components/DecadeLevel/DecadeLevel.mjs
var defaultProps9 = {
  decadeLabelFormat: "YYYY"
};
var DecadeLevel = factory((_props, ref) => {
  const props = useProps("DecadeLevel", defaultProps9, _props);
  const {
    // YearsList settings
    decade,
    locale,
    minDate,
    maxDate,
    yearsListFormat,
    getYearControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
    // CalendarHeader settings
    __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    nextDisabled,
    previousDisabled,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    // Other props
    decadeLabelFormat,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    size,
    ...others
  } = props;
  const ctx = useDatesContext();
  const [startOfDecade, endOfDecade] = getDecadeRange(decade);
  const stylesApiProps = {
    __staticSelector: __staticSelector || "DecadeLevel",
    classNames,
    styles,
    unstyled,
    size
  };
  const _nextDisabled = typeof nextDisabled === "boolean" ? nextDisabled : maxDate ? !(0, import_dayjs18.default)(endOfDecade).endOf("year").isBefore(maxDate) : false;
  const _previousDisabled = typeof previousDisabled === "boolean" ? previousDisabled : minDate ? !(0, import_dayjs18.default)(startOfDecade).startOf("year").isAfter(minDate) : false;
  const formatDecade = (date, format) => (0, import_dayjs18.default)(date).locale(locale || ctx.locale).format(format);
  return (0, import_jsx_runtime11.jsxs)(Box, { "data-decade-level": true, size, ref, ...others, children: [
    (0, import_jsx_runtime11.jsx)(
      CalendarHeader,
      {
        label: typeof decadeLabelFormat === "function" ? decadeLabelFormat(startOfDecade, endOfDecade) : `${formatDecade(startOfDecade, decadeLabelFormat)} – ${formatDecade(
          endOfDecade,
          decadeLabelFormat
        )}`,
        __preventFocus,
        __stopPropagation,
        nextIcon,
        previousIcon,
        nextLabel,
        previousLabel,
        onNext,
        onPrevious,
        nextDisabled: _nextDisabled,
        previousDisabled: _previousDisabled,
        hasNextLevel: false,
        levelControlAriaLabel,
        withNext,
        withPrevious,
        ...stylesApiProps
      }
    ),
    (0, import_jsx_runtime11.jsx)(
      YearsList,
      {
        decade,
        locale,
        minDate,
        maxDate,
        yearsListFormat,
        getYearControlProps,
        __getControlRef,
        __onControlKeyDown,
        __onControlClick,
        __onControlMouseEnter,
        __preventFocus,
        __stopPropagation,
        withCellSpacing,
        ...stylesApiProps
      }
    )
  ] });
});
DecadeLevel.classes = { ...YearsList.classes, ...CalendarHeader.classes };
DecadeLevel.displayName = "@mantine/dates/DecadeLevel";

// node_modules/@mantine/dates/esm/components/YearLevel/YearLevel.mjs
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var import_dayjs19 = __toESM(require_dayjs_min(), 1);
var defaultProps10 = {
  yearLabelFormat: "YYYY"
};
var YearLevel = factory((_props, ref) => {
  const props = useProps("YearLevel", defaultProps10, _props);
  const {
    // MonthsList settings
    year,
    locale,
    minDate,
    maxDate,
    monthsListFormat,
    getMonthControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
    // CalendarHeader settings
    __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    // Other props
    yearLabelFormat,
    __staticSelector,
    __stopPropagation,
    size,
    classNames,
    styles,
    unstyled,
    ...others
  } = props;
  const ctx = useDatesContext();
  const stylesApiProps = {
    __staticSelector: __staticSelector || "YearLevel",
    classNames,
    styles,
    unstyled,
    size
  };
  const _nextDisabled = typeof nextDisabled === "boolean" ? nextDisabled : maxDate ? !(0, import_dayjs19.default)(year).endOf("year").isBefore(maxDate) : false;
  const _previousDisabled = typeof previousDisabled === "boolean" ? previousDisabled : minDate ? !(0, import_dayjs19.default)(year).startOf("year").isAfter(minDate) : false;
  return (0, import_jsx_runtime12.jsxs)(Box, { "data-year-level": true, size, ref, ...others, children: [
    (0, import_jsx_runtime12.jsx)(
      CalendarHeader,
      {
        label: typeof yearLabelFormat === "function" ? yearLabelFormat(year) : (0, import_dayjs19.default)(year).locale(locale || ctx.locale).format(yearLabelFormat),
        __preventFocus,
        __stopPropagation,
        nextIcon,
        previousIcon,
        nextLabel,
        previousLabel,
        onNext,
        onPrevious,
        onLevelClick,
        nextDisabled: _nextDisabled,
        previousDisabled: _previousDisabled,
        hasNextLevel,
        levelControlAriaLabel,
        withNext,
        withPrevious,
        ...stylesApiProps
      }
    ),
    (0, import_jsx_runtime12.jsx)(
      MonthsList,
      {
        year,
        locale,
        minDate,
        maxDate,
        monthsListFormat,
        getMonthControlProps,
        __getControlRef,
        __onControlKeyDown,
        __onControlClick,
        __onControlMouseEnter,
        __preventFocus,
        __stopPropagation,
        withCellSpacing,
        ...stylesApiProps
      }
    )
  ] });
});
YearLevel.classes = { ...CalendarHeader.classes, ...MonthsList.classes };
YearLevel.displayName = "@mantine/dates/YearLevel";

// node_modules/@mantine/dates/esm/components/MonthLevel/MonthLevel.mjs
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var import_dayjs20 = __toESM(require_dayjs_min(), 1);
var defaultProps11 = {
  monthLabelFormat: "MMMM YYYY"
};
var MonthLevel = factory((_props, ref) => {
  const props = useProps("MonthLevel", defaultProps11, _props);
  const {
    // Month settings
    month,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    __getDayRef,
    __onDayKeyDown,
    __onDayClick,
    __onDayMouseEnter,
    withCellSpacing,
    // CalendarHeader settings
    __preventFocus,
    __stopPropagation,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    // Other props
    monthLabelFormat,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    size,
    static: isStatic,
    ...others
  } = props;
  const ctx = useDatesContext();
  const stylesApiProps = {
    __staticSelector: __staticSelector || "MonthLevel",
    classNames,
    styles,
    unstyled,
    size
  };
  const _nextDisabled = typeof nextDisabled === "boolean" ? nextDisabled : maxDate ? !(0, import_dayjs20.default)(month).endOf("month").isBefore(maxDate) : false;
  const _previousDisabled = typeof previousDisabled === "boolean" ? previousDisabled : minDate ? !(0, import_dayjs20.default)(month).startOf("month").isAfter(minDate) : false;
  return (0, import_jsx_runtime13.jsxs)(Box, { "data-month-level": true, size, ref, ...others, children: [
    (0, import_jsx_runtime13.jsx)(
      CalendarHeader,
      {
        label: typeof monthLabelFormat === "function" ? monthLabelFormat(month) : (0, import_dayjs20.default)(month).locale(locale || ctx.locale).format(monthLabelFormat),
        __preventFocus,
        __stopPropagation,
        nextIcon,
        previousIcon,
        nextLabel,
        previousLabel,
        onNext,
        onPrevious,
        onLevelClick,
        nextDisabled: _nextDisabled,
        previousDisabled: _previousDisabled,
        hasNextLevel,
        levelControlAriaLabel,
        withNext,
        withPrevious,
        ...stylesApiProps
      }
    ),
    (0, import_jsx_runtime13.jsx)(
      Month,
      {
        month,
        locale,
        firstDayOfWeek,
        weekdayFormat,
        weekendDays,
        getDayProps,
        excludeDate,
        minDate,
        maxDate,
        renderDay,
        hideOutsideDates,
        hideWeekdays,
        getDayAriaLabel,
        __getDayRef,
        __onDayKeyDown,
        __onDayClick,
        __onDayMouseEnter,
        __preventFocus,
        __stopPropagation,
        static: isStatic,
        withCellSpacing,
        ...stylesApiProps
      }
    )
  ] });
});
MonthLevel.classes = { ...Month.classes, ...CalendarHeader.classes };
MonthLevel.displayName = "@mantine/dates/MonthLevel";

// node_modules/@mantine/dates/esm/components/LevelsGroup/LevelsGroup.mjs
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/dates/esm/components/LevelsGroup/LevelsGroup.module.css.mjs
var classes9 = { "levelsGroup": "m_30b26e33" };

// node_modules/@mantine/dates/esm/components/LevelsGroup/LevelsGroup.mjs
var defaultProps12 = {};
var LevelsGroup = factory((_props, ref) => {
  const props = useProps("LevelsGroup", defaultProps12, _props);
  const { classNames, className, style, styles, unstyled, vars, __staticSelector, ...others } = props;
  const getStyles = useStyles({
    name: __staticSelector || "LevelsGroup",
    classes: classes9,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: "levelsGroup"
  });
  return (0, import_jsx_runtime14.jsx)(Box, { ref, ...getStyles("levelsGroup"), ...others });
});
LevelsGroup.classes = classes9;
LevelsGroup.displayName = "@mantine/dates/LevelsGroup";

// node_modules/@mantine/dates/esm/components/DecadeLevelGroup/DecadeLevelGroup.mjs
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var import_dayjs21 = __toESM(require_dayjs_min(), 1);
var import_react3 = __toESM(require_react(), 1);
var defaultProps13 = {
  numberOfColumns: 1
};
var DecadeLevelGroup = factory((_props, ref) => {
  const props = useProps("DecadeLevelGroup", defaultProps13, _props);
  const {
    // DecadeLevel settings
    decade,
    locale,
    minDate,
    maxDate,
    yearsListFormat,
    getYearControlProps,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
    // CalendarHeader settings
    __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    nextDisabled,
    previousDisabled,
    // Other settings
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    numberOfColumns,
    levelControlAriaLabel,
    decadeLabelFormat,
    size,
    vars,
    ...others
  } = props;
  const controlsRef = (0, import_react3.useRef)([]);
  const decades = Array(numberOfColumns).fill(0).map((_, decadeIndex) => {
    const currentDecade = (0, import_dayjs21.default)(decade).add(decadeIndex * 10, "years").toDate();
    return (0, import_jsx_runtime15.jsx)(
      DecadeLevel,
      {
        size,
        yearsListFormat,
        decade: currentDecade,
        withNext: decadeIndex === numberOfColumns - 1,
        withPrevious: decadeIndex === 0,
        decadeLabelFormat,
        __onControlClick,
        __onControlMouseEnter,
        __onControlKeyDown: (event, payload) => handleControlKeyDown({
          levelIndex: decadeIndex,
          rowIndex: payload.rowIndex,
          cellIndex: payload.cellIndex,
          event,
          controlsRef
        }),
        __getControlRef: (rowIndex, cellIndex, node) => {
          if (!Array.isArray(controlsRef.current[decadeIndex])) {
            controlsRef.current[decadeIndex] = [];
          }
          if (!Array.isArray(controlsRef.current[decadeIndex][rowIndex])) {
            controlsRef.current[decadeIndex][rowIndex] = [];
          }
          controlsRef.current[decadeIndex][rowIndex][cellIndex] = node;
        },
        levelControlAriaLabel: typeof levelControlAriaLabel === "function" ? levelControlAriaLabel(currentDecade) : levelControlAriaLabel,
        locale,
        minDate,
        maxDate,
        __preventFocus,
        __stopPropagation,
        nextIcon,
        previousIcon,
        nextLabel,
        previousLabel,
        onNext,
        onPrevious,
        nextDisabled,
        previousDisabled,
        getYearControlProps,
        __staticSelector: __staticSelector || "DecadeLevelGroup",
        classNames,
        styles,
        unstyled,
        withCellSpacing
      },
      decadeIndex
    );
  });
  return (0, import_jsx_runtime15.jsx)(
    LevelsGroup,
    {
      classNames,
      styles,
      __staticSelector: __staticSelector || "DecadeLevelGroup",
      ref,
      size,
      unstyled,
      ...others,
      children: decades
    }
  );
});
DecadeLevelGroup.classes = { ...LevelsGroup.classes, ...DecadeLevel.classes };
DecadeLevelGroup.displayName = "@mantine/dates/DecadeLevelGroup";

// node_modules/@mantine/dates/esm/components/YearLevelGroup/YearLevelGroup.mjs
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var import_dayjs22 = __toESM(require_dayjs_min(), 1);
var import_react4 = __toESM(require_react(), 1);
var defaultProps14 = {
  numberOfColumns: 1
};
var YearLevelGroup = factory((_props, ref) => {
  const props = useProps("YearLevelGroup", defaultProps14, _props);
  const {
    // YearLevel settings
    year,
    locale,
    minDate,
    maxDate,
    monthsListFormat,
    getMonthControlProps,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
    // CalendarHeader settings
    __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    // Other settings
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    numberOfColumns,
    levelControlAriaLabel,
    yearLabelFormat,
    size,
    vars,
    ...others
  } = props;
  const controlsRef = (0, import_react4.useRef)([]);
  const years = Array(numberOfColumns).fill(0).map((_, yearIndex) => {
    const currentYear = (0, import_dayjs22.default)(year).add(yearIndex, "years").toDate();
    return (0, import_jsx_runtime16.jsx)(
      YearLevel,
      {
        size,
        monthsListFormat,
        year: currentYear,
        withNext: yearIndex === numberOfColumns - 1,
        withPrevious: yearIndex === 0,
        yearLabelFormat,
        __stopPropagation,
        __onControlClick,
        __onControlMouseEnter,
        __onControlKeyDown: (event, payload) => handleControlKeyDown({
          levelIndex: yearIndex,
          rowIndex: payload.rowIndex,
          cellIndex: payload.cellIndex,
          event,
          controlsRef
        }),
        __getControlRef: (rowIndex, cellIndex, node) => {
          if (!Array.isArray(controlsRef.current[yearIndex])) {
            controlsRef.current[yearIndex] = [];
          }
          if (!Array.isArray(controlsRef.current[yearIndex][rowIndex])) {
            controlsRef.current[yearIndex][rowIndex] = [];
          }
          controlsRef.current[yearIndex][rowIndex][cellIndex] = node;
        },
        levelControlAriaLabel: typeof levelControlAriaLabel === "function" ? levelControlAriaLabel(currentYear) : levelControlAriaLabel,
        locale,
        minDate,
        maxDate,
        __preventFocus,
        nextIcon,
        previousIcon,
        nextLabel,
        previousLabel,
        onNext,
        onPrevious,
        onLevelClick,
        nextDisabled,
        previousDisabled,
        hasNextLevel,
        getMonthControlProps,
        classNames,
        styles,
        unstyled,
        __staticSelector: __staticSelector || "YearLevelGroup",
        withCellSpacing
      },
      yearIndex
    );
  });
  return (0, import_jsx_runtime16.jsx)(
    LevelsGroup,
    {
      classNames,
      styles,
      __staticSelector: __staticSelector || "YearLevelGroup",
      ref,
      size,
      unstyled,
      ...others,
      children: years
    }
  );
});
YearLevelGroup.classes = { ...YearLevel.classes, ...LevelsGroup.classes };
YearLevelGroup.displayName = "@mantine/dates/YearLevelGroup";

// node_modules/@mantine/dates/esm/components/MonthLevelGroup/MonthLevelGroup.mjs
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var import_dayjs23 = __toESM(require_dayjs_min(), 1);
var import_react5 = __toESM(require_react(), 1);
var defaultProps15 = {
  numberOfColumns: 1
};
var MonthLevelGroup = factory((_props, ref) => {
  const props = useProps("MonthLevelGroup", defaultProps15, _props);
  const {
    // Month settings
    month,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    __onDayClick,
    __onDayMouseEnter,
    withCellSpacing,
    // CalendarHeader settings
    __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    // Other settings
    classNames,
    styles,
    unstyled,
    numberOfColumns,
    levelControlAriaLabel,
    monthLabelFormat,
    __staticSelector,
    __stopPropagation,
    size,
    static: isStatic,
    vars,
    ...others
  } = props;
  const daysRefs = (0, import_react5.useRef)([]);
  const months = Array(numberOfColumns).fill(0).map((_, monthIndex) => {
    const currentMonth = (0, import_dayjs23.default)(month).add(monthIndex, "months").toDate();
    return (0, import_jsx_runtime17.jsx)(
      MonthLevel,
      {
        month: currentMonth,
        withNext: monthIndex === numberOfColumns - 1,
        withPrevious: monthIndex === 0,
        monthLabelFormat,
        __stopPropagation,
        __onDayClick,
        __onDayMouseEnter,
        __onDayKeyDown: (event, payload) => handleControlKeyDown({
          levelIndex: monthIndex,
          rowIndex: payload.rowIndex,
          cellIndex: payload.cellIndex,
          event,
          controlsRef: daysRefs
        }),
        __getDayRef: (rowIndex, cellIndex, node) => {
          if (!Array.isArray(daysRefs.current[monthIndex])) {
            daysRefs.current[monthIndex] = [];
          }
          if (!Array.isArray(daysRefs.current[monthIndex][rowIndex])) {
            daysRefs.current[monthIndex][rowIndex] = [];
          }
          daysRefs.current[monthIndex][rowIndex][cellIndex] = node;
        },
        levelControlAriaLabel: typeof levelControlAriaLabel === "function" ? levelControlAriaLabel(currentMonth) : levelControlAriaLabel,
        locale,
        firstDayOfWeek,
        weekdayFormat,
        weekendDays,
        getDayProps,
        excludeDate,
        minDate,
        maxDate,
        renderDay,
        hideOutsideDates,
        hideWeekdays,
        getDayAriaLabel,
        __preventFocus,
        nextIcon,
        previousIcon,
        nextLabel,
        previousLabel,
        onNext,
        onPrevious,
        onLevelClick,
        nextDisabled,
        previousDisabled,
        hasNextLevel,
        classNames,
        styles,
        unstyled,
        __staticSelector: __staticSelector || "MonthLevelGroup",
        size,
        static: isStatic,
        withCellSpacing
      },
      monthIndex
    );
  });
  return (0, import_jsx_runtime17.jsx)(
    LevelsGroup,
    {
      classNames,
      styles,
      __staticSelector: __staticSelector || "MonthLevelGroup",
      ref,
      size,
      ...others,
      children: months
    }
  );
});
MonthLevelGroup.classes = { ...LevelsGroup.classes, ...MonthLevel.classes };
MonthLevelGroup.displayName = "@mantine/dates/MonthLevelGroup";

// node_modules/@mantine/dates/esm/components/PickerInputBase/PickerInputBase.mjs
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/dates/esm/components/PickerInputBase/PickerInputBase.module.css.mjs
var classes10 = { "input": "m_6fa5e2aa" };

// node_modules/@mantine/dates/esm/components/PickerInputBase/PickerInputBase.mjs
var defaultProps16 = {};
var PickerInputBase = factory((_props, ref) => {
  const {
    inputProps,
    wrapperProps,
    placeholder,
    classNames,
    styles,
    unstyled,
    popoverProps,
    modalProps,
    dropdownType,
    children,
    formattedValue,
    dropdownHandlers,
    dropdownOpened,
    onClick,
    clearable,
    onClear,
    clearButtonProps,
    rightSection,
    shouldClear,
    readOnly,
    disabled,
    value,
    name,
    form,
    type,
    ...others
  } = useInputProps("PickerInputBase", defaultProps16, _props);
  const _rightSection = rightSection || (clearable && shouldClear && !readOnly && !disabled ? (0, import_jsx_runtime18.jsx)(
    CloseButton,
    {
      variant: "transparent",
      onClick: onClear,
      unstyled,
      size: inputProps.size || "sm",
      ...clearButtonProps
    }
  ) : null);
  const handleClose = () => {
    const isInvalidRangeValue = type === "range" && Array.isArray(value) && value[0] && !value[1];
    if (isInvalidRangeValue) {
      onClear();
    }
    dropdownHandlers.close();
  };
  return (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
    dropdownType === "modal" && !readOnly && (0, import_jsx_runtime18.jsx)(
      Modal,
      {
        opened: dropdownOpened,
        onClose: handleClose,
        withCloseButton: false,
        size: "auto",
        "data-dates-modal": true,
        unstyled,
        ...modalProps,
        children
      }
    ),
    (0, import_jsx_runtime18.jsx)(Input.Wrapper, { ...wrapperProps, children: (0, import_jsx_runtime18.jsxs)(
      Popover,
      {
        position: "bottom-start",
        opened: dropdownOpened,
        trapFocus: true,
        returnFocus: true,
        unstyled,
        ...popoverProps,
        disabled: (popoverProps == null ? void 0 : popoverProps.disabled) || dropdownType === "modal" || readOnly,
        onClose: () => {
          var _a;
          (_a = popoverProps == null ? void 0 : popoverProps.onClose) == null ? void 0 : _a.call(popoverProps);
          handleClose();
        },
        children: [
          (0, import_jsx_runtime18.jsx)(Popover.Target, { children: (0, import_jsx_runtime18.jsx)(
            Input,
            {
              "aria-label": formattedValue || placeholder,
              "data-dates-input": true,
              "data-read-only": readOnly || void 0,
              disabled,
              component: "button",
              type: "button",
              multiline: true,
              onClick: (event) => {
                onClick == null ? void 0 : onClick(event);
                dropdownHandlers.toggle();
              },
              rightSection: _rightSection,
              ...inputProps,
              ref,
              classNames: { ...classNames, input: clsx_default(classes10.input, classNames == null ? void 0 : classNames.input) },
              ...others,
              children: formattedValue || (0, import_jsx_runtime18.jsx)(
                Input.Placeholder,
                {
                  error: inputProps.error,
                  unstyled,
                  className: classNames == null ? void 0 : classNames.placeholder,
                  style: styles == null ? void 0 : styles.placeholder,
                  children: placeholder
                }
              )
            }
          ) }),
          (0, import_jsx_runtime18.jsx)(Popover.Dropdown, { "data-dates-dropdown": true, children })
        ]
      }
    ) }),
    (0, import_jsx_runtime18.jsx)(HiddenDatesInput, { value, name, form, type })
  ] });
});
PickerInputBase.classes = classes10;
PickerInputBase.displayName = "@mantine/dates/PickerInputBase";

// node_modules/@mantine/dates/esm/components/Calendar/Calendar.mjs
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var import_dayjs25 = __toESM(require_dayjs_min(), 1);
var import_react7 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/hooks/use-uncontrolled-dates/use-uncontrolled-dates.mjs
var import_react6 = __toESM(require_react(), 1);
var import_dayjs24 = __toESM(require_dayjs_min(), 1);
var getEmptyValue = (type) => type === "range" ? [null, null] : type === "multiple" ? [] : null;
function useUncontrolledDates({
  type,
  value,
  defaultValue,
  onChange,
  applyTimezone = true
}) {
  const storedType = (0, import_react6.useRef)(type);
  const ctx = useDatesContext();
  const [_value, _setValue, controlled] = useUncontrolled({
    value: shiftTimezone("add", value, ctx.getTimezone(), !applyTimezone),
    defaultValue: shiftTimezone("add", defaultValue, ctx.getTimezone(), !applyTimezone),
    finalValue: getEmptyValue(type),
    onChange: (newDate) => {
      onChange == null ? void 0 : onChange(shiftTimezone("remove", newDate, ctx.getTimezone(), !applyTimezone));
    }
  });
  let _finalValue = _value;
  if (storedType.current !== type) {
    storedType.current = type;
    if (value === void 0) {
      _finalValue = defaultValue !== void 0 ? defaultValue : getEmptyValue(type);
      _setValue(_finalValue);
    } else if (true) {
      switch (type) {
        case "default":
          if (value !== null && typeof value !== "string") {
            console.error(
              "[@mantine/dates/use-uncontrolled-dates] Value must be type of `null` or `string`"
            );
          }
          break;
        case "multiple":
          if (!(value instanceof Array)) {
            console.error(
              "[@mantine/dates/use-uncontrolled-dates] Value must be type of `string[]`"
            );
          }
          break;
        case "range":
          if (!(value instanceof Array) || value.length !== 2) {
            console.error(
              "[@mantine/dates/use-uncontrolled-dates] Value must be type of `[string, string]`"
            );
          }
          break;
      }
    }
  }
  return [_finalValue, _setValue, controlled];
}

// node_modules/@mantine/dates/esm/components/Calendar/clamp-level/clamp-level.mjs
function levelToNumber(level, fallback) {
  if (!level) {
    return fallback || 0;
  }
  return level === "month" ? 0 : level === "year" ? 1 : 2;
}
function levelNumberToLevel(levelNumber) {
  return levelNumber === 0 ? "month" : levelNumber === 1 ? "year" : "decade";
}
function clampLevel(level, minLevel, maxLevel) {
  return levelNumberToLevel(
    clamp(
      levelToNumber(level, 0),
      levelToNumber(minLevel, 0),
      levelToNumber(maxLevel, 2)
    )
  );
}

// node_modules/@mantine/dates/esm/components/Calendar/Calendar.mjs
var defaultProps17 = {
  maxLevel: "decade",
  minLevel: "month",
  __updateDateOnYearSelect: true,
  __updateDateOnMonthSelect: true
};
var Calendar = factory((_props, ref) => {
  const props = useProps("Calendar", defaultProps17, _props);
  const {
    vars,
    // CalendarLevel props
    maxLevel,
    minLevel,
    defaultLevel,
    level,
    onLevelChange,
    date,
    defaultDate,
    onDateChange,
    numberOfColumns,
    columnsToScroll,
    ariaLabels,
    onYearSelect,
    onMonthSelect,
    onYearMouseEnter,
    onMonthMouseEnter,
    __updateDateOnYearSelect,
    __updateDateOnMonthSelect,
    // MonthLevelGroup props
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    monthLabelFormat,
    nextIcon,
    previousIcon,
    __onDayClick,
    __onDayMouseEnter,
    withCellSpacing,
    // YearLevelGroup props
    monthsListFormat,
    getMonthControlProps,
    yearLabelFormat,
    // DecadeLevelGroup props
    yearsListFormat,
    getYearControlProps,
    decadeLabelFormat,
    // Other props
    classNames,
    styles,
    unstyled,
    minDate,
    maxDate,
    locale,
    __staticSelector,
    size,
    __preventFocus,
    __stopPropagation,
    onNextDecade,
    onPreviousDecade,
    onNextYear,
    onPreviousYear,
    onNextMonth,
    onPreviousMonth,
    static: isStatic,
    __timezoneApplied,
    ...others
  } = props;
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const [_level, setLevel] = useUncontrolled({
    value: level ? clampLevel(level, minLevel, maxLevel) : void 0,
    defaultValue: defaultLevel ? clampLevel(defaultLevel, minLevel, maxLevel) : void 0,
    finalValue: clampLevel(void 0, minLevel, maxLevel),
    onChange: onLevelChange
  });
  const [_date, setDate] = useUncontrolledDates({
    type: "default",
    value: date,
    defaultValue: defaultDate,
    onChange: onDateChange,
    applyTimezone: !__timezoneApplied
  });
  const stylesApiProps = {
    __staticSelector: __staticSelector || "Calendar",
    styles: resolvedStyles,
    classNames: resolvedClassNames,
    unstyled,
    size
  };
  const ctx = useDatesContext();
  const _columnsToScroll = columnsToScroll || numberOfColumns || 1;
  const currentDate = _date || shiftTimezone("add", /* @__PURE__ */ new Date(), ctx.getTimezone());
  const handleNextMonth = () => {
    const nextDate = (0, import_dayjs25.default)(currentDate).add(_columnsToScroll, "month").toDate();
    onNextMonth == null ? void 0 : onNextMonth(nextDate);
    setDate(nextDate);
  };
  const handlePreviousMonth = () => {
    const nextDate = (0, import_dayjs25.default)(currentDate).subtract(_columnsToScroll, "month").toDate();
    onPreviousMonth == null ? void 0 : onPreviousMonth(nextDate);
    setDate(nextDate);
  };
  const handleNextYear = () => {
    const nextDate = (0, import_dayjs25.default)(currentDate).add(_columnsToScroll, "year").toDate();
    onNextYear == null ? void 0 : onNextYear(nextDate);
    setDate(nextDate);
  };
  const handlePreviousYear = () => {
    const nextDate = (0, import_dayjs25.default)(currentDate).subtract(_columnsToScroll, "year").toDate();
    onPreviousYear == null ? void 0 : onPreviousYear(nextDate);
    setDate(nextDate);
  };
  const handleNextDecade = () => {
    const nextDate = (0, import_dayjs25.default)(currentDate).add(10 * _columnsToScroll, "year").toDate();
    onNextDecade == null ? void 0 : onNextDecade(nextDate);
    setDate(nextDate);
  };
  const handlePreviousDecade = () => {
    const nextDate = (0, import_dayjs25.default)(currentDate).subtract(10 * _columnsToScroll, "year").toDate();
    onPreviousDecade == null ? void 0 : onPreviousDecade(nextDate);
    setDate(nextDate);
  };
  return (0, import_jsx_runtime19.jsxs)(Box, { ref, size, "data-calendar": true, ...others, children: [
    _level === "month" && (0, import_jsx_runtime19.jsx)(
      MonthLevelGroup,
      {
        month: currentDate,
        minDate,
        maxDate,
        firstDayOfWeek,
        weekdayFormat,
        weekendDays,
        getDayProps,
        excludeDate,
        renderDay,
        hideOutsideDates,
        hideWeekdays,
        getDayAriaLabel,
        onNext: handleNextMonth,
        onPrevious: handlePreviousMonth,
        hasNextLevel: maxLevel !== "month",
        onLevelClick: () => setLevel("year"),
        numberOfColumns,
        locale,
        levelControlAriaLabel: ariaLabels == null ? void 0 : ariaLabels.monthLevelControl,
        nextLabel: ariaLabels == null ? void 0 : ariaLabels.nextMonth,
        nextIcon,
        previousLabel: ariaLabels == null ? void 0 : ariaLabels.previousMonth,
        previousIcon,
        monthLabelFormat,
        __onDayClick,
        __onDayMouseEnter,
        __preventFocus,
        __stopPropagation,
        static: isStatic,
        withCellSpacing,
        ...stylesApiProps
      }
    ),
    _level === "year" && (0, import_jsx_runtime19.jsx)(
      YearLevelGroup,
      {
        year: currentDate,
        numberOfColumns,
        minDate,
        maxDate,
        monthsListFormat,
        getMonthControlProps,
        locale,
        onNext: handleNextYear,
        onPrevious: handlePreviousYear,
        hasNextLevel: maxLevel !== "month" && maxLevel !== "year",
        onLevelClick: () => setLevel("decade"),
        levelControlAriaLabel: ariaLabels == null ? void 0 : ariaLabels.yearLevelControl,
        nextLabel: ariaLabels == null ? void 0 : ariaLabels.nextYear,
        nextIcon,
        previousLabel: ariaLabels == null ? void 0 : ariaLabels.previousYear,
        previousIcon,
        yearLabelFormat,
        __onControlMouseEnter: onMonthMouseEnter,
        __onControlClick: (_event, payload) => {
          __updateDateOnMonthSelect && setDate(payload);
          setLevel(clampLevel("month", minLevel, maxLevel));
          onMonthSelect == null ? void 0 : onMonthSelect(payload);
        },
        __preventFocus,
        __stopPropagation,
        withCellSpacing,
        ...stylesApiProps
      }
    ),
    _level === "decade" && (0, import_jsx_runtime19.jsx)(
      DecadeLevelGroup,
      {
        decade: currentDate,
        minDate,
        maxDate,
        yearsListFormat,
        getYearControlProps,
        locale,
        onNext: handleNextDecade,
        onPrevious: handlePreviousDecade,
        numberOfColumns,
        nextLabel: ariaLabels == null ? void 0 : ariaLabels.nextDecade,
        nextIcon,
        previousLabel: ariaLabels == null ? void 0 : ariaLabels.previousDecade,
        previousIcon,
        decadeLabelFormat,
        __onControlMouseEnter: onYearMouseEnter,
        __onControlClick: (_event, payload) => {
          __updateDateOnYearSelect && setDate(payload);
          setLevel(clampLevel("year", minLevel, maxLevel));
          onYearSelect == null ? void 0 : onYearSelect(payload);
        },
        __preventFocus,
        __stopPropagation,
        withCellSpacing,
        ...stylesApiProps
      }
    )
  ] });
});
Calendar.classes = {
  ...DecadeLevelGroup.classes,
  ...YearLevelGroup.classes,
  ...MonthLevelGroup.classes
};
Calendar.displayName = "@mantine/dates/Calendar";

// node_modules/@mantine/dates/esm/components/Calendar/pick-calendar-levels-props/pick-calendar-levels-props.mjs
function pickCalendarProps(props) {
  const {
    maxLevel,
    minLevel,
    defaultLevel,
    level,
    onLevelChange,
    nextIcon,
    previousIcon,
    date,
    defaultDate,
    onDateChange,
    numberOfColumns,
    columnsToScroll,
    ariaLabels,
    onYearSelect,
    onMonthSelect,
    onYearMouseEnter,
    onMonthMouseEnter,
    onNextMonth,
    onPreviousMonth,
    onNextYear,
    onPreviousYear,
    onNextDecade,
    onPreviousDecade,
    withCellSpacing,
    __updateDateOnYearSelect,
    __updateDateOnMonthSelect,
    // MonthLevelGroup props
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    monthLabelFormat,
    // YearLevelGroup props
    monthsListFormat,
    getMonthControlProps,
    yearLabelFormat,
    // DecadeLevelGroup props
    yearsListFormat,
    getYearControlProps,
    decadeLabelFormat,
    // External picker props
    allowSingleDateInRange,
    allowDeselect,
    // Other props
    minDate,
    maxDate,
    locale,
    ...others
  } = props;
  return {
    calendarProps: {
      maxLevel,
      minLevel,
      defaultLevel,
      level,
      onLevelChange,
      nextIcon,
      previousIcon,
      date,
      defaultDate,
      onDateChange,
      numberOfColumns,
      columnsToScroll,
      ariaLabels,
      onYearSelect,
      onMonthSelect,
      onYearMouseEnter,
      onMonthMouseEnter,
      onNextMonth,
      onPreviousMonth,
      onNextYear,
      onPreviousYear,
      onNextDecade,
      onPreviousDecade,
      withCellSpacing,
      __updateDateOnYearSelect,
      __updateDateOnMonthSelect,
      // MonthLevelGroup props
      firstDayOfWeek,
      weekdayFormat,
      weekendDays,
      getDayProps,
      excludeDate,
      renderDay,
      hideOutsideDates,
      hideWeekdays,
      getDayAriaLabel,
      monthLabelFormat,
      // YearLevelGroup props
      monthsListFormat,
      getMonthControlProps,
      yearLabelFormat,
      // DecadeLevelGroup props
      yearsListFormat,
      getYearControlProps,
      decadeLabelFormat,
      // External picker props
      allowSingleDateInRange,
      allowDeselect,
      // Other props
      minDate,
      maxDate,
      locale
    },
    others
  };
}

// node_modules/@mantine/dates/esm/components/YearPicker/YearPicker.mjs
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);

// node_modules/@mantine/dates/esm/hooks/use-dates-state/use-dates-state.mjs
var import_dayjs27 = __toESM(require_dayjs_min(), 1);
var import_react8 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/hooks/use-dates-state/is-in-range/is-in-range.mjs
var import_dayjs26 = __toESM(require_dayjs_min(), 1);
function isInRange(date, range) {
  const _range = [...range].sort((a, b) => a.getTime() - b.getTime());
  return (0, import_dayjs26.default)(_range[0]).startOf("day").subtract(1, "ms").isBefore(date) && (0, import_dayjs26.default)(_range[1]).endOf("day").add(1, "ms").isAfter(date);
}

// node_modules/@mantine/dates/esm/hooks/use-dates-state/use-dates-state.mjs
function useDatesState({
  type,
  level,
  value,
  defaultValue,
  onChange,
  allowSingleDateInRange,
  allowDeselect,
  onMouseLeave,
  applyTimezone = true
}) {
  const [_value, setValue] = useUncontrolledDates({
    type,
    value,
    defaultValue,
    onChange,
    applyTimezone
  });
  const [pickedDate, setPickedDate] = (0, import_react8.useState)(
    type === "range" ? _value[0] && !_value[1] ? _value[0] : null : null
  );
  const [hoveredDate, setHoveredDate] = (0, import_react8.useState)(null);
  const onDateChange = (date) => {
    if (type === "range") {
      if (pickedDate instanceof Date && !_value[1]) {
        if ((0, import_dayjs27.default)(date).isSame(pickedDate, level) && !allowSingleDateInRange) {
          setPickedDate(null);
          setHoveredDate(null);
          setValue([null, null]);
          return;
        }
        const result = [date, pickedDate];
        result.sort((a, b) => a.getTime() - b.getTime());
        setValue(result);
        setHoveredDate(null);
        setPickedDate(null);
        return;
      }
      if (_value[0] && !_value[1] && (0, import_dayjs27.default)(date).isSame(_value[0], level) && !allowSingleDateInRange) {
        setPickedDate(null);
        setHoveredDate(null);
        setValue([null, null]);
        return;
      }
      setValue([date, null]);
      setHoveredDate(null);
      setPickedDate(date);
      return;
    }
    if (type === "multiple") {
      if (_value.some((selected) => (0, import_dayjs27.default)(selected).isSame(date, level))) {
        setValue(_value.filter((selected) => !(0, import_dayjs27.default)(selected).isSame(date, level)));
      } else {
        setValue([..._value, date]);
      }
      return;
    }
    if (_value && allowDeselect && (0, import_dayjs27.default)(date).isSame(_value, level)) {
      setValue(null);
    } else {
      setValue(date);
    }
  };
  const isDateInRange = (date) => {
    if (pickedDate instanceof Date && hoveredDate instanceof Date) {
      return isInRange(date, [hoveredDate, pickedDate]);
    }
    if (_value[0] instanceof Date && _value[1] instanceof Date) {
      return isInRange(date, _value);
    }
    return false;
  };
  const onRootMouseLeave = type === "range" ? (event) => {
    onMouseLeave == null ? void 0 : onMouseLeave(event);
    setHoveredDate(null);
  } : onMouseLeave;
  const isFirstInRange = (date) => {
    if (!(_value[0] instanceof Date)) {
      return false;
    }
    if ((0, import_dayjs27.default)(date).isSame(_value[0], level)) {
      return !(hoveredDate && (0, import_dayjs27.default)(hoveredDate).isBefore(_value[0]));
    }
    return false;
  };
  const isLastInRange = (date) => {
    if (_value[1] instanceof Date) {
      return (0, import_dayjs27.default)(date).isSame(_value[1], level);
    }
    if (!(_value[0] instanceof Date) || !hoveredDate) {
      return false;
    }
    return (0, import_dayjs27.default)(hoveredDate).isBefore(_value[0]) && (0, import_dayjs27.default)(date).isSame(_value[0], level);
  };
  const getControlProps = (date) => {
    if (type === "range") {
      return {
        selected: _value.some(
          (selection) => selection && (0, import_dayjs27.default)(selection).isSame(date, level)
        ),
        inRange: isDateInRange(date),
        firstInRange: isFirstInRange(date),
        lastInRange: isLastInRange(date),
        "data-autofocus": !!_value[0] && (0, import_dayjs27.default)(_value[0]).isSame(date, level) || void 0
      };
    }
    if (type === "multiple") {
      return {
        selected: _value.some(
          (selection) => selection && (0, import_dayjs27.default)(selection).isSame(date, level)
        ),
        "data-autofocus": !!_value[0] && (0, import_dayjs27.default)(_value[0]).isSame(date, level) || void 0
      };
    }
    const selected = (0, import_dayjs27.default)(_value).isSame(date, level);
    return { selected, "data-autofocus": selected || void 0 };
  };
  const onHoveredDateChange = type === "range" && pickedDate ? setHoveredDate : () => {
  };
  (0, import_react8.useEffect)(() => {
    if (type === "range" && !_value[0] && !_value[1]) {
      setPickedDate(null);
    }
  }, [value]);
  return {
    onDateChange,
    onRootMouseLeave,
    onHoveredDateChange,
    getControlProps,
    _value,
    setValue
  };
}

// node_modules/@mantine/dates/esm/components/YearPicker/YearPicker.mjs
var import_dayjs28 = __toESM(require_dayjs_min(), 1);
var import_react9 = __toESM(require_react(), 1);
var defaultProps18 = {
  type: "default"
};
var YearPicker = factory((_props, ref) => {
  const props = useProps("YearPicker", defaultProps18, _props);
  const {
    classNames,
    styles,
    vars,
    type,
    defaultValue,
    value,
    onChange,
    __staticSelector,
    getYearControlProps,
    allowSingleDateInRange,
    allowDeselect,
    onMouseLeave,
    onYearSelect,
    __updateDateOnYearSelect,
    __timezoneApplied,
    ...others
  } = props;
  const { onDateChange, onRootMouseLeave, onHoveredDateChange, getControlProps } = useDatesState({
    type,
    level: "year",
    allowDeselect,
    allowSingleDateInRange,
    value,
    defaultValue,
    onChange,
    onMouseLeave,
    applyTimezone: !__timezoneApplied
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const ctx = useDatesContext();
  return (0, import_jsx_runtime20.jsx)(
    Calendar,
    {
      ref,
      minLevel: "decade",
      __updateDateOnYearSelect: __updateDateOnYearSelect ?? false,
      __staticSelector: __staticSelector || "YearPicker",
      onMouseLeave: onRootMouseLeave,
      onYearMouseEnter: (_event, date) => onHoveredDateChange(date),
      onYearSelect: (date) => {
        onDateChange(date);
        onYearSelect == null ? void 0 : onYearSelect(date);
      },
      getYearControlProps: (date) => ({
        ...getControlProps(date),
        ...getYearControlProps == null ? void 0 : getYearControlProps(date)
      }),
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      ...others,
      date: shiftTimezone("add", others.date, ctx.getTimezone(), __timezoneApplied),
      __timezoneApplied: true
    }
  );
});
YearPicker.classes = Calendar.classes;
YearPicker.displayName = "@mantine/dates/YearPicker";

// node_modules/@mantine/dates/esm/components/MonthPicker/MonthPicker.mjs
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var import_dayjs29 = __toESM(require_dayjs_min(), 1);
var import_react10 = __toESM(require_react(), 1);
var defaultProps19 = {
  type: "default"
};
var MonthPicker = factory((_props, ref) => {
  const props = useProps("MonthPicker", defaultProps19, _props);
  const {
    classNames,
    styles,
    vars,
    type,
    defaultValue,
    value,
    onChange,
    __staticSelector,
    getMonthControlProps,
    allowSingleDateInRange,
    allowDeselect,
    onMouseLeave,
    onMonthSelect,
    __updateDateOnMonthSelect,
    __timezoneApplied,
    onLevelChange,
    ...others
  } = props;
  const { onDateChange, onRootMouseLeave, onHoveredDateChange, getControlProps } = useDatesState({
    type,
    level: "month",
    allowDeselect,
    allowSingleDateInRange,
    value,
    defaultValue,
    onChange,
    onMouseLeave,
    applyTimezone: !__timezoneApplied
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const ctx = useDatesContext();
  return (0, import_jsx_runtime21.jsx)(
    Calendar,
    {
      ref,
      minLevel: "year",
      __updateDateOnMonthSelect: __updateDateOnMonthSelect ?? false,
      __staticSelector: __staticSelector || "MonthPicker",
      onMouseLeave: onRootMouseLeave,
      onMonthMouseEnter: (_event, date) => onHoveredDateChange(date),
      onMonthSelect: (date) => {
        onDateChange(date);
        onMonthSelect == null ? void 0 : onMonthSelect(date);
      },
      getMonthControlProps: (date) => ({
        ...getControlProps(date),
        ...getMonthControlProps == null ? void 0 : getMonthControlProps(date)
      }),
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      onLevelChange,
      ...others,
      date: shiftTimezone("add", others.date, ctx.getTimezone(), __timezoneApplied)
    }
  );
});
MonthPicker.classes = Calendar.classes;
MonthPicker.displayName = "@mantine/dates/MonthPicker";

// node_modules/@mantine/dates/esm/components/DatePicker/DatePicker.mjs
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var import_dayjs30 = __toESM(require_dayjs_min(), 1);
var import_react11 = __toESM(require_react(), 1);
var defaultProps20 = {
  type: "default",
  defaultLevel: "month",
  numberOfColumns: 1
};
var DatePicker = factory((_props, ref) => {
  const props = useProps("DatePicker", defaultProps20, _props);
  const {
    classNames,
    styles,
    vars,
    type,
    defaultValue,
    value,
    onChange,
    __staticSelector,
    getDayProps,
    allowSingleDateInRange,
    allowDeselect,
    onMouseLeave,
    numberOfColumns,
    hideOutsideDates,
    __onDayMouseEnter,
    __onDayClick,
    __timezoneApplied,
    ...others
  } = props;
  const { onDateChange, onRootMouseLeave, onHoveredDateChange, getControlProps } = useDatesState({
    type,
    level: "day",
    allowDeselect,
    allowSingleDateInRange,
    value,
    defaultValue,
    onChange,
    onMouseLeave,
    applyTimezone: !__timezoneApplied
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const ctx = useDatesContext();
  return (0, import_jsx_runtime22.jsx)(
    Calendar,
    {
      ref,
      minLevel: "month",
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      __staticSelector: __staticSelector || "DatePicker",
      onMouseLeave: onRootMouseLeave,
      numberOfColumns,
      hideOutsideDates: hideOutsideDates ?? numberOfColumns !== 1,
      __onDayMouseEnter: (_event, date) => {
        onHoveredDateChange(date);
        __onDayMouseEnter == null ? void 0 : __onDayMouseEnter(_event, date);
      },
      __onDayClick: (_event, date) => {
        onDateChange(date);
        __onDayClick == null ? void 0 : __onDayClick(_event, date);
      },
      getDayProps: (date) => ({
        ...getControlProps(date),
        ...getDayProps == null ? void 0 : getDayProps(date)
      }),
      ...others,
      date: shiftTimezone("add", others.date, ctx.getTimezone(), __timezoneApplied),
      __timezoneApplied: true
    }
  );
});
DatePicker.classes = Calendar.classes;
DatePicker.displayName = "@mantine/dates/DatePicker";

// node_modules/@mantine/dates/esm/components/DateInput/DateInput.mjs
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var import_dayjs33 = __toESM(require_dayjs_min(), 1);
var import_react12 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/components/DateInput/date-string-parser/date-string-parser.mjs
var import_dayjs31 = __toESM(require_dayjs_min(), 1);
function dateStringParser(dateString, timezone) {
  if (dateString === null) {
    return null;
  }
  const date = shiftTimezone("add", new Date(dateString), timezone);
  if (Number.isNaN(date.getTime()) || !dateString) {
    return null;
  }
  return date;
}

// node_modules/@mantine/dates/esm/components/DateInput/is-date-valid/is-date-valid.mjs
var import_dayjs32 = __toESM(require_dayjs_min(), 1);
function isDateValid({ date, maxDate, minDate }) {
  if (date == null) {
    return false;
  }
  if (Number.isNaN(date.getTime())) {
    return false;
  }
  if (maxDate && (0, import_dayjs32.default)(date).isAfter(maxDate, "date")) {
    return false;
  }
  if (minDate && (0, import_dayjs32.default)(date).isBefore(minDate, "date")) {
    return false;
  }
  return true;
}

// node_modules/@mantine/dates/esm/components/DateInput/DateInput.mjs
var defaultProps21 = {
  valueFormat: "MMMM D, YYYY",
  fixOnBlur: true,
  preserveTime: true
};
var DateInput = factory((_props, ref) => {
  const props = useInputProps("DateInput", defaultProps21, _props);
  const {
    inputProps,
    wrapperProps,
    value,
    defaultValue,
    onChange,
    clearable,
    clearButtonProps,
    popoverProps,
    getDayProps,
    locale,
    valueFormat,
    dateParser,
    minDate,
    maxDate,
    fixOnBlur,
    onFocus,
    onBlur,
    onClick,
    readOnly,
    name,
    form,
    rightSection,
    unstyled,
    classNames,
    styles,
    allowDeselect,
    preserveTime,
    date,
    defaultDate,
    onDateChange,
    ...rest
  } = props;
  const [dropdownOpened, setDropdownOpened] = (0, import_react12.useState)(false);
  const { calendarProps, others } = pickCalendarProps(rest);
  const ctx = useDatesContext();
  const defaultDateParser = (val) => {
    const parsedDate = (0, import_dayjs33.default)(val, valueFormat, ctx.getLocale(locale)).toDate();
    return Number.isNaN(parsedDate.getTime()) ? dateStringParser(val, ctx.getTimezone()) : parsedDate;
  };
  const _dateParser = dateParser || defaultDateParser;
  const _allowDeselect = allowDeselect !== void 0 ? allowDeselect : clearable;
  const formatValue2 = (val) => val ? (0, import_dayjs33.default)(val).locale(ctx.getLocale(locale)).format(valueFormat) : "";
  const [_value, setValue, controlled] = useUncontrolledDates({
    type: "default",
    value,
    defaultValue,
    onChange
  });
  const [_date, setDate] = useUncontrolledDates({
    type: "default",
    value: date,
    defaultValue: defaultValue || defaultDate,
    onChange: onDateChange
  });
  (0, import_react12.useEffect)(() => {
    if (controlled) {
      setDate(value);
    }
  }, [controlled, value]);
  const [inputValue, setInputValue] = (0, import_react12.useState)(formatValue2(_value));
  (0, import_react12.useEffect)(() => {
    setInputValue(formatValue2(_value));
  }, [ctx.getLocale(locale)]);
  const handleInputChange = (event) => {
    const val = event.currentTarget.value;
    setInputValue(val);
    setDropdownOpened(true);
    if (val.trim() === "" && clearable) {
      setValue(null);
    } else {
      const dateValue = _dateParser(val);
      if (isDateValid({ date: dateValue, minDate, maxDate })) {
        setValue(dateValue);
        setDate(dateValue);
      }
    }
  };
  const handleInputBlur = (event) => {
    onBlur == null ? void 0 : onBlur(event);
    setDropdownOpened(false);
    fixOnBlur && setInputValue(formatValue2(_value));
  };
  const handleInputFocus = (event) => {
    onFocus == null ? void 0 : onFocus(event);
    setDropdownOpened(true);
  };
  const handleInputClick = (event) => {
    onClick == null ? void 0 : onClick(event);
    setDropdownOpened(true);
  };
  const _getDayProps = (day) => ({
    ...getDayProps == null ? void 0 : getDayProps(day),
    selected: (0, import_dayjs33.default)(_value).isSame(day, "day"),
    onClick: () => {
      const valueWithTime = preserveTime ? assignTime(_value, day) : day;
      const val = clearable && _allowDeselect ? (0, import_dayjs33.default)(_value).isSame(day, "day") ? null : valueWithTime : valueWithTime;
      setValue(val);
      !controlled && setInputValue(formatValue2(val));
      setDropdownOpened(false);
    }
  });
  const _rightSection = rightSection || (clearable && _value && !readOnly ? (0, import_jsx_runtime23.jsx)(
    CloseButton,
    {
      variant: "transparent",
      onMouseDown: (event) => event.preventDefault(),
      tabIndex: -1,
      onClick: () => {
        setValue(null);
        !controlled && setInputValue("");
        setDropdownOpened(false);
      },
      unstyled,
      size: inputProps.size || "sm",
      ...clearButtonProps
    }
  ) : null);
  useDidUpdate(() => {
    value !== void 0 && !dropdownOpened && setInputValue(formatValue2(value));
  }, [value]);
  return (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [
    (0, import_jsx_runtime23.jsx)(Input.Wrapper, { ...wrapperProps, __staticSelector: "DateInput", children: (0, import_jsx_runtime23.jsxs)(
      Popover,
      {
        opened: dropdownOpened,
        trapFocus: false,
        position: "bottom-start",
        disabled: readOnly,
        withRoles: false,
        unstyled,
        ...popoverProps,
        children: [
          (0, import_jsx_runtime23.jsx)(Popover.Target, { children: (0, import_jsx_runtime23.jsx)(
            Input,
            {
              "data-dates-input": true,
              "data-read-only": readOnly || void 0,
              autoComplete: "off",
              ref,
              value: inputValue,
              onChange: handleInputChange,
              onBlur: handleInputBlur,
              onFocus: handleInputFocus,
              onClick: handleInputClick,
              readOnly,
              rightSection: _rightSection,
              ...inputProps,
              ...others,
              __staticSelector: "DateInput"
            }
          ) }),
          (0, import_jsx_runtime23.jsx)(Popover.Dropdown, { onMouseDown: (event) => event.preventDefault(), "data-dates-dropdown": true, children: (0, import_jsx_runtime23.jsx)(
            Calendar,
            {
              __staticSelector: "DateInput",
              __timezoneApplied: true,
              ...calendarProps,
              classNames,
              styles,
              unstyled,
              __preventFocus: true,
              minDate,
              maxDate,
              locale,
              getDayProps: _getDayProps,
              size: inputProps.size,
              date: _date,
              onDateChange: setDate
            }
          ) })
        ]
      }
    ) }),
    (0, import_jsx_runtime23.jsx)(HiddenDatesInput, { name, form, value: _value, type: "default" })
  ] });
});
DateInput.classes = { ...Input.classes, ...Calendar.classes };
DateInput.displayName = "@mantine/dates/DateInput";

// node_modules/@mantine/dates/esm/components/DateTimePicker/DateTimePicker.mjs
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var import_dayjs34 = __toESM(require_dayjs_min(), 1);
var import_react13 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/components/DateTimePicker/DateTimePicker.module.css.mjs
var classes11 = { "timeWrapper": "m_208d2562", "timeInput": "m_62ee059" };

// node_modules/@mantine/dates/esm/components/DateTimePicker/DateTimePicker.mjs
var defaultProps22 = {
  dropdownType: "popover"
};
var DateTimePicker = factory((_props, ref) => {
  const props = useProps("DateTimePicker", defaultProps22, _props);
  const {
    value,
    defaultValue,
    onChange,
    valueFormat,
    locale,
    classNames,
    styles,
    unstyled,
    timeInputProps,
    submitButtonProps,
    withSeconds,
    level,
    defaultLevel,
    size,
    variant,
    dropdownType,
    vars,
    minDate,
    maxDate,
    ...rest
  } = props;
  const getStyles = useStyles({
    name: "DateTimePicker",
    classes: classes11,
    props,
    classNames,
    styles,
    unstyled,
    vars
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const _valueFormat = valueFormat || (withSeconds ? "DD/MM/YYYY HH:mm:ss" : "DD/MM/YYYY HH:mm");
  const timeInputRef = (0, import_react13.useRef)();
  const timeInputRefMerged = useMergedRef(timeInputRef, timeInputProps == null ? void 0 : timeInputProps.ref);
  const {
    calendarProps: { allowSingleDateInRange, ...calendarProps },
    others
  } = pickCalendarProps(rest);
  const ctx = useDatesContext();
  const [_value, setValue] = useUncontrolledDates({
    type: "default",
    value,
    defaultValue,
    onChange
  });
  const formatTime = (dateValue) => dateValue ? (0, import_dayjs34.default)(dateValue).format(withSeconds ? "HH:mm:ss" : "HH:mm") : "";
  const [timeValue, setTimeValue] = (0, import_react13.useState)(formatTime(_value));
  const [currentLevel, setCurrentLevel] = (0, import_react13.useState)(level || defaultLevel || "month");
  const [dropdownOpened, dropdownHandlers] = useDisclosure(false);
  const formattedValue = _value ? (0, import_dayjs34.default)(_value).locale(ctx.getLocale(locale)).format(_valueFormat) : "";
  const handleTimeChange = (event) => {
    var _a;
    (_a = timeInputProps == null ? void 0 : timeInputProps.onChange) == null ? void 0 : _a.call(timeInputProps, event);
    const val = event.currentTarget.value;
    setTimeValue(val);
    if (val) {
      const [hours, minutes, seconds] = val.split(":").map(Number);
      const timeDate = shiftTimezone("add", /* @__PURE__ */ new Date(), ctx.getTimezone());
      timeDate.setHours(hours);
      timeDate.setMinutes(minutes);
      timeDate.setSeconds(seconds || 0);
      setValue(assignTime(timeDate, _value || shiftTimezone("add", /* @__PURE__ */ new Date(), ctx.getTimezone())));
    }
  };
  const handleDateChange = (date) => {
    var _a;
    if (date) {
      setValue(assignTime(_value, date));
    }
    (_a = timeInputRef.current) == null ? void 0 : _a.focus();
  };
  const handleTimeInputKeyDown = (event) => {
    var _a;
    (_a = timeInputProps == null ? void 0 : timeInputProps.onKeyDown) == null ? void 0 : _a.call(timeInputProps, event);
    if (event.key === "Enter") {
      event.preventDefault();
      dropdownHandlers.close();
    }
  };
  useDidUpdate(() => {
    if (!dropdownOpened) {
      setTimeValue(formatTime(_value));
    }
  }, [_value, dropdownOpened]);
  useDidUpdate(() => {
    if (dropdownOpened) {
      setCurrentLevel("month");
    }
  }, [dropdownOpened]);
  const minTime = minDate ? (0, import_dayjs34.default)(minDate).format("HH:mm:ss") : null;
  const maxTime = maxDate ? (0, import_dayjs34.default)(maxDate).format("HH:mm:ss") : null;
  const __stopPropagation = dropdownType === "popover";
  return (0, import_jsx_runtime24.jsxs)(
    PickerInputBase,
    {
      formattedValue,
      dropdownOpened,
      dropdownHandlers,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      unstyled,
      ref,
      onClear: () => setValue(null),
      shouldClear: !!_value,
      value: _value,
      size,
      variant,
      dropdownType,
      ...others,
      type: "default",
      __staticSelector: "DateTimePicker",
      children: [
        (0, import_jsx_runtime24.jsx)(
          DatePicker,
          {
            ...calendarProps,
            maxDate,
            minDate,
            size,
            variant,
            type: "default",
            value: _value,
            defaultDate: _value,
            onChange: handleDateChange,
            locale,
            classNames: resolvedClassNames,
            styles: resolvedStyles,
            unstyled,
            __staticSelector: "DateTimePicker",
            __stopPropagation,
            level,
            defaultLevel,
            onLevelChange: (_level) => {
              var _a;
              setCurrentLevel(_level);
              (_a = calendarProps.onLevelChange) == null ? void 0 : _a.call(calendarProps, _level);
            },
            __timezoneApplied: true
          }
        ),
        currentLevel === "month" && (0, import_jsx_runtime24.jsxs)("div", { ...getStyles("timeWrapper"), children: [
          (0, import_jsx_runtime24.jsx)(
            TimeInput,
            {
              value: timeValue,
              withSeconds,
              ref: timeInputRefMerged,
              unstyled,
              minTime: _value && minDate && _value.toDateString() === minDate.toDateString() ? minTime != null ? minTime : void 0 : void 0,
              maxTime: _value && maxDate && _value.toDateString() === maxDate.toDateString() ? maxTime != null ? maxTime : void 0 : void 0,
              ...timeInputProps,
              ...getStyles("timeInput", {
                className: timeInputProps == null ? void 0 : timeInputProps.className,
                style: timeInputProps == null ? void 0 : timeInputProps.style
              }),
              onChange: handleTimeChange,
              onKeyDown: handleTimeInputKeyDown,
              size,
              "data-mantine-stop-propagation": __stopPropagation || void 0
            }
          ),
          (0, import_jsx_runtime24.jsx)(
            ActionIcon,
            {
              variant: "default",
              size: `input-${size || "sm"}`,
              ...getStyles("submitButton", {
                className: submitButtonProps == null ? void 0 : submitButtonProps.className,
                style: submitButtonProps == null ? void 0 : submitButtonProps.style
              }),
              unstyled,
              "data-mantine-stop-propagation": __stopPropagation || void 0,
              children: (0, import_jsx_runtime24.jsx)(CheckIcon, { size: "30%" }),
              ...submitButtonProps,
              onClick: (event) => {
                var _a;
                (_a = submitButtonProps == null ? void 0 : submitButtonProps.onClick) == null ? void 0 : _a.call(submitButtonProps, event);
                dropdownHandlers.close();
              }
            }
          )
        ] })
      ]
    }
  );
});
DateTimePicker.classes = { ...classes11, ...PickerInputBase.classes, ...DatePicker.classes };
DateTimePicker.displayName = "@mantine/dates/DateTimePicker";

// node_modules/@mantine/dates/esm/components/YearPickerInput/YearPickerInput.mjs
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
var import_dayjs36 = __toESM(require_dayjs_min(), 1);
var import_react14 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/hooks/use-dates-input/use-dates-input.mjs
var import_dayjs35 = __toESM(require_dayjs_min(), 1);
function useDatesInput({
  type,
  value,
  defaultValue,
  onChange,
  locale,
  format,
  closeOnChange,
  sortDates,
  labelSeparator,
  valueFormatter
}) {
  const ctx = useDatesContext();
  const [dropdownOpened, dropdownHandlers] = useDisclosure(false);
  const [_value, _setValue] = useUncontrolledDates({
    type,
    value,
    defaultValue,
    onChange
  });
  const formattedValue = getFormattedDate({
    type,
    date: _value,
    locale: ctx.getLocale(locale),
    format,
    labelSeparator: ctx.getLabelSeparator(labelSeparator),
    formatter: valueFormatter
  });
  const setValue = (val) => {
    if (closeOnChange) {
      if (type === "default") {
        dropdownHandlers.close();
      }
      if (type === "range" && val[0] && val[1]) {
        dropdownHandlers.close();
      }
    }
    if (sortDates && type === "multiple") {
      _setValue([...val].sort((a, b) => a.getTime() - b.getTime()));
    } else {
      _setValue(val);
    }
  };
  const onClear = () => setValue(type === "range" ? [null, null] : type === "multiple" ? [] : null);
  const shouldClear = type === "range" ? !!_value[0] : type === "multiple" ? _value.length > 0 : _value !== null;
  return {
    _value,
    setValue,
    onClear,
    shouldClear,
    formattedValue,
    dropdownOpened,
    dropdownHandlers
  };
}

// node_modules/@mantine/dates/esm/components/YearPickerInput/YearPickerInput.mjs
var defaultProps23 = {
  type: "default",
  valueFormat: "YYYY",
  closeOnChange: true,
  sortDates: true,
  dropdownType: "popover"
};
var YearPickerInput = factory(
  (_props, ref) => {
    const props = useProps("YearPickerInput", defaultProps23, _props);
    const {
      type,
      value,
      defaultValue,
      onChange,
      valueFormat,
      labelSeparator,
      locale,
      classNames,
      styles,
      unstyled,
      closeOnChange,
      size,
      variant,
      dropdownType,
      sortDates,
      minDate,
      maxDate,
      vars,
      valueFormatter,
      ...rest
    } = props;
    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
      classNames,
      styles,
      props
    });
    const { calendarProps, others } = pickCalendarProps(rest);
    const ctx = useDatesContext();
    const {
      _value,
      setValue,
      formattedValue,
      dropdownHandlers,
      dropdownOpened,
      onClear,
      shouldClear
    } = useDatesInput({
      type,
      value,
      defaultValue,
      onChange,
      locale,
      format: valueFormat,
      labelSeparator,
      closeOnChange,
      sortDates,
      valueFormatter
    });
    return (0, import_jsx_runtime25.jsx)(
      PickerInputBase,
      {
        formattedValue,
        dropdownOpened,
        dropdownHandlers,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        ref,
        onClear,
        shouldClear,
        value: _value,
        size,
        variant,
        dropdownType,
        ...others,
        type,
        __staticSelector: "YearPickerInput",
        children: (0, import_jsx_runtime25.jsx)(
          YearPicker,
          {
            ...calendarProps,
            size,
            variant,
            type,
            value: _value,
            defaultDate: Array.isArray(_value) ? _value[0] || getDefaultClampedDate({ maxDate, minDate, timezone: ctx.getTimezone() }) : _value || getDefaultClampedDate({ maxDate, minDate, timezone: ctx.getTimezone() }),
            onChange: setValue,
            locale,
            classNames: resolvedClassNames,
            styles: resolvedStyles,
            unstyled,
            __staticSelector: "YearPickerInput",
            __stopPropagation: dropdownType === "popover",
            minDate,
            maxDate,
            date: shiftTimezone("add", calendarProps.date, ctx.getTimezone()),
            __timezoneApplied: true
          }
        )
      }
    );
  }
);
YearPickerInput.classes = { ...PickerInputBase.classes, ...YearPicker.classes };
YearPickerInput.displayName = "@mantine/dates/YearPickerInput";

// node_modules/@mantine/dates/esm/components/MonthPickerInput/MonthPickerInput.mjs
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
var import_dayjs37 = __toESM(require_dayjs_min(), 1);
var import_react15 = __toESM(require_react(), 1);
var defaultProps24 = {
  type: "default",
  valueFormat: "MMMM YYYY",
  closeOnChange: true,
  sortDates: true,
  dropdownType: "popover"
};
var MonthPickerInput = factory(
  (_props, ref) => {
    const props = useProps("MonthPickerInput", defaultProps24, _props);
    const {
      type,
      value,
      defaultValue,
      onChange,
      valueFormat,
      labelSeparator,
      locale,
      classNames,
      styles,
      unstyled,
      closeOnChange,
      size,
      variant,
      dropdownType,
      sortDates,
      minDate,
      maxDate,
      vars,
      valueFormatter,
      ...rest
    } = props;
    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
      classNames,
      styles,
      props
    });
    const { calendarProps, others } = pickCalendarProps(rest);
    const {
      _value,
      setValue,
      formattedValue,
      dropdownHandlers,
      dropdownOpened,
      onClear,
      shouldClear
    } = useDatesInput({
      type,
      value,
      defaultValue,
      onChange,
      locale,
      format: valueFormat,
      labelSeparator,
      closeOnChange,
      sortDates,
      valueFormatter
    });
    const ctx = useDatesContext();
    return (0, import_jsx_runtime26.jsx)(
      PickerInputBase,
      {
        formattedValue,
        dropdownOpened,
        dropdownHandlers,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        ref,
        onClear,
        shouldClear,
        value: _value,
        size,
        variant,
        dropdownType,
        ...others,
        type,
        __staticSelector: "MonthPickerInput",
        children: (0, import_jsx_runtime26.jsx)(
          MonthPicker,
          {
            ...calendarProps,
            date: shiftTimezone("add", calendarProps.date, ctx.getTimezone()),
            size,
            variant,
            type,
            value: _value,
            defaultDate: Array.isArray(_value) ? _value[0] || getDefaultClampedDate({ maxDate, minDate }) : _value || getDefaultClampedDate({ maxDate, minDate }),
            onChange: setValue,
            locale,
            classNames: resolvedClassNames,
            styles: resolvedStyles,
            unstyled,
            __staticSelector: "MonthPickerInput",
            __stopPropagation: dropdownType === "popover",
            minDate,
            maxDate,
            __timezoneApplied: true
          }
        )
      }
    );
  }
);
MonthPickerInput.classes = { ...PickerInputBase.classes, ...MonthPicker.classes };
MonthPickerInput.displayName = "@mantine/dates/MonthPickerInput";

// node_modules/@mantine/dates/esm/components/DatePickerInput/DatePickerInput.mjs
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var import_dayjs38 = __toESM(require_dayjs_min(), 1);
var import_react16 = __toESM(require_react(), 1);
var defaultProps25 = {
  type: "default",
  valueFormat: "MMMM D, YYYY",
  closeOnChange: true,
  sortDates: true,
  dropdownType: "popover"
};
var DatePickerInput = factory(
  (_props, ref) => {
    const props = useProps("DatePickerInput", defaultProps25, _props);
    const {
      type,
      value,
      defaultValue,
      onChange,
      valueFormat,
      labelSeparator,
      locale,
      classNames,
      styles,
      unstyled,
      closeOnChange,
      size,
      variant,
      dropdownType,
      sortDates,
      minDate,
      maxDate,
      vars,
      defaultDate,
      valueFormatter,
      ...rest
    } = props;
    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
      classNames,
      styles,
      props
    });
    const { calendarProps, others } = pickCalendarProps(rest);
    const {
      _value,
      setValue,
      formattedValue,
      dropdownHandlers,
      dropdownOpened,
      onClear,
      shouldClear
    } = useDatesInput({
      type,
      value,
      defaultValue,
      onChange,
      locale,
      format: valueFormat,
      labelSeparator,
      closeOnChange,
      sortDates,
      valueFormatter
    });
    const _defaultDate = Array.isArray(_value) ? _value[0] || defaultDate : _value || defaultDate;
    const ctx = useDatesContext();
    return (0, import_jsx_runtime27.jsx)(
      PickerInputBase,
      {
        formattedValue,
        dropdownOpened,
        dropdownHandlers,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        ref,
        onClear,
        shouldClear,
        value: _value,
        size,
        variant,
        dropdownType,
        ...others,
        type,
        __staticSelector: "DatePickerInput",
        children: (0, import_jsx_runtime27.jsx)(
          DatePicker,
          {
            ...calendarProps,
            size,
            variant,
            type,
            value: _value,
            defaultDate: _defaultDate || getDefaultClampedDate({ maxDate, minDate, timezone: ctx.getTimezone() }),
            onChange: setValue,
            locale,
            classNames: resolvedClassNames,
            styles: resolvedStyles,
            unstyled,
            __staticSelector: "DatePickerInput",
            __stopPropagation: dropdownType === "popover",
            minDate,
            maxDate,
            date: shiftTimezone("add", calendarProps.date, ctx.getTimezone()),
            __timezoneApplied: true
          }
        )
      }
    );
  }
);
DatePickerInput.classes = { ...PickerInputBase.classes, ...DatePicker.classes };
DatePickerInput.displayName = "@mantine/dates/DatePickerInput";

// node_modules/mantine-react-table/dist/index.esm.mjs
var getColumnId = (columnDef) => {
  var _a, _b, _c, _d;
  return (_d = (_a = columnDef.id) !== null && _a !== void 0 ? _a : (_c = (_b = columnDef.accessorKey) === null || _b === void 0 ? void 0 : _b.toString) === null || _c === void 0 ? void 0 : _c.call(_b)) !== null && _d !== void 0 ? _d : columnDef.header;
};
var getAllLeafColumnDefs = (columns) => {
  const allLeafColumnDefs = [];
  const getLeafColumns = (cols) => {
    cols.forEach((col) => {
      if (col.columns) {
        getLeafColumns(col.columns);
      } else {
        allLeafColumnDefs.push(col);
      }
    });
  };
  getLeafColumns(columns);
  return allLeafColumnDefs;
};
var prepareColumns = ({ columnDefs, tableOptions }) => {
  const { aggregationFns: aggregationFns2 = {}, defaultDisplayColumn, filterFns: filterFns2 = {}, sortingFns: sortingFns2 = {}, state: { columnFilterFns = {} } = {} } = tableOptions;
  return columnDefs.map((columnDef) => {
    var _a, _b;
    if (!columnDef.id)
      columnDef.id = getColumnId(columnDef);
    if (!columnDef.columnDefType)
      columnDef.columnDefType = "data";
    if ((_a = columnDef.columns) === null || _a === void 0 ? void 0 : _a.length) {
      columnDef.columnDefType = "group";
      columnDef.columns = prepareColumns({
        columnDefs: columnDef.columns,
        tableOptions
      });
    } else if (columnDef.columnDefType === "data") {
      if (Array.isArray(columnDef.aggregationFn)) {
        const aggFns = columnDef.aggregationFn;
        columnDef.aggregationFn = (columnId, leafRows, childRows) => aggFns.map((fn) => {
          var _a2;
          return (_a2 = aggregationFns2[fn]) === null || _a2 === void 0 ? void 0 : _a2.call(aggregationFns2, columnId, leafRows, childRows);
        });
      }
      if (Object.keys(filterFns2).includes(columnFilterFns[columnDef.id])) {
        columnDef.filterFn = (_b = filterFns2[columnFilterFns[columnDef.id]]) !== null && _b !== void 0 ? _b : filterFns2.fuzzy;
        columnDef._filterFn = columnFilterFns[columnDef.id];
      }
      if (Object.keys(sortingFns2).includes(columnDef.sortingFn)) {
        columnDef.sortingFn = sortingFns2[columnDef.sortingFn];
      }
    } else if (columnDef.columnDefType === "display") {
      columnDef = Object.assign(Object.assign({}, defaultDisplayColumn), columnDef);
    }
    return columnDef;
  });
};
var reorderColumn = (draggedColumn, targetColumn, columnOrder) => {
  if (draggedColumn.getCanPin()) {
    draggedColumn.pin(targetColumn.getIsPinned());
  }
  const newColumnOrder = [...columnOrder];
  newColumnOrder.splice(newColumnOrder.indexOf(targetColumn.id), 0, newColumnOrder.splice(newColumnOrder.indexOf(draggedColumn.id), 1)[0]);
  return newColumnOrder;
};
var getDefaultColumnFilterFn = (columnDef) => {
  const { filterVariant } = columnDef;
  if (filterVariant === "multi-select")
    return "arrIncludesSome";
  if (filterVariant === null || filterVariant === void 0 ? void 0 : filterVariant.includes("range"))
    return "betweenInclusive";
  if (["checkbox", "date", "select"].includes(filterVariant || ""))
    return "equals";
  return "fuzzy";
};
var flexRender2 = flexRender;
function createMRTColumnHelper() {
  return {
    accessor: (accessor, column) => {
      return typeof accessor === "function" ? Object.assign(Object.assign({}, column), { accessorFn: accessor }) : Object.assign(Object.assign({}, column), { accessorKey: accessor });
    },
    display: (column) => column,
    group: (column) => column
  };
}
var createRow2 = (table, originalRow, rowIndex = -1, depth = 0, subRows, parentId) => createRow(table, "mrt-row-create", originalRow !== null && originalRow !== void 0 ? originalRow : Object.assign({}, ...getAllLeafColumnDefs(table.options.columns).map((col) => ({
  [getColumnId(col)]: ""
}))), rowIndex, depth, subRows, parentId);
function defaultDisplayColumnProps({ header, id, size, tableOptions }) {
  const { defaultDisplayColumn, displayColumnDefOptions, localization } = tableOptions;
  return Object.assign(Object.assign(Object.assign(Object.assign({}, defaultDisplayColumn), { header: header ? localization[header] : "", size }), displayColumnDefOptions === null || displayColumnDefOptions === void 0 ? void 0 : displayColumnDefOptions[id]), { id });
}
var showRowPinningColumn = (tableOptions) => {
  const { enableRowPinning, rowPinningDisplayMode } = tableOptions;
  return !!(enableRowPinning && !(rowPinningDisplayMode === null || rowPinningDisplayMode === void 0 ? void 0 : rowPinningDisplayMode.startsWith("select")));
};
var showRowDragColumn = (tableOptions) => {
  const { enableRowDragging, enableRowOrdering } = tableOptions;
  return !!(enableRowDragging || enableRowOrdering);
};
var showRowExpandColumn = (tableOptions) => {
  const { enableExpanding, enableGrouping, renderDetailPanel, state: { grouping } } = tableOptions;
  return !!(enableExpanding || enableGrouping && (grouping === null || grouping === void 0 ? void 0 : grouping.length) || renderDetailPanel);
};
var showRowActionsColumn = (tableOptions) => {
  const { createDisplayMode, editDisplayMode, enableEditing, enableRowActions, state: { creatingRow } } = tableOptions;
  return !!(enableRowActions || creatingRow && createDisplayMode === "row" || enableEditing && ["modal", "row"].includes(editDisplayMode !== null && editDisplayMode !== void 0 ? editDisplayMode : ""));
};
var showRowSelectionColumn = (tableOptions) => !!tableOptions.enableRowSelection;
var showRowNumbersColumn = (tableOptions) => !!tableOptions.enableRowNumbers;
var showRowSpacerColumn = (tableOptions) => tableOptions.layoutMode === "grid-no-grow";
var getLeadingDisplayColumnIds = (tableOptions) => [
  showRowPinningColumn(tableOptions) && "mrt-row-pin",
  showRowDragColumn(tableOptions) && "mrt-row-drag",
  tableOptions.positionActionsColumn === "first" && showRowActionsColumn(tableOptions) && "mrt-row-actions",
  tableOptions.positionExpandColumn === "first" && showRowExpandColumn(tableOptions) && "mrt-row-expand",
  showRowSelectionColumn(tableOptions) && "mrt-row-select",
  showRowNumbersColumn(tableOptions) && "mrt-row-numbers"
].filter(Boolean);
var getTrailingDisplayColumnIds = (tableOptions) => [
  tableOptions.positionActionsColumn === "last" && showRowActionsColumn(tableOptions) && "mrt-row-actions",
  tableOptions.positionExpandColumn === "last" && showRowExpandColumn(tableOptions) && "mrt-row-expand",
  showRowSpacerColumn(tableOptions) && "mrt-row-spacer"
].filter(Boolean);
var getDefaultColumnOrderIds = (tableOptions, reset = false) => {
  const { state: { columnOrder: currentColumnOrderIds = [] } } = tableOptions;
  const leadingDisplayColIds = getLeadingDisplayColumnIds(tableOptions);
  const trailingDisplayColIds = getTrailingDisplayColumnIds(tableOptions);
  const defaultColumnDefIds = getAllLeafColumnDefs(tableOptions.columns).map((columnDef) => getColumnId(columnDef));
  let allLeafColumnDefIds = reset ? defaultColumnDefIds : Array.from(/* @__PURE__ */ new Set([...currentColumnOrderIds, ...defaultColumnDefIds]));
  allLeafColumnDefIds = allLeafColumnDefIds.filter((colId) => !leadingDisplayColIds.includes(colId) && !trailingDisplayColIds.includes(colId));
  return [
    ...leadingDisplayColIds,
    ...allLeafColumnDefIds,
    ...trailingDisplayColIds
  ];
};
var fuzzy$1 = (rowA, rowB, columnId) => {
  let dir = 0;
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(rowA.columnFiltersMeta[columnId], rowB.columnFiltersMeta[columnId]);
  }
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};
var MRT_SortingFns = Object.assign(Object.assign({}, sortingFns), { fuzzy: fuzzy$1 });
var rankGlobalFuzzy = (rowA, rowB) => Math.max(...Object.values(rowB.columnFiltersMeta).map((v) => v.rank)) - Math.max(...Object.values(rowA.columnFiltersMeta).map((v) => v.rank));
var parseFromValuesOrFunc = (fn, arg) => fn instanceof Function ? fn(arg) : fn;
var getMRT_Rows = (table, all) => {
  const { getCenterRows, getPrePaginationRowModel, getRowModel, getState, getTopRows, options: { createDisplayMode, enablePagination, enableRowPinning, manualPagination, positionCreatingRow, rowPinningDisplayMode } } = table;
  const { creatingRow, pagination } = getState();
  const isRankingRows = getIsRankingRows(table);
  let rows = [];
  if (!isRankingRows) {
    rows = !enableRowPinning || (rowPinningDisplayMode === null || rowPinningDisplayMode === void 0 ? void 0 : rowPinningDisplayMode.includes("sticky")) ? all ? getPrePaginationRowModel().rows : getRowModel().rows : getCenterRows();
  } else {
    rows = getPrePaginationRowModel().rows.sort((a, b) => rankGlobalFuzzy(a, b));
    if (enablePagination && !manualPagination && !all) {
      const start = pagination.pageIndex * pagination.pageSize;
      rows = rows.slice(start, start + pagination.pageSize);
    }
    if (enableRowPinning && !(rowPinningDisplayMode === null || rowPinningDisplayMode === void 0 ? void 0 : rowPinningDisplayMode.includes("sticky"))) {
      rows = rows.filter((row) => !row.getIsPinned());
    }
  }
  if (enableRowPinning && (rowPinningDisplayMode === null || rowPinningDisplayMode === void 0 ? void 0 : rowPinningDisplayMode.includes("sticky"))) {
    const centerPinnedRowIds = rows.filter((row) => row.getIsPinned()).map((r) => r.id);
    rows = [
      ...getTopRows().filter((row) => !centerPinnedRowIds.includes(row.id)),
      ...rows
    ];
  }
  if (positionCreatingRow !== void 0 && creatingRow && createDisplayMode === "row") {
    const creatingRowIndex = !isNaN(+positionCreatingRow) ? +positionCreatingRow : positionCreatingRow === "top" ? 0 : rows.length;
    rows = [
      ...rows.slice(0, creatingRowIndex),
      creatingRow,
      ...rows.slice(creatingRowIndex)
    ];
  }
  return rows;
};
var getCanRankRows = (table) => {
  const { getState, options: { enableGlobalFilterRankedResults, manualExpanding, manualFiltering, manualGrouping, manualSorting } } = table;
  const { expanded, globalFilterFn } = getState();
  return !manualExpanding && !manualFiltering && !manualGrouping && !manualSorting && enableGlobalFilterRankedResults && globalFilterFn === "fuzzy" && expanded !== true && !Object.values(expanded).some(Boolean);
};
var getIsRankingRows = (table) => {
  const { globalFilter, sorting } = table.getState();
  return getCanRankRows(table) && globalFilter && !Object.values(sorting).some(Boolean);
};
var getIsRowSelected = ({ row, table }) => {
  const { options: { enableRowSelection } } = table;
  return row.getIsSelected() || parseFromValuesOrFunc(enableRowSelection, row) && row.getCanSelectSubRows() && row.getIsAllSubRowsSelected();
};
var getMRT_RowSelectionHandler = ({ renderedRowIndex = 0, row, table }) => (event, value) => {
  var _a;
  const { getState, options: { enableBatchRowSelection, enableMultiRowSelection, enableRowPinning, manualPagination, rowPinningDisplayMode }, refs: { lastSelectedRowId } } = table;
  const { pagination: { pageIndex, pageSize } } = getState();
  const paginationOffset = manualPagination ? 0 : pageSize * pageIndex;
  const wasCurrentRowChecked = getIsRowSelected({ row, table });
  row.toggleSelected(value !== null && value !== void 0 ? value : !wasCurrentRowChecked);
  const changedRowIds = /* @__PURE__ */ new Set([row.id]);
  if (enableBatchRowSelection && enableMultiRowSelection && event.nativeEvent.shiftKey && lastSelectedRowId.current !== null) {
    const rows = getMRT_Rows(table, true);
    const lastIndex = rows.findIndex((r) => r.id === lastSelectedRowId.current);
    if (lastIndex !== -1) {
      const isLastIndexChecked = getIsRowSelected({
        row: rows === null || rows === void 0 ? void 0 : rows[lastIndex],
        table
      });
      const currentIndex = renderedRowIndex + paginationOffset;
      const [start, end] = lastIndex < currentIndex ? [lastIndex, currentIndex] : [currentIndex, lastIndex];
      if (wasCurrentRowChecked !== isLastIndexChecked) {
        for (let i = start; i <= end; i++) {
          rows[i].toggleSelected(!wasCurrentRowChecked);
          changedRowIds.add(rows[i].id);
        }
      }
    }
  }
  lastSelectedRowId.current = row.id;
  if (row.getCanSelectSubRows() && row.getIsAllSubRowsSelected()) {
    (_a = row.subRows) === null || _a === void 0 ? void 0 : _a.forEach((r) => r.toggleSelected(false));
  }
  if (enableRowPinning && (rowPinningDisplayMode === null || rowPinningDisplayMode === void 0 ? void 0 : rowPinningDisplayMode.includes("select"))) {
    changedRowIds.forEach((rowId) => {
      const rowToTogglePin = table.getRow(rowId);
      rowToTogglePin.pin(!wasCurrentRowChecked ? (rowPinningDisplayMode === null || rowPinningDisplayMode === void 0 ? void 0 : rowPinningDisplayMode.includes("bottom")) ? "bottom" : "top" : false);
    });
  }
};
var getMRT_SelectAllHandler = ({ table }) => (event, value, forceAll) => {
  const { options: { enableRowPinning, rowPinningDisplayMode, selectAllMode }, refs: { lastSelectedRowId } } = table;
  selectAllMode === "all" || forceAll ? table.toggleAllRowsSelected(value !== null && value !== void 0 ? value : event.target.checked) : table.toggleAllPageRowsSelected(value !== null && value !== void 0 ? value : event.target.checked);
  if (enableRowPinning && (rowPinningDisplayMode === null || rowPinningDisplayMode === void 0 ? void 0 : rowPinningDisplayMode.includes("select"))) {
    table.setRowPinning({ bottom: [], top: [] });
  }
  lastSelectedRowId.current = null;
};
var parseCSSVarId = (id) => id.replace(/[^a-zA-Z0-9]/g, "_");
var getPrimaryShade = (theme) => {
  var _a, _b;
  return typeof theme.primaryShade === "number" ? theme.primaryShade : (_b = (_a = theme.primaryShade) === null || _a === void 0 ? void 0 : _a.dark) !== null && _b !== void 0 ? _b : 7;
};
var getPrimaryColor = (theme, shade) => theme.colors[theme.primaryColor][shade !== null && shade !== void 0 ? shade : getPrimaryShade(theme)];
function dataVariable(name, value) {
  const key = `data-${name}`;
  switch (typeof value) {
    case "boolean":
      return value ? { [key]: "" } : null;
    case "number":
      return { [key]: `${value}` };
    case "string":
      return { [key]: value };
    default:
      return null;
  }
}
var MRT_AggregationFns = Object.assign({}, aggregationFns);
var fuzzy = (row, columnId, filterValue, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), filterValue, {
    threshold: rankings.MATCHES
  });
  addMeta(itemRank);
  return itemRank.passed;
};
fuzzy.autoRemove = (val) => !val;
var contains = (row, id, filterValue) => row.getValue(id).toString().toLowerCase().trim().includes(filterValue.toString().toLowerCase().trim());
contains.autoRemove = (val) => !val;
var startsWith = (row, id, filterValue) => row.getValue(id).toString().toLowerCase().trim().startsWith(filterValue.toString().toLowerCase().trim());
startsWith.autoRemove = (val) => !val;
var endsWith = (row, id, filterValue) => row.getValue(id).toString().toLowerCase().trim().endsWith(filterValue.toString().toLowerCase().trim());
endsWith.autoRemove = (val) => !val;
var equals2 = (row, id, filterValue) => row.getValue(id).toString().toLowerCase().trim() === (filterValue === null || filterValue === void 0 ? void 0 : filterValue.toString().toLowerCase().trim());
equals2.autoRemove = (val) => !val;
var notEquals = (row, id, filterValue) => row.getValue(id).toString().toLowerCase().trim() !== filterValue.toString().toLowerCase().trim();
notEquals.autoRemove = (val) => !val;
var greaterThan = (row, id, filterValue) => !isNaN(+filterValue) && !isNaN(+row.getValue(id)) ? +row.getValue(id) > +filterValue : row.getValue(id).toString().toLowerCase().trim() > (filterValue === null || filterValue === void 0 ? void 0 : filterValue.toString().toLowerCase().trim());
greaterThan.autoRemove = (val) => !val;
var greaterThanOrEqualTo = (row, id, filterValue) => equals2(row, id, filterValue) || greaterThan(row, id, filterValue);
greaterThanOrEqualTo.autoRemove = (val) => !val;
var lessThan = (row, id, filterValue) => !isNaN(+filterValue) && !isNaN(+row.getValue(id)) ? +row.getValue(id) < +filterValue : row.getValue(id).toString().toLowerCase().trim() < (filterValue === null || filterValue === void 0 ? void 0 : filterValue.toString().toLowerCase().trim());
lessThan.autoRemove = (val) => !val;
var lessThanOrEqualTo = (row, id, filterValue) => equals2(row, id, filterValue) || lessThan(row, id, filterValue);
lessThanOrEqualTo.autoRemove = (val) => !val;
var between = (row, id, filterValues) => (["", void 0].includes(filterValues[0]) || greaterThan(row, id, filterValues[0])) && (!isNaN(+filterValues[0]) && !isNaN(+filterValues[1]) && +filterValues[0] > +filterValues[1] || ["", void 0].includes(filterValues[1]) || lessThan(row, id, filterValues[1]));
between.autoRemove = (val) => !val;
var betweenInclusive = (row, id, filterValues) => (["", void 0].includes(filterValues[0]) || greaterThanOrEqualTo(row, id, filterValues[0])) && (!isNaN(+filterValues[0]) && !isNaN(+filterValues[1]) && +filterValues[0] > +filterValues[1] || ["", void 0].includes(filterValues[1]) || lessThanOrEqualTo(row, id, filterValues[1]));
betweenInclusive.autoRemove = (val) => !val;
var empty = (row, id, _filterValue) => !row.getValue(id).toString().trim();
empty.autoRemove = (val) => !val;
var notEmpty = (row, id, _filterValue) => !!row.getValue(id).toString().trim();
notEmpty.autoRemove = (val) => !val;
var MRT_FilterFns = Object.assign(Object.assign({}, filterFns), {
  between,
  betweenInclusive,
  contains,
  empty,
  endsWith,
  equals: equals2,
  fuzzy,
  greaterThan,
  greaterThanOrEqualTo,
  lessThan,
  lessThanOrEqualTo,
  notEmpty,
  notEquals,
  startsWith
});
function localizedFilterOption(localization, option) {
  var _a;
  if (!option) {
    return "";
  }
  const key = `filter${option[0].toUpperCase()}${option.slice(1)}`;
  return (_a = localization[key]) !== null && _a !== void 0 ? _a : "";
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
var classes$C = { "root": "MRT_EditActionButtons-module_root__BfxVZ" };
var MRT_EditActionButtons = (_a) => {
  var { row, table, variant = "icon" } = _a, rest = __rest(_a, ["row", "table", "variant"]);
  const { getState, options: { icons: { IconCircleX: IconCircleX2, IconDeviceFloppy: IconDeviceFloppy2 }, localization, onCreatingRowCancel, onCreatingRowSave, onEditingRowCancel, onEditingRowSave }, refs: { editInputRefs }, setCreatingRow, setEditingRow } = table;
  const { creatingRow, editingRow, isSaving } = getState();
  const isCreating = (creatingRow === null || creatingRow === void 0 ? void 0 : creatingRow.id) === row.id;
  const isEditing = (editingRow === null || editingRow === void 0 ? void 0 : editingRow.id) === row.id;
  const handleCancel = () => {
    if (isCreating) {
      onCreatingRowCancel === null || onCreatingRowCancel === void 0 ? void 0 : onCreatingRowCancel({ row, table });
      setCreatingRow(null);
    } else if (isEditing) {
      onEditingRowCancel === null || onEditingRowCancel === void 0 ? void 0 : onEditingRowCancel({ row, table });
      setEditingRow(null);
    }
    row._valuesCache = {};
  };
  const handleSubmitRow = () => {
    var _a2;
    (_a2 = Object.values(editInputRefs === null || editInputRefs === void 0 ? void 0 : editInputRefs.current).filter((inputRef) => {
      var _a3, _b;
      return row.id === ((_b = (_a3 = inputRef === null || inputRef === void 0 ? void 0 : inputRef.name) === null || _a3 === void 0 ? void 0 : _a3.split("_")) === null || _b === void 0 ? void 0 : _b[0]);
    })) === null || _a2 === void 0 ? void 0 : _a2.forEach((input) => {
      if (input.value !== void 0 && Object.hasOwn(row === null || row === void 0 ? void 0 : row._valuesCache, input.name)) {
        row._valuesCache[input.name] = input.value;
      }
    });
    if (isCreating)
      onCreatingRowSave === null || onCreatingRowSave === void 0 ? void 0 : onCreatingRowSave({
        exitCreatingMode: () => setCreatingRow(null),
        row,
        table,
        values: row._valuesCache
      });
    else if (isEditing) {
      onEditingRowSave === null || onEditingRowSave === void 0 ? void 0 : onEditingRowSave({
        exitEditingMode: () => setEditingRow(null),
        row,
        table,
        values: row === null || row === void 0 ? void 0 : row._valuesCache
      });
    }
  };
  return (0, import_jsx_runtime28.jsx)(Box, Object.assign({ className: clsx_default("mrt-edit-action-buttons", classes$C.root), onClick: (e) => e.stopPropagation() }, rest, { children: variant === "icon" ? (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [(0, import_jsx_runtime28.jsx)(Tooltip, { label: localization.cancel, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(ActionIcon, { "aria-label": localization.cancel, color: "red", onClick: handleCancel, variant: "subtle", children: (0, import_jsx_runtime28.jsx)(IconCircleX2, {}) }) }), (0, import_jsx_runtime28.jsx)(Tooltip, { label: localization.save, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(ActionIcon, { "aria-label": localization.save, color: "blue", loading: isSaving, onClick: handleSubmitRow, variant: "subtle", children: (0, import_jsx_runtime28.jsx)(IconDeviceFloppy2, {}) }) })] }) : (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [(0, import_jsx_runtime28.jsx)(Button, { onClick: handleCancel, variant: "subtle", children: localization.cancel }), (0, import_jsx_runtime28.jsx)(Button, { loading: isSaving, onClick: handleSubmitRow, variant: "filled", children: localization.save })] }) }));
};
var MRT_RowActionMenu = (_a) => {
  var { handleEdit, row, table } = _a, rest = __rest(_a, ["handleEdit", "row", "table"]);
  const { options: { editDisplayMode, enableEditing, icons: { IconDots: IconDots2, IconEdit: IconEdit2 }, localization, positionActionsColumn, renderRowActionMenuItems } } = table;
  return (0, import_jsx_runtime28.jsxs)(Menu, { closeOnItemClick: true, position: positionActionsColumn === "first" ? "bottom-start" : positionActionsColumn === "last" ? "bottom-end" : void 0, withinPortal: true, children: [(0, import_jsx_runtime28.jsx)(Tooltip, { label: localization.rowActions, openDelay: 1e3, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(Menu.Target, { children: (0, import_jsx_runtime28.jsx)(ActionIcon, Object.assign({ "aria-label": localization.rowActions, color: "gray", onClick: (event) => event.stopPropagation(), size: "sm", variant: "subtle" }, rest, { children: (0, import_jsx_runtime28.jsx)(IconDots2, {}) })) }) }), (0, import_jsx_runtime28.jsxs)(Menu.Dropdown, { onClick: (event) => event.stopPropagation(), children: [enableEditing && editDisplayMode !== "table" && (0, import_jsx_runtime28.jsx)(Menu.Item, { leftSection: (0, import_jsx_runtime28.jsx)(IconEdit2, {}), onClick: handleEdit, children: localization.edit }), renderRowActionMenuItems === null || renderRowActionMenuItems === void 0 ? void 0 : renderRowActionMenuItems({
    row,
    table
  })] })] });
};
var MRT_ToggleRowActionMenuButton = ({ cell, row, table }) => {
  const { getState, options: { createDisplayMode, editDisplayMode, enableEditing, icons: { IconEdit: IconEdit2 }, localization: { edit }, renderRowActionMenuItems, renderRowActions }, setEditingRow } = table;
  const { creatingRow, editingRow } = getState();
  const isCreating = (creatingRow === null || creatingRow === void 0 ? void 0 : creatingRow.id) === row.id;
  const isEditing = (editingRow === null || editingRow === void 0 ? void 0 : editingRow.id) === row.id;
  const handleStartEditMode = (event) => {
    event.stopPropagation();
    setEditingRow(Object.assign({}, row));
  };
  const showEditActionButtons = isCreating && createDisplayMode === "row" || isEditing && editDisplayMode === "row";
  return (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: renderRowActions && !showEditActionButtons ? renderRowActions({ cell, row, table }) : showEditActionButtons ? (0, import_jsx_runtime28.jsx)(MRT_EditActionButtons, { row, table }) : !renderRowActionMenuItems && parseFromValuesOrFunc(enableEditing, row) ? (0, import_jsx_runtime28.jsx)(Tooltip, { label: edit, openDelay: 1e3, position: "right", withinPortal: true, children: (0, import_jsx_runtime28.jsx)(ActionIcon, { "aria-label": edit, color: "gray", disabled: !!editingRow && editingRow.id !== row.id, onClick: handleStartEditMode, size: "md", variant: "subtle", children: (0, import_jsx_runtime28.jsx)(IconEdit2, {}) }) }) : renderRowActionMenuItems ? (0, import_jsx_runtime28.jsx)(MRT_RowActionMenu, { handleEdit: handleStartEditMode, row, table }) : null });
};
var getMRT_RowActionsColumnDef = (tableOptions) => {
  return Object.assign({ Cell: ({ cell, row, table }) => (0, import_jsx_runtime28.jsx)(MRT_ToggleRowActionMenuButton, { cell, row, table }) }, defaultDisplayColumnProps({
    header: "actions",
    id: "mrt-row-actions",
    size: 70,
    tableOptions
  }));
};
var classes$B = { "grab-icon": "MRT_GrabHandleButton-module_grab-icon__mQimy" };
var MRT_GrabHandleButton = ({ actionIconProps, onDragEnd, onDragStart, table: { options: { icons: { IconGripHorizontal: IconGripHorizontal2 }, localization: { move } } } }) => {
  var _a, _b;
  return (0, import_jsx_runtime28.jsx)(Tooltip, { label: (_a = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.title) !== null && _a !== void 0 ? _a : move, openDelay: 1e3, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(ActionIcon, Object.assign({ "aria-label": (_b = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.title) !== null && _b !== void 0 ? _b : move, draggable: true }, actionIconProps, { className: clsx_default("mrt-grab-handle-button", classes$B["grab-icon"], actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.className), color: "gray", onClick: (e) => {
    var _a2;
    e.stopPropagation();
    (_a2 = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.onClick) === null || _a2 === void 0 ? void 0 : _a2.call(actionIconProps, e);
  }, onDragEnd, onDragStart, title: void 0, variant: "transparent", children: (0, import_jsx_runtime28.jsx)(IconGripHorizontal2, {}) })) });
};
var MRT_TableBodyRowGrabHandle = (_a) => {
  var { row, rowRef, table } = _a, rest = __rest(_a, ["row", "rowRef", "table"]);
  const { options: { mantineRowDragHandleProps } } = table;
  const actionIconProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineRowDragHandleProps, {
    row,
    table
  })), rest);
  const handleDragStart = (event) => {
    var _a2;
    (_a2 = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.onDragStart) === null || _a2 === void 0 ? void 0 : _a2.call(actionIconProps, event);
    event.dataTransfer.setDragImage(rowRef.current, 0, 0);
    table.setDraggingRow(row);
  };
  const handleDragEnd = (event) => {
    var _a2;
    (_a2 = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.onDragEnd) === null || _a2 === void 0 ? void 0 : _a2.call(actionIconProps, event);
    table.setDraggingRow(null);
    table.setHoveredRow(null);
  };
  return (0, import_jsx_runtime28.jsx)(MRT_GrabHandleButton, { actionIconProps, onDragEnd: handleDragEnd, onDragStart: handleDragStart, table });
};
var getMRT_RowDragColumnDef = (tableOptions) => {
  return Object.assign({ Cell: ({ row, rowRef, table }) => (0, import_jsx_runtime28.jsx)(MRT_TableBodyRowGrabHandle, { row, rowRef, table }), grow: false }, defaultDisplayColumnProps({
    header: "move",
    id: "mrt-row-drag",
    size: 60,
    tableOptions
  }));
};
var classes$A = { "root": "MRT_ExpandAllButton-module_root__gkBZD", "chevron": "MRT_ExpandAllButton-module_chevron__Iep0j", "up": "MRT_ExpandAllButton-module_up__Xth3U", "right": "MRT_ExpandAllButton-module_right__bS4L-" };
var MRT_ExpandAllButton = (_a) => {
  var _b, _c;
  var { table } = _a, rest = __rest(_a, ["table"]);
  const { getCanSomeRowsExpand, getIsAllRowsExpanded, getIsSomeRowsExpanded, getState, options: { icons: { IconChevronsDown: IconChevronsDown2 }, localization, mantineExpandAllButtonProps, renderDetailPanel }, toggleAllRowsExpanded } = table;
  const { density, isLoading } = getState();
  const actionIconProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineExpandAllButtonProps, {
    table
  })), rest);
  const isAllRowsExpanded = getIsAllRowsExpanded();
  return (0, import_jsx_runtime28.jsx)(Tooltip, { label: ((_b = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.title) !== null && _b !== void 0 ? _b : isAllRowsExpanded) ? localization.collapseAll : localization.expandAll, openDelay: 1e3, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(ActionIcon, Object.assign({ "aria-label": localization.expandAll, color: "gray", variant: "subtle" }, actionIconProps, { className: clsx_default("mrt-expand-all-button", classes$A.root, actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.className, density), disabled: isLoading || !renderDetailPanel && !getCanSomeRowsExpand(), onClick: () => toggleAllRowsExpanded(!isAllRowsExpanded), title: void 0, children: (_c = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.children) !== null && _c !== void 0 ? _c : (0, import_jsx_runtime28.jsx)(IconChevronsDown2, { className: clsx_default(classes$A.chevron, isAllRowsExpanded ? classes$A.up : getIsSomeRowsExpanded() ? classes$A.right : void 0) }) })) });
};
var classes$z = { "root": "MRT_ExpandButton-module_root__IFYio", "root-ltr": "MRT_ExpandButton-module_root-ltr__FHNnp", "chevron": "MRT_ExpandButton-module_chevron__XzC5P", "right": "MRT_ExpandButton-module_right__-pC-A", "up": "MRT_ExpandButton-module_up__TZGBo", "root-rtl": "MRT_ExpandButton-module_root-rtl__zoudS" };
var MRT_ExpandButton = (_a) => {
  var _b, _c;
  var { row, table } = _a, rest = __rest(_a, ["row", "table"]);
  const direction = useDirection();
  const { options: { icons: { IconChevronDown: IconChevronDown2 }, localization, mantineExpandButtonProps, positionExpandColumn, renderDetailPanel } } = table;
  const actionIconProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineExpandButtonProps, {
    row,
    table
  })), rest);
  const canExpand = row.getCanExpand();
  const isExpanded = row.getIsExpanded();
  const DetailPanel = !!(renderDetailPanel === null || renderDetailPanel === void 0 ? void 0 : renderDetailPanel({ row, table }));
  const handleToggleExpand = (event) => {
    var _a2;
    event.stopPropagation();
    row.toggleExpanded();
    (_a2 = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.onClick) === null || _a2 === void 0 ? void 0 : _a2.call(actionIconProps, event);
  };
  const rtl = direction.dir === "rtl" || positionExpandColumn === "last";
  return (0, import_jsx_runtime28.jsx)(Tooltip, { disabled: !canExpand && !DetailPanel, label: ((_b = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.title) !== null && _b !== void 0 ? _b : isExpanded) ? localization.collapse : localization.expand, openDelay: 1e3, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(ActionIcon, Object.assign({ "aria-label": localization.expand, color: "gray", disabled: !canExpand && !DetailPanel, variant: "subtle" }, actionIconProps, { __vars: {
    "--mrt-row-depth": `${row.depth}`
  }, className: clsx_default("mrt-expand-button", classes$z.root, classes$z[`root-${rtl ? "rtl" : "ltr"}`], actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.className), onClick: handleToggleExpand, title: void 0, children: (_c = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.children) !== null && _c !== void 0 ? _c : (0, import_jsx_runtime28.jsx)(IconChevronDown2, { className: clsx_default("mrt-expand-button-chevron", classes$z.chevron, !canExpand && !renderDetailPanel ? classes$z.right : isExpanded ? classes$z.up : void 0) }) })) });
};
var getMRT_RowExpandColumnDef = (tableOptions) => {
  var _a;
  const { defaultColumn, enableExpandAll, groupedColumnMode, positionExpandColumn, renderDetailPanel, state: { grouping } } = tableOptions;
  const alignProps = positionExpandColumn === "last" ? {
    align: "right"
  } : void 0;
  return Object.assign({ Cell: ({ cell, column, row, table }) => {
    var _a2, _b, _c;
    const expandButtonProps = { row, table };
    const subRowsLength = (_a2 = row.subRows) === null || _a2 === void 0 ? void 0 : _a2.length;
    if (tableOptions.groupedColumnMode === "remove" && row.groupingColumnId) {
      return (0, import_jsx_runtime28.jsxs)(Flex, { align: "center", gap: "0.25rem", children: [(0, import_jsx_runtime28.jsx)(MRT_ExpandButton, Object.assign({}, expandButtonProps)), (0, import_jsx_runtime28.jsx)(Tooltip, { label: table.getColumn(row.groupingColumnId).columnDef.header, openDelay: 1e3, position: "right", children: (0, import_jsx_runtime28.jsx)("span", { children: row.groupingValue }) }), !!subRowsLength && (0, import_jsx_runtime28.jsxs)("span", { children: ["(", subRowsLength, ")"] })] });
    } else {
      return (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [(0, import_jsx_runtime28.jsx)(MRT_ExpandButton, Object.assign({}, expandButtonProps)), (_c = (_b = column.columnDef).GroupedCell) === null || _c === void 0 ? void 0 : _c.call(_b, { cell, column, row, table })] });
    }
  }, Header: enableExpandAll ? ({ table }) => {
    var _a2;
    return (0, import_jsx_runtime28.jsxs)(Flex, { align: "center", children: [(0, import_jsx_runtime28.jsx)(MRT_ExpandAllButton, { table }), groupedColumnMode === "remove" && ((_a2 = grouping === null || grouping === void 0 ? void 0 : grouping.map((groupedColumnId) => table.getColumn(groupedColumnId).columnDef.header)) === null || _a2 === void 0 ? void 0 : _a2.join(", "))] });
  } : void 0, mantineTableBodyCellProps: alignProps, mantineTableHeadCellProps: alignProps }, defaultDisplayColumnProps({
    header: "expand",
    id: "mrt-row-expand",
    size: groupedColumnMode === "remove" ? (_a = defaultColumn === null || defaultColumn === void 0 ? void 0 : defaultColumn.size) !== null && _a !== void 0 ? _a : 180 : renderDetailPanel ? enableExpandAll ? 60 : 70 : 100,
    tableOptions
  }));
};
var getMRT_RowNumbersColumnDef = (tableOptions) => {
  const { localization, rowNumberDisplayMode } = tableOptions;
  const { pagination: { pageIndex, pageSize } } = tableOptions.state;
  return Object.assign({ Cell: ({ renderedRowIndex = 0, row }) => {
    var _a;
    return ((_a = rowNumberDisplayMode === "static" ? renderedRowIndex + pageSize * pageIndex : row.index) !== null && _a !== void 0 ? _a : 0) + 1;
  }, Header: () => localization.rowNumber, grow: false }, defaultDisplayColumnProps({
    header: "rowNumbers",
    id: "mrt-row-numbers",
    size: 50,
    tableOptions
  }));
};
var MRT_RowPinButton = (_a) => {
  var { pinningPosition, row, table } = _a, rest = __rest(_a, ["pinningPosition", "row", "table"]);
  const { options: { icons: { IconPinned: IconPinned2, IconX: IconX2 }, localization, rowPinningDisplayMode } } = table;
  const isPinned = row.getIsPinned();
  const [tooltipOpened, setTooltipOpened] = (0, import_react17.useState)(false);
  const handleTogglePin = (event) => {
    setTooltipOpened(false);
    event.stopPropagation();
    row.pin(isPinned ? false : pinningPosition);
  };
  return (0, import_jsx_runtime28.jsx)(Tooltip, { label: isPinned ? localization.unpin : localization.pin, openDelay: 1e3, opened: tooltipOpened, children: (0, import_jsx_runtime28.jsx)(ActionIcon, Object.assign({ "aria-label": localization.pin, color: "gray", onClick: handleTogglePin, onMouseEnter: () => setTooltipOpened(true), onMouseLeave: () => setTooltipOpened(false), size: "xs", style: {
    height: "24px",
    width: "24px"
  }, variant: "subtle" }, rest, { children: isPinned ? (0, import_jsx_runtime28.jsx)(IconX2, {}) : (0, import_jsx_runtime28.jsx)(IconPinned2, { fontSize: "small", style: {
    transform: `rotate(${rowPinningDisplayMode === "sticky" ? 135 : pinningPosition === "top" ? 180 : 0}deg)`
  } }) })) });
};
var MRT_TableBodyRowPinButton = (_a) => {
  var { row, table } = _a, rest = __rest(_a, ["row", "table"]);
  const { getState, options: { enableRowPinning, rowPinningDisplayMode } } = table;
  const { density } = getState();
  const canPin = parseFromValuesOrFunc(enableRowPinning, row);
  if (!canPin)
    return null;
  const rowPinButtonProps = Object.assign({
    row,
    table
  }, rest);
  if (rowPinningDisplayMode === "top-and-bottom" && !row.getIsPinned()) {
    return (0, import_jsx_runtime28.jsxs)(Box, { style: {
      display: "flex",
      flexDirection: density === "xs" ? "row" : "column"
    }, children: [(0, import_jsx_runtime28.jsx)(MRT_RowPinButton, Object.assign({ pinningPosition: "top" }, rowPinButtonProps)), (0, import_jsx_runtime28.jsx)(MRT_RowPinButton, Object.assign({ pinningPosition: "bottom" }, rowPinButtonProps))] });
  }
  return (0, import_jsx_runtime28.jsx)(MRT_RowPinButton, Object.assign({ pinningPosition: rowPinningDisplayMode === "bottom" ? "bottom" : "top" }, rowPinButtonProps));
};
var getMRT_RowPinningColumnDef = (tableOptions) => {
  return Object.assign({ Cell: ({ row, table }) => (0, import_jsx_runtime28.jsx)(MRT_TableBodyRowPinButton, { row, table }), grow: false }, defaultDisplayColumnProps({
    header: "pin",
    id: "mrt-row-pin",
    size: 60,
    tableOptions
  }));
};
var MRT_SelectCheckbox = (_a) => {
  var _b;
  var { renderedRowIndex = 0, row, table } = _a, rest = __rest(_a, ["renderedRowIndex", "row", "table"]);
  const { getState, options: { enableMultiRowSelection, localization, mantineSelectAllCheckboxProps, mantineSelectCheckboxProps, selectAllMode, selectDisplayMode } } = table;
  const { density, isLoading } = getState();
  const selectAll = !row;
  const allRowsSelected = selectAll ? selectAllMode === "page" ? table.getIsAllPageRowsSelected() : table.getIsAllRowsSelected() : void 0;
  const isChecked = selectAll ? allRowsSelected : getIsRowSelected({ row, table });
  const checkboxProps = Object.assign(Object.assign({}, selectAll ? parseFromValuesOrFunc(mantineSelectAllCheckboxProps, { table }) : parseFromValuesOrFunc(mantineSelectCheckboxProps, {
    row,
    table
  })), rest);
  const onSelectionChange = row ? getMRT_RowSelectionHandler({
    renderedRowIndex,
    row,
    table
  }) : void 0;
  const onSelectAllChange = getMRT_SelectAllHandler({ table });
  const commonProps = Object.assign(Object.assign({ "aria-label": selectAll ? localization.toggleSelectAll : localization.toggleSelectRow, checked: isChecked, disabled: isLoading || row && !row.getCanSelect() || (row === null || row === void 0 ? void 0 : row.id) === "mrt-row-create", onChange: (event) => {
    event.stopPropagation();
    selectAll ? onSelectAllChange(event) : onSelectionChange(event);
  }, size: density === "xs" ? "sm" : "md" }, checkboxProps), { onClick: (e) => {
    var _a2;
    e.stopPropagation();
    (_a2 = checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.onClick) === null || _a2 === void 0 ? void 0 : _a2.call(checkboxProps, e);
  }, title: void 0 });
  return (0, import_jsx_runtime28.jsx)(Tooltip, { label: (_b = checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.title) !== null && _b !== void 0 ? _b : selectAll ? localization.toggleSelectAll : localization.toggleSelectRow, openDelay: 1e3, withinPortal: true, children: (0, import_jsx_runtime28.jsx)("span", { children: selectDisplayMode === "switch" ? (0, import_jsx_runtime28.jsx)(Switch, Object.assign({}, commonProps)) : selectDisplayMode === "radio" || enableMultiRowSelection === false ? (0, import_jsx_runtime28.jsx)(Radio, Object.assign({}, commonProps)) : (0, import_jsx_runtime28.jsx)(Checkbox, Object.assign({ indeterminate: !isChecked && selectAll ? table.getIsSomeRowsSelected() : (row === null || row === void 0 ? void 0 : row.getIsSomeSelected()) && row.getCanSelectSubRows() }, commonProps)) }) });
};
var getMRT_RowSelectColumnDef = (tableOptions) => {
  const { enableMultiRowSelection, enableSelectAll } = tableOptions;
  return Object.assign({ Cell: ({ renderedRowIndex, row, table }) => (0, import_jsx_runtime28.jsx)(MRT_SelectCheckbox, { renderedRowIndex, row, table }), Header: enableSelectAll && enableMultiRowSelection ? ({ table }) => (0, import_jsx_runtime28.jsx)(MRT_SelectCheckbox, { table }) : void 0, grow: false }, defaultDisplayColumnProps({
    header: "select",
    id: "mrt-row-select",
    size: enableSelectAll ? 60 : 70,
    tableOptions
  }));
};
var MRT_Default_Icons = {
  IconArrowAutofitContent,
  IconArrowsSort,
  IconBaselineDensityLarge,
  IconBaselineDensityMedium,
  IconBaselineDensitySmall,
  IconBoxMultiple,
  IconChevronDown,
  IconChevronLeft,
  IconChevronLeftPipe,
  IconChevronRight,
  IconChevronRightPipe,
  IconChevronsDown,
  IconCircleX,
  IconClearAll,
  IconColumns,
  IconDeviceFloppy,
  IconDots,
  IconDotsVertical,
  IconEdit,
  IconEyeOff,
  IconFilter,
  IconFilterCog,
  IconFilterOff,
  IconGripHorizontal,
  IconMaximize,
  IconMinimize,
  IconPinned,
  IconPinnedOff,
  IconSearch,
  IconSearchOff,
  IconSortAscending,
  IconSortDescending,
  IconX
};
var MRT_Localization_EN = {
  actions: "Actions",
  and: "and",
  cancel: "Cancel",
  changeFilterMode: "Change filter mode",
  changeSearchMode: "Change search mode",
  clearFilter: "Clear filter",
  clearSearch: "Clear search",
  clearSelection: "Clear selection",
  clearSort: "Clear sort",
  clickToCopy: "Click to copy",
  copy: "Copy",
  collapse: "Collapse",
  collapseAll: "Collapse all",
  columnActions: "Column Actions",
  copiedToClipboard: "Copied to clipboard",
  dropToGroupBy: "Drop to group by {column}",
  edit: "Edit",
  expand: "Expand",
  expandAll: "Expand all",
  filterArrIncludes: "Includes",
  filterArrIncludesAll: "Includes all",
  filterArrIncludesSome: "Includes",
  filterBetween: "Between",
  filterBetweenInclusive: "Between Inclusive",
  filterByColumn: "Filter by {column}",
  filterContains: "Contains",
  filterEmpty: "Empty",
  filterEndsWith: "Ends With",
  filterEquals: "Equals",
  filterEqualsString: "Equals",
  filterFuzzy: "Fuzzy",
  filterGreaterThan: "Greater Than",
  filterGreaterThanOrEqualTo: "Greater Than Or Equal To",
  filterInNumberRange: "Between",
  filterIncludesString: "Contains",
  filterIncludesStringSensitive: "Contains",
  filterLessThan: "Less Than",
  filterLessThanOrEqualTo: "Less Than Or Equal To",
  filterMode: "Filter Mode: {filterType}",
  filterNotEmpty: "Not Empty",
  filterNotEquals: "Not Equals",
  filterStartsWith: "Starts With",
  filterWeakEquals: "Equals",
  filteringByColumn: "Filtering by {column} - {filterType} {filterValue}",
  goToFirstPage: "Go to first page",
  goToLastPage: "Go to last page",
  goToNextPage: "Go to next page",
  goToPreviousPage: "Go to previous page",
  grab: "Grab",
  groupByColumn: "Group by {column}",
  groupedBy: "Grouped by ",
  hideAll: "Hide all",
  hideColumn: "Hide {column} column",
  max: "Max",
  min: "Min",
  move: "Move",
  noRecordsToDisplay: "No records to display",
  noResultsFound: "No results found",
  of: "of",
  or: "or",
  pin: "Pin",
  pinToLeft: "Pin to left",
  pinToRight: "Pin to right",
  resetColumnSize: "Reset column size",
  resetOrder: "Reset order",
  rowActions: "Row Actions",
  rowNumber: "#",
  rowNumbers: "Row Numbers",
  rowsPerPage: "Rows per page",
  save: "Save",
  search: "Search",
  selectedCountOfRowCountRowsSelected: "{selectedCount} of {rowCount} row(s) selected",
  select: "Select",
  showAll: "Show all",
  showAllColumns: "Show all columns",
  showHideColumns: "Show/Hide columns",
  showHideFilters: "Show/Hide filters",
  showHideSearch: "Show/Hide search",
  sortByColumnAsc: "Sort by {column} ascending",
  sortByColumnDesc: "Sort by {column} descending",
  sortedByColumnAsc: "Sorted by {column} ascending",
  sortedByColumnDesc: "Sorted by {column} descending",
  thenBy: ", then by ",
  toggleDensity: "Toggle density",
  toggleFullScreen: "Toggle full screen",
  toggleSelectAll: "Toggle select all",
  toggleSelectRow: "Toggle select row",
  toggleVisibility: "Toggle visibility",
  ungroupByColumn: "Ungroup by {column}",
  unpin: "Unpin",
  unpinAll: "Unpin all"
};
var MRT_DefaultColumn = {
  filterVariant: "text",
  maxSize: 1e3,
  minSize: 40,
  size: 180
};
var MRT_DefaultDisplayColumn = {
  columnDefType: "display",
  enableClickToCopy: false,
  enableColumnActions: false,
  enableColumnDragging: false,
  enableColumnFilter: false,
  enableColumnOrdering: false,
  enableEditing: false,
  enableGlobalFilter: false,
  enableGrouping: false,
  enableHiding: false,
  enableResizing: false,
  enableSorting: false
};
var useMRT_TableOptions = (_a) => {
  var _b;
  var { aggregationFns: aggregationFns2, autoResetExpanded = false, columnFilterDisplayMode = "subheader", columnResizeDirection, columnResizeMode = "onChange", createDisplayMode = "modal", defaultColumn, defaultDisplayColumn, editDisplayMode = "modal", enableBatchRowSelection = true, enableBottomToolbar = true, enableColumnActions = true, enableColumnFilters = true, enableColumnOrdering = false, enableColumnPinning = false, enableColumnResizing = false, enableColumnVirtualization, enableDensityToggle = true, enableExpandAll = true, enableExpanding, enableFacetedValues = false, enableFilterMatchHighlighting = true, enableFilters = true, enableFullScreenToggle = true, enableGlobalFilter = true, enableGlobalFilterRankedResults = true, enableGrouping = false, enableHiding = true, enableMultiRowSelection = true, enableMultiSort = true, enablePagination = true, enableRowPinning = false, enableRowSelection = false, enableRowVirtualization, enableSelectAll = true, enableSorting = true, enableStickyHeader = false, enableTableFooter = true, enableTableHead = true, enableToolbarInternalActions = true, enableTopToolbar = true, filterFns: filterFns2, icons, layoutMode, localization, manualFiltering, manualGrouping, manualPagination, manualSorting, paginationDisplayMode = "default", positionActionsColumn = "first", positionCreatingRow = "top", positionExpandColumn = "first", positionGlobalFilter = "right", positionPagination = "bottom", positionToolbarAlertBanner = "top", positionToolbarDropZone = "top", rowNumberDisplayMode = "static", rowPinningDisplayMode = "sticky", selectAllMode = "page", sortingFns: sortingFns2 } = _a, rest = __rest(_a, ["aggregationFns", "autoResetExpanded", "columnFilterDisplayMode", "columnResizeDirection", "columnResizeMode", "createDisplayMode", "defaultColumn", "defaultDisplayColumn", "editDisplayMode", "enableBatchRowSelection", "enableBottomToolbar", "enableColumnActions", "enableColumnFilters", "enableColumnOrdering", "enableColumnPinning", "enableColumnResizing", "enableColumnVirtualization", "enableDensityToggle", "enableExpandAll", "enableExpanding", "enableFacetedValues", "enableFilterMatchHighlighting", "enableFilters", "enableFullScreenToggle", "enableGlobalFilter", "enableGlobalFilterRankedResults", "enableGrouping", "enableHiding", "enableMultiRowSelection", "enableMultiSort", "enablePagination", "enableRowPinning", "enableRowSelection", "enableRowVirtualization", "enableSelectAll", "enableSorting", "enableStickyHeader", "enableTableFooter", "enableTableHead", "enableToolbarInternalActions", "enableTopToolbar", "filterFns", "icons", "layoutMode", "localization", "manualFiltering", "manualGrouping", "manualPagination", "manualSorting", "paginationDisplayMode", "positionActionsColumn", "positionCreatingRow", "positionExpandColumn", "positionGlobalFilter", "positionPagination", "positionToolbarAlertBanner", "positionToolbarDropZone", "rowNumberDisplayMode", "rowPinningDisplayMode", "selectAllMode", "sortingFns"]);
  const direction = useDirection();
  icons = (0, import_react17.useMemo)(() => Object.assign(Object.assign({}, MRT_Default_Icons), icons), [icons]);
  localization = (0, import_react17.useMemo)(() => Object.assign(Object.assign({}, MRT_Localization_EN), localization), [localization]);
  aggregationFns2 = (0, import_react17.useMemo)(() => Object.assign(Object.assign({}, MRT_AggregationFns), aggregationFns2), []);
  filterFns2 = (0, import_react17.useMemo)(() => Object.assign(Object.assign({}, MRT_FilterFns), filterFns2), []);
  sortingFns2 = (0, import_react17.useMemo)(() => Object.assign(Object.assign({}, MRT_SortingFns), sortingFns2), []);
  defaultColumn = (0, import_react17.useMemo)(() => Object.assign(Object.assign({}, MRT_DefaultColumn), defaultColumn), [defaultColumn]);
  defaultDisplayColumn = (0, import_react17.useMemo)(() => Object.assign(Object.assign({}, MRT_DefaultDisplayColumn), defaultDisplayColumn), [defaultDisplayColumn]);
  [enableColumnVirtualization, enableRowVirtualization] = (0, import_react17.useMemo)(() => [enableColumnVirtualization, enableRowVirtualization], []);
  if (!columnResizeDirection) {
    columnResizeDirection = direction.dir || "ltr";
  }
  layoutMode = layoutMode || (enableColumnResizing ? "grid-no-grow" : "semantic");
  if (layoutMode === "semantic" && (enableRowVirtualization || enableColumnVirtualization)) {
    layoutMode = "grid";
  }
  if (enableRowVirtualization) {
    enableStickyHeader = true;
  }
  if (enablePagination === false && manualPagination === void 0) {
    manualPagination = true;
  }
  if (!((_b = rest.data) === null || _b === void 0 ? void 0 : _b.length)) {
    manualFiltering = true;
    manualGrouping = true;
    manualPagination = true;
    manualSorting = true;
  }
  return Object.assign({
    aggregationFns: aggregationFns2,
    autoResetExpanded,
    columnFilterDisplayMode,
    columnResizeDirection,
    columnResizeMode,
    createDisplayMode,
    defaultColumn,
    defaultDisplayColumn,
    editDisplayMode,
    enableBatchRowSelection,
    enableBottomToolbar,
    enableColumnActions,
    enableColumnFilters,
    enableColumnOrdering,
    enableColumnPinning,
    enableColumnResizing,
    enableColumnVirtualization,
    enableDensityToggle,
    enableExpandAll,
    enableExpanding,
    enableFacetedValues,
    enableFilterMatchHighlighting,
    enableFilters,
    enableFullScreenToggle,
    enableGlobalFilter,
    enableGlobalFilterRankedResults,
    enableGrouping,
    enableHiding,
    enableMultiRowSelection,
    enableMultiSort,
    enablePagination,
    enableRowPinning,
    enableRowSelection,
    enableRowVirtualization,
    enableSelectAll,
    enableSorting,
    enableStickyHeader,
    enableTableFooter,
    enableTableHead,
    enableToolbarInternalActions,
    enableTopToolbar,
    filterFns: filterFns2,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: enableExpanding || enableGrouping ? getExpandedRowModel() : void 0,
    getFacetedMinMaxValues: enableFacetedValues ? getFacetedMinMaxValues() : void 0,
    getFacetedRowModel: enableFacetedValues ? getFacetedRowModel() : void 0,
    getFacetedUniqueValues: enableFacetedValues ? getFacetedUniqueValues() : void 0,
    getFilteredRowModel: enableColumnFilters || enableGlobalFilter || enableFilters ? getFilteredRowModel() : void 0,
    getGroupedRowModel: enableGrouping ? getGroupedRowModel() : void 0,
    getPaginationRowModel: enablePagination ? getPaginationRowModel() : void 0,
    getSortedRowModel: enableSorting ? getSortedRowModel() : void 0,
    getSubRows: (row) => row === null || row === void 0 ? void 0 : row.subRows,
    icons,
    layoutMode,
    localization,
    manualFiltering,
    manualGrouping,
    manualPagination,
    manualSorting,
    paginationDisplayMode,
    positionActionsColumn,
    positionCreatingRow,
    positionExpandColumn,
    positionGlobalFilter,
    positionPagination,
    positionToolbarAlertBanner,
    positionToolbarDropZone,
    rowNumberDisplayMode,
    rowPinningDisplayMode,
    selectAllMode,
    sortingFns: sortingFns2
  }, rest);
};
var blankColProps = {
  children: null,
  style: {
    minWidth: 0,
    padding: 0,
    width: 0
  }
};
var getMRT_RowSpacerColumnDef = (tableOptions) => {
  return Object.assign(Object.assign(Object.assign(Object.assign({}, defaultDisplayColumnProps({
    id: "mrt-row-spacer",
    size: 0,
    tableOptions
  })), { grow: true }), MRT_DefaultDisplayColumn), { mantineTableBodyCellProps: blankColProps, mantineTableFooterCellProps: blankColProps, mantineTableHeadCellProps: blankColProps });
};
var useMRT_Effects = (table) => {
  const { getIsSomeRowsPinned, getPrePaginationRowModel, getState, options: { enablePagination, enableRowPinning, rowCount } } = table;
  const { columnOrder, density, globalFilter, isFullScreen, isLoading, pagination, showSkeletons, sorting } = getState();
  const totalColumnCount = table.options.columns.length;
  const totalRowCount = rowCount !== null && rowCount !== void 0 ? rowCount : getPrePaginationRowModel().rows.length;
  const rerender = (0, import_react17.useReducer)(() => ({}), {})[1];
  const initialBodyHeight = (0, import_react17.useRef)();
  const previousTop = (0, import_react17.useRef)();
  (0, import_react17.useEffect)(() => {
    if (typeof window !== "undefined") {
      initialBodyHeight.current = document.body.style.height;
    }
  }, []);
  (0, import_react17.useEffect)(() => {
    if (typeof window !== "undefined") {
      if (isFullScreen) {
        previousTop.current = document.body.getBoundingClientRect().top;
        document.body.style.height = "100dvh";
      } else {
        document.body.style.height = initialBodyHeight.current;
        if (!previousTop.current)
          return;
        window.scrollTo({
          behavior: "instant",
          top: -1 * previousTop.current
        });
      }
    }
  }, [isFullScreen]);
  (0, import_react17.useEffect)(() => {
    if (totalColumnCount !== columnOrder.length) {
      table.setColumnOrder(getDefaultColumnOrderIds(table.options));
    }
  }, [totalColumnCount]);
  (0, import_react17.useEffect)(() => {
    if (!enablePagination || isLoading || showSkeletons)
      return;
    const { pageIndex, pageSize } = pagination;
    const firstVisibleRowIndex = pageIndex * pageSize;
    if (firstVisibleRowIndex >= totalRowCount) {
      table.setPageIndex(Math.ceil(totalRowCount / pageSize) - 1);
    }
  }, [totalRowCount]);
  const appliedSort = (0, import_react17.useRef)(sorting);
  (0, import_react17.useEffect)(() => {
    if (sorting.length) {
      appliedSort.current = sorting;
    }
  }, [sorting]);
  (0, import_react17.useEffect)(() => {
    if (!getCanRankRows(table))
      return;
    if (globalFilter) {
      table.setSorting([]);
    } else {
      table.setSorting(() => appliedSort.current || []);
    }
  }, [globalFilter]);
  (0, import_react17.useEffect)(() => {
    if (enableRowPinning && getIsSomeRowsPinned()) {
      setTimeout(() => {
        rerender();
      }, 150);
    }
  }, [density]);
};
var useMRT_TableInstance = (definedTableOptions) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
  const lastSelectedRowId = (0, import_react17.useRef)(null);
  const bottomToolbarRef = (0, import_react17.useRef)(null);
  const editInputRefs = (0, import_react17.useRef)({});
  const filterInputRefs = (0, import_react17.useRef)({});
  const searchInputRef = (0, import_react17.useRef)(null);
  const tableContainerRef = (0, import_react17.useRef)(null);
  const tableHeadCellRefs = (0, import_react17.useRef)({});
  const tablePaperRef = (0, import_react17.useRef)(null);
  const topToolbarRef = (0, import_react17.useRef)(null);
  const tableHeadRef = (0, import_react17.useRef)(null);
  const tableFooterRef = (0, import_react17.useRef)(null);
  const initialState = (0, import_react17.useMemo)(() => {
    var _a2, _b2, _c2;
    const initState = (_a2 = definedTableOptions.initialState) !== null && _a2 !== void 0 ? _a2 : {};
    initState.columnOrder = (_b2 = initState.columnOrder) !== null && _b2 !== void 0 ? _b2 : getDefaultColumnOrderIds(Object.assign(Object.assign({}, definedTableOptions), { state: Object.assign(Object.assign({}, definedTableOptions.initialState), definedTableOptions.state) }));
    initState.globalFilterFn = (_c2 = definedTableOptions.globalFilterFn) !== null && _c2 !== void 0 ? _c2 : "fuzzy";
    return initState;
  }, []);
  definedTableOptions.initialState = initialState;
  const [creatingRow, _setCreatingRow] = (0, import_react17.useState)((_a = initialState.creatingRow) !== null && _a !== void 0 ? _a : null);
  const [columnFilterFns, setColumnFilterFns] = (0, import_react17.useState)(() => Object.assign({}, ...getAllLeafColumnDefs(definedTableOptions.columns).map((col) => {
    var _a2, _b2, _c2, _d2;
    return {
      [getColumnId(col)]: col.filterFn instanceof Function ? (_a2 = col.filterFn.name) !== null && _a2 !== void 0 ? _a2 : "custom" : (_d2 = (_b2 = col.filterFn) !== null && _b2 !== void 0 ? _b2 : (_c2 = initialState === null || initialState === void 0 ? void 0 : initialState.columnFilterFns) === null || _c2 === void 0 ? void 0 : _c2[getColumnId(col)]) !== null && _d2 !== void 0 ? _d2 : getDefaultColumnFilterFn(col)
    };
  })));
  const [columnOrder, onColumnOrderChange] = (0, import_react17.useState)((_b = initialState.columnOrder) !== null && _b !== void 0 ? _b : []);
  const [columnSizingInfo, onColumnSizingInfoChange] = (0, import_react17.useState)((_c = initialState.columnSizingInfo) !== null && _c !== void 0 ? _c : {});
  const [density, setDensity] = (0, import_react17.useState)((_d = initialState === null || initialState === void 0 ? void 0 : initialState.density) !== null && _d !== void 0 ? _d : "md");
  const [draggingColumn, setDraggingColumn] = (0, import_react17.useState)((_e = initialState.draggingColumn) !== null && _e !== void 0 ? _e : null);
  const [draggingRow, setDraggingRow] = (0, import_react17.useState)((_f = initialState.draggingRow) !== null && _f !== void 0 ? _f : null);
  const [editingCell, setEditingCell] = (0, import_react17.useState)((_g = initialState.editingCell) !== null && _g !== void 0 ? _g : null);
  const [editingRow, setEditingRow] = (0, import_react17.useState)((_h = initialState.editingRow) !== null && _h !== void 0 ? _h : null);
  const [globalFilterFn, setGlobalFilterFn] = (0, import_react17.useState)((_j = initialState.globalFilterFn) !== null && _j !== void 0 ? _j : "fuzzy");
  const [grouping, onGroupingChange] = (0, import_react17.useState)((_k = initialState.grouping) !== null && _k !== void 0 ? _k : []);
  const [hoveredColumn, setHoveredColumn] = (0, import_react17.useState)((_l = initialState.hoveredColumn) !== null && _l !== void 0 ? _l : null);
  const [hoveredRow, setHoveredRow] = (0, import_react17.useState)((_m = initialState.hoveredRow) !== null && _m !== void 0 ? _m : null);
  const [isFullScreen, setIsFullScreen] = (0, import_react17.useState)((_o = initialState === null || initialState === void 0 ? void 0 : initialState.isFullScreen) !== null && _o !== void 0 ? _o : false);
  const [pagination, onPaginationChange] = (0, import_react17.useState)((_p = initialState === null || initialState === void 0 ? void 0 : initialState.pagination) !== null && _p !== void 0 ? _p : { pageIndex: 0, pageSize: 10 });
  const [showAlertBanner, setShowAlertBanner] = (0, import_react17.useState)((_q = initialState === null || initialState === void 0 ? void 0 : initialState.showAlertBanner) !== null && _q !== void 0 ? _q : false);
  const [showColumnFilters, setShowColumnFilters] = (0, import_react17.useState)((_r = initialState === null || initialState === void 0 ? void 0 : initialState.showColumnFilters) !== null && _r !== void 0 ? _r : false);
  const [showGlobalFilter, setShowGlobalFilter] = (0, import_react17.useState)((_s = initialState === null || initialState === void 0 ? void 0 : initialState.showGlobalFilter) !== null && _s !== void 0 ? _s : false);
  const [showToolbarDropZone, setShowToolbarDropZone] = (0, import_react17.useState)((_t = initialState === null || initialState === void 0 ? void 0 : initialState.showToolbarDropZone) !== null && _t !== void 0 ? _t : false);
  definedTableOptions.state = Object.assign({
    columnFilterFns,
    columnOrder,
    columnSizingInfo,
    creatingRow,
    density,
    draggingColumn,
    draggingRow,
    editingCell,
    editingRow,
    globalFilterFn,
    grouping,
    hoveredColumn,
    hoveredRow,
    isFullScreen,
    pagination,
    showAlertBanner,
    showColumnFilters,
    showGlobalFilter,
    showToolbarDropZone
  }, definedTableOptions.state);
  const statefulTableOptions = definedTableOptions;
  const columnDefsRef = (0, import_react17.useRef)([]);
  statefulTableOptions.columns = statefulTableOptions.state.columnSizingInfo.isResizingColumn || statefulTableOptions.state.draggingColumn || statefulTableOptions.state.draggingRow ? columnDefsRef.current : prepareColumns({
    columnDefs: [
      ...[
        showRowPinningColumn(statefulTableOptions) && getMRT_RowPinningColumnDef(statefulTableOptions),
        showRowDragColumn(statefulTableOptions) && getMRT_RowDragColumnDef(statefulTableOptions),
        showRowActionsColumn(statefulTableOptions) && getMRT_RowActionsColumnDef(statefulTableOptions),
        showRowExpandColumn(statefulTableOptions) && getMRT_RowExpandColumnDef(statefulTableOptions),
        showRowSelectionColumn(statefulTableOptions) && getMRT_RowSelectColumnDef(statefulTableOptions),
        showRowNumbersColumn(statefulTableOptions) && getMRT_RowNumbersColumnDef(statefulTableOptions)
      ].filter(Boolean),
      ...statefulTableOptions.columns,
      ...[
        showRowSpacerColumn(statefulTableOptions) && getMRT_RowSpacerColumnDef(statefulTableOptions)
      ].filter(Boolean)
    ],
    tableOptions: statefulTableOptions
  });
  columnDefsRef.current = statefulTableOptions.columns;
  statefulTableOptions.data = (0, import_react17.useMemo)(() => (statefulTableOptions.state.isLoading || statefulTableOptions.state.showSkeletons) && !statefulTableOptions.data.length ? [
    ...Array(Math.min(statefulTableOptions.state.pagination.pageSize, 20)).fill(null)
  ].map(() => Object.assign({}, ...getAllLeafColumnDefs(statefulTableOptions.columns).map((col) => ({
    [getColumnId(col)]: null
  })))) : statefulTableOptions.data, [
    statefulTableOptions.data,
    statefulTableOptions.state.isLoading,
    statefulTableOptions.state.showSkeletons
  ]);
  const table = useReactTable(Object.assign(Object.assign({
    onColumnOrderChange,
    onColumnSizingInfoChange,
    onGroupingChange,
    onPaginationChange
  }, statefulTableOptions), { globalFilterFn: (_u = statefulTableOptions.filterFns) === null || _u === void 0 ? void 0 : _u[globalFilterFn !== null && globalFilterFn !== void 0 ? globalFilterFn : "fuzzy"] }));
  table.refs = {
    bottomToolbarRef,
    editInputRefs,
    filterInputRefs,
    lastSelectedRowId,
    searchInputRef,
    tableContainerRef,
    tableFooterRef,
    tableHeadCellRefs,
    tableHeadRef,
    tablePaperRef,
    topToolbarRef
  };
  table.setCreatingRow = (row) => {
    var _a2, _b2;
    let _row = row;
    if (row === true) {
      _row = createRow2(table);
    }
    (_b2 = (_a2 = statefulTableOptions === null || statefulTableOptions === void 0 ? void 0 : statefulTableOptions.onCreatingRowChange) === null || _a2 === void 0 ? void 0 : _a2.call(statefulTableOptions, _row)) !== null && _b2 !== void 0 ? _b2 : _setCreatingRow(_row);
  };
  table.setColumnFilterFns = (_v = statefulTableOptions.onColumnFilterFnsChange) !== null && _v !== void 0 ? _v : setColumnFilterFns;
  table.setDensity = (_w = statefulTableOptions.onDensityChange) !== null && _w !== void 0 ? _w : setDensity;
  table.setDraggingColumn = (_x = statefulTableOptions.onDraggingColumnChange) !== null && _x !== void 0 ? _x : setDraggingColumn;
  table.setDraggingRow = (_y = statefulTableOptions.onDraggingRowChange) !== null && _y !== void 0 ? _y : setDraggingRow;
  table.setEditingCell = (_z = statefulTableOptions.onEditingCellChange) !== null && _z !== void 0 ? _z : setEditingCell;
  table.setEditingRow = (_0 = statefulTableOptions.onEditingRowChange) !== null && _0 !== void 0 ? _0 : setEditingRow;
  table.setGlobalFilterFn = (_1 = statefulTableOptions.onGlobalFilterFnChange) !== null && _1 !== void 0 ? _1 : setGlobalFilterFn;
  table.setHoveredColumn = (_2 = statefulTableOptions.onHoveredColumnChange) !== null && _2 !== void 0 ? _2 : setHoveredColumn;
  table.setHoveredRow = (_3 = statefulTableOptions.onHoveredRowChange) !== null && _3 !== void 0 ? _3 : setHoveredRow;
  table.setIsFullScreen = (_4 = statefulTableOptions.onIsFullScreenChange) !== null && _4 !== void 0 ? _4 : setIsFullScreen;
  table.setShowAlertBanner = (_5 = statefulTableOptions.onShowAlertBannerChange) !== null && _5 !== void 0 ? _5 : setShowAlertBanner;
  table.setShowColumnFilters = (_6 = statefulTableOptions.onShowColumnFiltersChange) !== null && _6 !== void 0 ? _6 : setShowColumnFilters;
  table.setShowGlobalFilter = (_7 = statefulTableOptions.onShowGlobalFilterChange) !== null && _7 !== void 0 ? _7 : setShowGlobalFilter;
  table.setShowToolbarDropZone = (_8 = statefulTableOptions.onShowToolbarDropZoneChange) !== null && _8 !== void 0 ? _8 : setShowToolbarDropZone;
  useMRT_Effects(table);
  return table;
};
var useMantineReactTable = (tableOptions) => useMRT_TableInstance(useMRT_TableOptions(tableOptions));
var extraIndexRangeExtractor = (range, draggingIndex) => {
  const newIndexes = defaultRangeExtractor(range);
  if (draggingIndex === void 0)
    return newIndexes;
  if (draggingIndex >= 0 && draggingIndex < Math.max(range.startIndex - range.overscan, 0)) {
    newIndexes.unshift(draggingIndex);
  }
  if (draggingIndex >= 0 && draggingIndex > range.endIndex + range.overscan) {
    newIndexes.push(draggingIndex);
  }
  return newIndexes;
};
var useMRT_ColumnVirtualizer = (table) => {
  var _a, _b, _c, _d;
  const { getLeftLeafColumns, getRightLeafColumns, getState, getVisibleLeafColumns, options: { columnVirtualizerInstanceRef, columnVirtualizerOptions, enableColumnPinning, enableColumnVirtualization }, refs: { tableContainerRef } } = table;
  const { columnPinning, draggingColumn } = getState();
  if (!enableColumnVirtualization)
    return void 0;
  const columnVirtualizerProps = parseFromValuesOrFunc(columnVirtualizerOptions, {
    table
  });
  const visibleColumns = getVisibleLeafColumns();
  const [leftPinnedIndexes, rightPinnedIndexes] = (0, import_react17.useMemo)(() => enableColumnPinning ? [
    getLeftLeafColumns().map((c) => c.getPinnedIndex()),
    getRightLeafColumns().map((column) => visibleColumns.length - column.getPinnedIndex() - 1).sort((a, b) => a - b)
  ] : [[], []], [columnPinning, enableColumnPinning]);
  const numPinnedLeft = leftPinnedIndexes.length;
  const numPinnedRight = rightPinnedIndexes.length;
  const draggingColumnIndex = (0, import_react17.useMemo)(() => (draggingColumn === null || draggingColumn === void 0 ? void 0 : draggingColumn.id) ? visibleColumns.findIndex((c) => c.id === (draggingColumn === null || draggingColumn === void 0 ? void 0 : draggingColumn.id)) : void 0, [draggingColumn === null || draggingColumn === void 0 ? void 0 : draggingColumn.id]);
  const columnVirtualizer = useVirtualizer(Object.assign({ count: visibleColumns.length, estimateSize: (index) => visibleColumns[index].getSize(), getScrollElement: () => tableContainerRef.current, horizontal: true, overscan: 3, rangeExtractor: (0, import_react17.useCallback)((range) => {
    const newIndexes = extraIndexRangeExtractor(range, draggingColumnIndex);
    if (!numPinnedLeft && !numPinnedRight) {
      return newIndexes;
    }
    return [
      .../* @__PURE__ */ new Set([
        ...leftPinnedIndexes,
        ...newIndexes,
        ...rightPinnedIndexes
      ])
    ];
  }, [leftPinnedIndexes, rightPinnedIndexes, draggingColumnIndex]) }, columnVirtualizerProps));
  const virtualColumns = columnVirtualizer.getVirtualItems();
  columnVirtualizer.virtualColumns = virtualColumns;
  const numColumns = virtualColumns.length;
  if (numColumns) {
    const totalSize = columnVirtualizer.getTotalSize();
    const leftNonPinnedStart = ((_a = virtualColumns[numPinnedLeft]) === null || _a === void 0 ? void 0 : _a.start) || 0;
    const leftNonPinnedEnd = ((_b = virtualColumns[leftPinnedIndexes.length - 1]) === null || _b === void 0 ? void 0 : _b.end) || 0;
    const rightNonPinnedStart = ((_c = virtualColumns[numColumns - numPinnedRight]) === null || _c === void 0 ? void 0 : _c.start) || 0;
    const rightNonPinnedEnd = ((_d = virtualColumns[numColumns - numPinnedRight - 1]) === null || _d === void 0 ? void 0 : _d.end) || 0;
    columnVirtualizer.virtualPaddingLeft = leftNonPinnedStart - leftNonPinnedEnd;
    columnVirtualizer.virtualPaddingRight = totalSize - rightNonPinnedEnd - (numPinnedRight ? totalSize - rightNonPinnedStart : 0);
  }
  if (columnVirtualizerInstanceRef) {
    columnVirtualizerInstanceRef.current = columnVirtualizer;
  }
  return columnVirtualizer;
};
var useMRT_RowVirtualizer = (table, rows) => {
  var _a;
  const { getRowModel, getState, options: { enableRowVirtualization, renderDetailPanel, rowVirtualizerInstanceRef, rowVirtualizerOptions }, refs: { tableContainerRef } } = table;
  const { density, draggingRow, expanded } = getState();
  if (!enableRowVirtualization)
    return void 0;
  const rowVirtualizerProps = parseFromValuesOrFunc(rowVirtualizerOptions, {
    table
  });
  const rowCount = (_a = rows === null || rows === void 0 ? void 0 : rows.length) !== null && _a !== void 0 ? _a : getRowModel().rows.length;
  const normalRowHeight = density === "xs" ? 42.7 : density === "md" ? 54.7 : 70.7;
  const rowVirtualizer = useVirtualizer(Object.assign({ count: renderDetailPanel ? rowCount * 2 : rowCount, estimateSize: (index) => renderDetailPanel && index % 2 === 1 ? expanded === true ? 100 : 0 : normalRowHeight, getScrollElement: () => tableContainerRef.current, measureElement: typeof window !== "undefined" && navigator.userAgent.indexOf("Firefox") === -1 ? (element) => element === null || element === void 0 ? void 0 : element.getBoundingClientRect().height : void 0, overscan: 4, rangeExtractor: (0, import_react17.useCallback)((range) => {
    var _a2;
    return extraIndexRangeExtractor(range, (_a2 = draggingRow === null || draggingRow === void 0 ? void 0 : draggingRow.index) !== null && _a2 !== void 0 ? _a2 : 0);
  }, [draggingRow]) }, rowVirtualizerProps));
  rowVirtualizer.virtualRows = rowVirtualizer.getVirtualItems();
  if (rowVirtualizerInstanceRef) {
    rowVirtualizerInstanceRef.current = rowVirtualizer;
  }
  return rowVirtualizer;
};
var useMRT_Rows = (table) => {
  const { getRowModel, getState, options: { data, enableGlobalFilterRankedResults, positionCreatingRow } } = table;
  const { creatingRow, expanded, globalFilter, pagination, rowPinning, sorting } = getState();
  const rows = (0, import_react17.useMemo)(() => getMRT_Rows(table), [
    creatingRow,
    data,
    enableGlobalFilterRankedResults,
    expanded,
    getRowModel().rows,
    globalFilter,
    pagination.pageIndex,
    pagination.pageSize,
    positionCreatingRow,
    rowPinning,
    sorting
  ]);
  return rows;
};
var classes$y = { "root": "MRT_TablePaper-module_root__q0v5L" };
var classes$x = { "root": "MRT_TableContainer-module_root__JIsGB", "root-sticky": "MRT_TableContainer-module_root-sticky__uC4qx", "root-fullscreen": "MRT_TableContainer-module_root-fullscreen__aM8Jg" };
var classes$w = { "root": "MRT_Table-module_root__ms2uS", "root-grid": "MRT_Table-module_root-grid__2Pynz" };
var classes$v = { "root": "MRT_TableBody-module_root__kGhRy", "root-grid": "MRT_TableBody-module_root-grid__WdOGg", "root-no-rows": "MRT_TableBody-module_root-no-rows__iyi9K", "root-virtualized": "MRT_TableBody-module_root-virtualized__TxPAi", "empty-row-tr-grid": "MRT_TableBody-module_empty-row-tr-grid__LTgxw", "empty-row-td-grid": "MRT_TableBody-module_empty-row-td-grid__pzlgG", "empty-row-td-content": "MRT_TableBody-module_empty-row-td-content__Cc2XW", "pinned": "MRT_TableBody-module_pinned__XHpcs" };
var classes$u = { "root": "MRT_TableBodyRow-module_root__2c3D4", "root-grid": "MRT_TableBodyRow-module_root-grid__AwXTe", "root-virtualized": "MRT_TableBodyRow-module_root-virtualized__zYgxq" };
var classes$t = { "root": "MRT_TableBodyCell-module_root__Wf-zi", "root-grid": "MRT_TableBodyCell-module_root-grid__zIuC-", "root-virtualized": "MRT_TableBodyCell-module_root-virtualized__jLl8R", "root-data-col": "MRT_TableBodyCell-module_root-data-col__HHcxc", "root-nowrap": "MRT_TableBodyCell-module_root-nowrap__-k1Jo", "root-cursor-pointer": "MRT_TableBodyCell-module_root-cursor-pointer__4kw7J", "root-editable-hover": "MRT_TableBodyCell-module_root-editable-hover__2DKSa" };
var allowedTypes = ["string", "number"];
var allowedFilterVariants = ["text", "autocomplete"];
var MRT_TableBodyCellValue = ({ cell, renderedColumnIndex = 0, renderedRowIndex = 0, table }) => {
  var _a, _b;
  const { getState, options: { enableFilterMatchHighlighting, mantineHighlightProps } } = table;
  const { column, row } = cell;
  const { columnDef } = column;
  const { globalFilter, globalFilterFn } = getState();
  const filterValue = column.getFilterValue();
  const highlightProps = parseFromValuesOrFunc(mantineHighlightProps, {
    cell,
    column,
    row,
    table
  });
  let renderedCellValue = cell.getIsAggregated() && columnDef.AggregatedCell ? columnDef.AggregatedCell({
    cell,
    column,
    row,
    table
  }) : row.getIsGrouped() && !cell.getIsGrouped() ? null : cell.getIsGrouped() && columnDef.GroupedCell ? columnDef.GroupedCell({
    cell,
    column,
    row,
    table
  }) : void 0;
  const isGroupedValue = renderedCellValue !== void 0;
  if (!isGroupedValue) {
    renderedCellValue = cell.renderValue();
  }
  if (enableFilterMatchHighlighting && columnDef.enableFilterMatchHighlighting !== false && renderedCellValue && allowedTypes.includes(typeof renderedCellValue) && (filterValue && allowedTypes.includes(typeof filterValue) && allowedFilterVariants.includes(columnDef.filterVariant) || globalFilter && allowedTypes.includes(typeof globalFilter) && column.getCanGlobalFilter())) {
    let highlight = ((_b = (_a = column.getFilterValue()) !== null && _a !== void 0 ? _a : globalFilter) !== null && _b !== void 0 ? _b : "").toString();
    if ((filterValue ? columnDef._filterFn : globalFilterFn) === "fuzzy") {
      highlight = highlight.split(" ");
    }
    renderedCellValue = (0, import_jsx_runtime28.jsx)(Highlight, Object.assign({ color: "yellow.3", highlight }, highlightProps, { children: renderedCellValue === null || renderedCellValue === void 0 ? void 0 : renderedCellValue.toString() }));
  }
  if (columnDef.Cell && !isGroupedValue) {
    renderedCellValue = columnDef.Cell({
      cell,
      column,
      renderedCellValue,
      renderedColumnIndex,
      renderedRowIndex,
      row,
      table
    });
  }
  return renderedCellValue;
};
var classes$s = { "root": "MRT_CopyButton-module_root__mkXy4" };
var MRT_CopyButton = (_a) => {
  var { cell, children, table } = _a, rest = __rest(_a, ["cell", "children", "table"]);
  const { options: { localization: { clickToCopy, copiedToClipboard }, mantineCopyButtonProps } } = table;
  const { column, row } = cell;
  const { columnDef } = column;
  const arg = { cell, column, row, table };
  const buttonProps = Object.assign(Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineCopyButtonProps, arg)), parseFromValuesOrFunc(columnDef.mantineCopyButtonProps, arg)), rest);
  return (0, import_jsx_runtime28.jsx)(CopyButton, { value: cell.getValue(), children: ({ copied, copy }) => {
    var _a2;
    return (0, import_jsx_runtime28.jsx)(Tooltip, { color: copied ? "green" : void 0, label: (_a2 = buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.title) !== null && _a2 !== void 0 ? _a2 : copied ? copiedToClipboard : clickToCopy, openDelay: 1e3, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(UnstyledButton, Object.assign({}, buttonProps, { className: clsx_default("mrt-copy-button", classes$s.root, buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.className), onClick: (e) => {
      e.stopPropagation();
      copy();
    }, role: "presentation", title: void 0, children })) });
  } });
};
var MRT_EditCellTextInput = (_a) => {
  var _b;
  var { cell, table } = _a, rest = __rest(_a, ["cell", "table"]);
  const { getState, options: { createDisplayMode, editDisplayMode, mantineEditSelectProps, mantineEditTextInputProps }, refs: { editInputRefs }, setCreatingRow, setEditingCell, setEditingRow } = table;
  const { column, row } = cell;
  const { columnDef } = column;
  const { creatingRow, editingRow } = getState();
  const isCreating = (creatingRow === null || creatingRow === void 0 ? void 0 : creatingRow.id) === row.id;
  const isEditing = (editingRow === null || editingRow === void 0 ? void 0 : editingRow.id) === row.id;
  const isSelectEdit = columnDef.editVariant === "select";
  const [value, setValue] = (0, import_react17.useState)(() => cell.getValue());
  const arg = { cell, column, row, table };
  const textInputProps = Object.assign(Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineEditTextInputProps, arg)), parseFromValuesOrFunc(columnDef.mantineEditTextInputProps, arg)), rest);
  const selectProps = Object.assign(Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineEditSelectProps, arg)), parseFromValuesOrFunc(columnDef.mantineEditSelectProps, arg)), rest);
  const saveInputValueToRowCache = (newValue) => {
    row._valuesCache[column.id] = newValue;
    if (isCreating) {
      setCreatingRow(row);
    } else if (isEditing) {
      setEditingRow(row);
    }
  };
  const handleBlur = (event) => {
    var _a2;
    (_a2 = textInputProps.onBlur) === null || _a2 === void 0 ? void 0 : _a2.call(textInputProps, event);
    saveInputValueToRowCache(value);
    setEditingCell(null);
  };
  const handleEnterKeyDown = (event) => {
    var _a2, _b2;
    (_a2 = textInputProps.onKeyDown) === null || _a2 === void 0 ? void 0 : _a2.call(textInputProps, event);
    if (event.key === "Enter") {
      (_b2 = editInputRefs.current[cell.id]) === null || _b2 === void 0 ? void 0 : _b2.blur();
    }
  };
  if (columnDef.Edit) {
    return (_b = columnDef.Edit) === null || _b === void 0 ? void 0 : _b.call(columnDef, { cell, column, row, table });
  }
  const commonProps = {
    disabled: parseFromValuesOrFunc(columnDef.enableEditing, row) === false,
    label: ["custom", "modal"].includes(isCreating ? createDisplayMode : editDisplayMode) ? column.columnDef.header : void 0,
    name: cell.id,
    onClick: (e) => {
      var _a2;
      e.stopPropagation();
      (_a2 = textInputProps === null || textInputProps === void 0 ? void 0 : textInputProps.onClick) === null || _a2 === void 0 ? void 0 : _a2.call(textInputProps, e);
    },
    placeholder: !["custom", "modal"].includes(isCreating ? createDisplayMode : editDisplayMode) ? columnDef.header : void 0,
    value,
    variant: editDisplayMode === "table" ? "unstyled" : "default"
  };
  if (isSelectEdit) {
    return (
      // @ts-ignore
      (0, import_jsx_runtime28.jsx)(Select, Object.assign({}, commonProps, { searchable: true, value }, selectProps, { onBlur: handleBlur, onChange: (value2) => {
        var _a2;
        (_a2 = selectProps.onChange) === null || _a2 === void 0 ? void 0 : _a2.call(selectProps, value2);
        setValue(value2);
      }, onClick: (e) => {
        var _a2;
        e.stopPropagation();
        (_a2 = selectProps === null || selectProps === void 0 ? void 0 : selectProps.onClick) === null || _a2 === void 0 ? void 0 : _a2.call(selectProps, e);
      }, ref: (node) => {
        if (node) {
          editInputRefs.current[cell.id] = node;
          if (selectProps.ref) {
            selectProps.ref.current = node;
          }
        }
      } }))
    );
  }
  return (0, import_jsx_runtime28.jsx)(TextInput, Object.assign({}, commonProps, { onKeyDown: handleEnterKeyDown, value: value !== null && value !== void 0 ? value : "" }, textInputProps, { onBlur: handleBlur, onChange: (event) => {
    var _a2;
    (_a2 = textInputProps.onChange) === null || _a2 === void 0 ? void 0 : _a2.call(textInputProps, event);
    setValue(event.target.value);
  }, onClick: (event) => {
    var _a2;
    event.stopPropagation();
    (_a2 = textInputProps === null || textInputProps === void 0 ? void 0 : textInputProps.onClick) === null || _a2 === void 0 ? void 0 : _a2.call(textInputProps, event);
  }, ref: (node) => {
    if (node) {
      editInputRefs.current[cell.id] = node;
      if (textInputProps.ref) {
        textInputProps.ref.current = node;
      }
    }
  } }));
};
var MRT_TableBodyCell = (_a) => {
  var _b, _c, _d, _e, _f, _g, _h;
  var { cell, numRows = 1, renderedColumnIndex = 0, renderedRowIndex = 0, rowRef, table, virtualCell } = _a, rest = __rest(_a, ["cell", "numRows", "renderedColumnIndex", "renderedRowIndex", "rowRef", "table", "virtualCell"]);
  const direction = useDirection();
  const { getState, options: { columnResizeDirection, columnResizeMode, createDisplayMode, editDisplayMode, enableClickToCopy, enableColumnOrdering, enableColumnPinning, enableEditing, enableGrouping, layoutMode, mantineSkeletonProps, mantineTableBodyCellProps }, refs: { editInputRefs }, setEditingCell, setHoveredColumn } = table;
  const { columnSizingInfo, creatingRow, density, draggingColumn, editingCell, editingRow, hoveredColumn, isLoading, showSkeletons } = getState();
  const { column, row } = cell;
  const { columnDef } = column;
  const { columnDefType } = columnDef;
  const args = {
    cell,
    column,
    renderedColumnIndex,
    renderedRowIndex,
    row,
    table
  };
  const tableCellProps = Object.assign(Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineTableBodyCellProps, args)), parseFromValuesOrFunc(columnDef.mantineTableBodyCellProps, args)), rest);
  const skeletonProps = parseFromValuesOrFunc(mantineSkeletonProps, args);
  const [skeletonWidth, setSkeletonWidth] = (0, import_react17.useState)(100);
  (0, import_react17.useEffect)(() => {
    if (!isLoading && !showSkeletons || skeletonWidth !== 100)
      return;
    const size = column.getSize();
    setSkeletonWidth(columnDefType === "display" ? size / 2 : Math.round(Math.random() * (size - size / 3) + size / 3));
  }, [isLoading, showSkeletons]);
  const widthStyles = {
    minWidth: `max(calc(var(--col-${parseCSSVarId(column === null || column === void 0 ? void 0 : column.id)}-size) * 1px), ${(_b = columnDef.minSize) !== null && _b !== void 0 ? _b : 30}px)`,
    width: `calc(var(--col-${parseCSSVarId(column.id)}-size) * 1px)`
  };
  if (layoutMode === "grid") {
    widthStyles.flex = `${[0, false].includes(columnDef.grow) ? 0 : `var(--col-${parseCSSVarId(column.id)}-size)`} 0 auto`;
  } else if (layoutMode === "grid-no-grow") {
    widthStyles.flex = `${+(columnDef.grow || 0)} 0 auto`;
  }
  const isDraggingColumn = (draggingColumn === null || draggingColumn === void 0 ? void 0 : draggingColumn.id) === column.id;
  const isHoveredColumn = (hoveredColumn === null || hoveredColumn === void 0 ? void 0 : hoveredColumn.id) === column.id;
  const isColumnPinned = enableColumnPinning && columnDef.columnDefType !== "group" && column.getIsPinned();
  const isEditable = !cell.getIsPlaceholder() && parseFromValuesOrFunc(enableEditing, row) && parseFromValuesOrFunc(columnDef.enableEditing, row) !== false;
  const isEditing = isEditable && !["custom", "modal"].includes(editDisplayMode) && (editDisplayMode === "table" || (editingRow === null || editingRow === void 0 ? void 0 : editingRow.id) === row.id || (editingCell === null || editingCell === void 0 ? void 0 : editingCell.id) === cell.id) && !row.getIsGrouped();
  const isCreating = isEditable && createDisplayMode === "row" && (creatingRow === null || creatingRow === void 0 ? void 0 : creatingRow.id) === row.id;
  const showClickToCopyButton = parseFromValuesOrFunc(enableClickToCopy, cell) || parseFromValuesOrFunc(columnDef.enableClickToCopy, cell) && parseFromValuesOrFunc(columnDef.enableClickToCopy, cell) !== false;
  const handleDoubleClick = (event) => {
    var _a2;
    (_a2 = tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.onDoubleClick) === null || _a2 === void 0 ? void 0 : _a2.call(tableCellProps, event);
    if (isEditable && editDisplayMode === "cell") {
      setEditingCell(cell);
      setTimeout(() => {
        var _a3;
        const textField = editInputRefs.current[cell.id];
        if (textField) {
          textField.focus();
          (_a3 = textField.select) === null || _a3 === void 0 ? void 0 : _a3.call(textField);
        }
      }, 100);
    }
  };
  const handleDragEnter = (e) => {
    var _a2;
    (_a2 = tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.onDragEnter) === null || _a2 === void 0 ? void 0 : _a2.call(tableCellProps, e);
    if (enableGrouping && (hoveredColumn === null || hoveredColumn === void 0 ? void 0 : hoveredColumn.id) === "drop-zone") {
      setHoveredColumn(null);
    }
    if (enableColumnOrdering && draggingColumn) {
      setHoveredColumn(columnDef.enableColumnOrdering !== false ? column : null);
    }
  };
  const cellValueProps = {
    cell,
    renderedColumnIndex,
    renderedRowIndex,
    table
  };
  return (0, import_jsx_runtime28.jsx)(TableTd, Object.assign({ "data-column-pinned": isColumnPinned || void 0, "data-dragging-column": isDraggingColumn || void 0, "data-first-right-pinned": isColumnPinned === "right" && column.getIsLastColumn(isColumnPinned) || void 0, "data-hovered-column-target": isHoveredColumn || void 0, "data-index": renderedColumnIndex, "data-last-left-pinned": isColumnPinned === "left" && column.getIsLastColumn(isColumnPinned) || void 0, "data-last-row": renderedRowIndex === numRows - 1 || void 0, "data-resizing": columnResizeMode === "onChange" && (columnSizingInfo === null || columnSizingInfo === void 0 ? void 0 : columnSizingInfo.isResizingColumn) === column.id && columnResizeDirection || void 0 }, tableCellProps, { __vars: Object.assign({ "--mrt-cell-align": (_c = tableCellProps.align) !== null && _c !== void 0 ? _c : direction.dir === "rtl" ? "right" : "left", "--mrt-table-cell-left": isColumnPinned === "left" ? `${column.getStart(isColumnPinned)}` : void 0, "--mrt-table-cell-right": isColumnPinned === "right" ? `${column.getAfter(isColumnPinned)}` : void 0 }, tableCellProps.__vars), className: clsx_default(classes$t.root, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith("grid")) && classes$t["root-grid"], virtualCell && classes$t["root-virtualized"], isEditable && editDisplayMode === "cell" && classes$t["root-cursor-pointer"], isEditable && ["cell", "table"].includes(editDisplayMode !== null && editDisplayMode !== void 0 ? editDisplayMode : "") && columnDefType !== "display" && classes$t["root-editable-hover"], columnDefType === "data" && classes$t["root-data-col"], density === "xs" && classes$t["root-nowrap"], tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.className), onDoubleClick: handleDoubleClick, onDragEnter: handleDragEnter, style: (theme) => Object.assign(Object.assign({}, widthStyles), parseFromValuesOrFunc(tableCellProps.style, theme)), children: (_d = tableCellProps.children) !== null && _d !== void 0 ? _d : (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [cell.getIsPlaceholder() ? (_f = (_e = columnDef.PlaceholderCell) === null || _e === void 0 ? void 0 : _e.call(columnDef, { cell, column, row, table })) !== null && _f !== void 0 ? _f : null : showSkeletons !== false && (isLoading || showSkeletons) ? (0, import_jsx_runtime28.jsx)(Skeleton, Object.assign({ height: 20, width: skeletonWidth }, skeletonProps)) : columnDefType === "display" && (["mrt-row-expand", "mrt-row-numbers", "mrt-row-select"].includes(column.id) || !row.getIsGrouped()) ? (_g = columnDef.Cell) === null || _g === void 0 ? void 0 : _g.call(columnDef, Object.assign({
    column,
    renderedCellValue: cell.renderValue(),
    row,
    rowRef
  }, cellValueProps)) : isCreating || isEditing ? (0, import_jsx_runtime28.jsx)(MRT_EditCellTextInput, { cell, table }) : showClickToCopyButton && columnDef.enableClickToCopy !== false ? (0, import_jsx_runtime28.jsx)(MRT_CopyButton, { cell, table, children: (0, import_jsx_runtime28.jsx)(MRT_TableBodyCellValue, Object.assign({}, cellValueProps)) }) : (0, import_jsx_runtime28.jsx)(MRT_TableBodyCellValue, Object.assign({}, cellValueProps)), cell.getIsGrouped() && !columnDef.GroupedCell && (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [" (", (_h = row.subRows) === null || _h === void 0 ? void 0 : _h.length, ")"] })] }) }));
};
var Memo_MRT_TableBodyCell = (0, import_react17.memo)(MRT_TableBodyCell, (prev, next2) => next2.cell === prev.cell);
var classes$r = { "root": "MRT_TableDetailPanel-module_root__vQAlM", "root-grid": "MRT_TableDetailPanel-module_root-grid__7UMC6", "root-virtual-row": "MRT_TableDetailPanel-module_root-virtual-row__r-X4Z", "inner": "MRT_TableDetailPanel-module_inner__o-Fk-", "inner-grid": "MRT_TableDetailPanel-module_inner-grid__WLZgF", "inner-expanded": "MRT_TableDetailPanel-module_inner-expanded__6tg9T", "inner-virtual": "MRT_TableDetailPanel-module_inner-virtual__TItRy" };
var MRT_TableDetailPanel = (_a) => {
  var _b, _c;
  var { parentRowRef, renderedRowIndex = 0, row, rowVirtualizer, striped, table, virtualRow } = _a, rest = __rest(_a, ["parentRowRef", "renderedRowIndex", "row", "rowVirtualizer", "striped", "table", "virtualRow"]);
  const { getState, getVisibleLeafColumns, options: { layoutMode, mantineDetailPanelProps, mantineTableBodyRowProps, renderDetailPanel } } = table;
  const { isLoading } = getState();
  const tableRowProps = parseFromValuesOrFunc(mantineTableBodyRowProps, {
    isDetailPanel: true,
    row,
    table
  });
  const tableCellProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineDetailPanelProps, {
    row,
    table
  })), rest);
  const DetailPanel = !isLoading && row.getIsExpanded() && (renderDetailPanel === null || renderDetailPanel === void 0 ? void 0 : renderDetailPanel({ row, table }));
  return (0, import_jsx_runtime28.jsx)(TableTr, Object.assign({ "data-index": renderDetailPanel ? renderedRowIndex * 2 + 1 : renderedRowIndex, "data-striped": striped, ref: (node) => {
    var _a2;
    if (node) {
      (_a2 = rowVirtualizer === null || rowVirtualizer === void 0 ? void 0 : rowVirtualizer.measureElement) === null || _a2 === void 0 ? void 0 : _a2.call(rowVirtualizer, node);
    }
  } }, tableRowProps, { __vars: Object.assign({ "--mrt-parent-row-height": virtualRow ? `${(_c = (_b = parentRowRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect()) === null || _c === void 0 ? void 0 : _c.height}px` : void 0, "--mrt-virtual-row-start": virtualRow ? `${virtualRow.start}px` : void 0 }, tableRowProps === null || tableRowProps === void 0 ? void 0 : tableRowProps.__vars), className: clsx_default("mantine-Table-tr-detail-panel", classes$r.root, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith("grid")) && classes$r["root-grid"], virtualRow && classes$r["root-virtual-row"], tableRowProps === null || tableRowProps === void 0 ? void 0 : tableRowProps.className), children: (0, import_jsx_runtime28.jsx)(TableTd, Object.assign({ colSpan: getVisibleLeafColumns().length, component: "td" }, tableCellProps, { __vars: {
    "--mrt-inner-width": `${table.getTotalSize()}px`
  }, className: clsx_default("mantine-Table-td-detail-panel", classes$r.inner, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith("grid")) && classes$r["inner-grid"], row.getIsExpanded() && classes$r["inner-expanded"], virtualRow && classes$r["inner-virtual"]), p: row.getIsExpanded() && DetailPanel ? "md" : 0, children: rowVirtualizer ? row.getIsExpanded() && DetailPanel : (0, import_jsx_runtime28.jsx)(Collapse, { in: row.getIsExpanded(), children: DetailPanel }) })) }));
};
var MRT_TableBodyRow = (_a) => {
  var _b, _c, _d;
  var { columnVirtualizer, numRows, pinnedRowIds, renderedRowIndex = 0, row, rowVirtualizer, table, tableProps, virtualRow } = _a, rest = __rest(_a, ["columnVirtualizer", "numRows", "pinnedRowIds", "renderedRowIndex", "row", "rowVirtualizer", "table", "tableProps", "virtualRow"]);
  const { getState, options: { enableRowOrdering, enableRowPinning, enableStickyFooter, enableStickyHeader, layoutMode, mantineTableBodyRowProps, memoMode, renderDetailPanel, rowPinningDisplayMode }, refs: { tableFooterRef, tableHeadRef }, setHoveredRow } = table;
  const { density, draggingColumn, draggingRow, editingCell, editingRow, hoveredRow, isFullScreen, rowPinning } = getState();
  const visibleCells = row.getVisibleCells();
  const { virtualColumns, virtualPaddingLeft, virtualPaddingRight } = columnVirtualizer !== null && columnVirtualizer !== void 0 ? columnVirtualizer : {};
  const isRowSelected2 = getIsRowSelected({ row, table });
  const isRowPinned = enableRowPinning && row.getIsPinned();
  const isRowStickyPinned = isRowPinned && (rowPinningDisplayMode === null || rowPinningDisplayMode === void 0 ? void 0 : rowPinningDisplayMode.includes("sticky")) && "sticky";
  const isDraggingRow = (draggingRow === null || draggingRow === void 0 ? void 0 : draggingRow.id) === row.id;
  const isHoveredRow = (hoveredRow === null || hoveredRow === void 0 ? void 0 : hoveredRow.id) === row.id;
  const tableRowProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineTableBodyRowProps, {
    renderedRowIndex,
    row,
    table
  })), rest);
  const [bottomPinnedIndex, topPinnedIndex] = (0, import_react17.useMemo)(() => {
    if (!enableRowPinning || !isRowStickyPinned || !pinnedRowIds || !row.getIsPinned())
      return [];
    return [
      [...pinnedRowIds].reverse().indexOf(row.id),
      pinnedRowIds.indexOf(row.id)
    ];
  }, [pinnedRowIds, rowPinning]);
  const tableHeadHeight = (enableStickyHeader || isFullScreen) && ((_b = tableHeadRef.current) === null || _b === void 0 ? void 0 : _b.clientHeight) || 0;
  const tableFooterHeight = enableStickyFooter && ((_c = tableFooterRef.current) === null || _c === void 0 ? void 0 : _c.clientHeight) || 0;
  const rowHeight = (
    // @ts-ignore
    parseInt((_d = tableRowProps === null || tableRowProps === void 0 ? void 0 : tableRowProps.style) === null || _d === void 0 ? void 0 : _d.height, 10) || (density === "xs" ? 37 : density === "md" ? 53 : 69)
  );
  const handleDragEnter = (_e) => {
    if (enableRowOrdering && draggingRow) {
      setHoveredRow(row);
    }
  };
  const rowRef = (0, import_react17.useRef)(null);
  let striped = tableProps.striped;
  if (striped) {
    if (striped === true) {
      striped = "odd";
    }
    if (striped === "odd" && renderedRowIndex % 2 !== 0) {
      striped = false;
    }
    if (striped === "even" && renderedRowIndex % 2 === 0) {
      striped = false;
    }
  }
  return (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [(0, import_jsx_runtime28.jsxs)(TableTr, Object.assign({ "data-dragging-row": isDraggingRow || void 0, "data-hovered-row-target": isHoveredRow || void 0, "data-index": renderDetailPanel ? renderedRowIndex * 2 : renderedRowIndex, "data-row-pinned": isRowStickyPinned || isRowPinned || void 0, "data-selected": isRowSelected2 || void 0, "data-striped": striped, onDragEnter: handleDragEnter, ref: (node) => {
    if (node) {
      rowRef.current = node;
      rowVirtualizer === null || rowVirtualizer === void 0 ? void 0 : rowVirtualizer.measureElement(node);
    }
  } }, tableRowProps, { __vars: Object.assign(Object.assign({}, tableRowProps === null || tableRowProps === void 0 ? void 0 : tableRowProps.__vars), { "--mrt-pinned-row-bottom": !virtualRow && bottomPinnedIndex !== void 0 && isRowPinned ? `${bottomPinnedIndex * rowHeight + (enableStickyFooter ? tableFooterHeight - 1 : 0)}` : void 0, "--mrt-pinned-row-top": virtualRow ? void 0 : topPinnedIndex !== void 0 && isRowPinned ? `${topPinnedIndex * rowHeight + (enableStickyHeader || isFullScreen ? tableHeadHeight - 1 : 0)}` : void 0, "--mrt-virtual-row-start": virtualRow ? `${virtualRow.start}` : void 0 }), className: clsx_default(classes$u.root, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith("grid")) && classes$u["root-grid"], virtualRow && classes$u["root-virtualized"], tableRowProps === null || tableRowProps === void 0 ? void 0 : tableRowProps.className), children: [virtualPaddingLeft ? (0, import_jsx_runtime28.jsx)(Box, { component: "td", display: "flex", w: virtualPaddingLeft }) : null, (virtualColumns !== null && virtualColumns !== void 0 ? virtualColumns : row.getVisibleCells()).map((cellOrVirtualCell, renderedColumnIndex) => {
    let cell = cellOrVirtualCell;
    if (columnVirtualizer) {
      renderedColumnIndex = cellOrVirtualCell.index;
      cell = visibleCells[renderedColumnIndex];
    }
    const cellProps = {
      cell,
      numRows,
      renderedColumnIndex,
      renderedRowIndex,
      rowRef,
      table,
      virtualCell: columnVirtualizer ? cellOrVirtualCell : void 0
    };
    return memoMode === "cells" && cell.column.columnDef.columnDefType === "data" && !draggingColumn && !draggingRow && (editingCell === null || editingCell === void 0 ? void 0 : editingCell.id) !== cell.id && (editingRow === null || editingRow === void 0 ? void 0 : editingRow.id) !== row.id ? (0, import_jsx_runtime28.jsx)(Memo_MRT_TableBodyCell, Object.assign({}, cellProps), cell.id) : (0, import_jsx_runtime28.jsx)(MRT_TableBodyCell, Object.assign({}, cellProps), cell.id);
  }), virtualPaddingRight ? (0, import_jsx_runtime28.jsx)(Box, { component: "td", display: "flex", w: virtualPaddingRight }) : null] })), renderDetailPanel && !row.getIsGrouped() && (0, import_jsx_runtime28.jsx)(MRT_TableDetailPanel, { parentRowRef: rowRef, renderedRowIndex, row, rowVirtualizer, striped, table, virtualRow })] });
};
var Memo_MRT_TableBodyRow = (0, import_react17.memo)(MRT_TableBodyRow, (prev, next2) => prev.row === next2.row);
var MRT_TableBody = (_a) => {
  var _b, _c, _d, _e, _f;
  var { columnVirtualizer, table, tableProps } = _a, rest = __rest(_a, ["columnVirtualizer", "table", "tableProps"]);
  const { getBottomRows, getIsSomeRowsPinned, getRowModel, getState, getTopRows, options: { enableStickyFooter, enableStickyHeader, layoutMode, localization, mantineTableBodyProps, memoMode, renderDetailPanel, renderEmptyRowsFallback, rowPinningDisplayMode }, refs: { tableFooterRef, tableHeadRef, tablePaperRef } } = table;
  const { columnFilters, globalFilter, isFullScreen, rowPinning } = getState();
  const tableBodyProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineTableBodyProps, { table })), rest);
  const tableHeadHeight = (enableStickyHeader || isFullScreen) && ((_b = tableHeadRef.current) === null || _b === void 0 ? void 0 : _b.clientHeight) || 0;
  const tableFooterHeight = enableStickyFooter && ((_c = tableFooterRef.current) === null || _c === void 0 ? void 0 : _c.clientHeight) || 0;
  const pinnedRowIds = (0, import_react17.useMemo)(() => {
    var _a2, _b2;
    if (!((_a2 = rowPinning.bottom) === null || _a2 === void 0 ? void 0 : _a2.length) && !((_b2 = rowPinning.top) === null || _b2 === void 0 ? void 0 : _b2.length))
      return [];
    return getRowModel().rows.filter((row) => row.getIsPinned()).map((r) => r.id);
  }, [rowPinning, getRowModel().rows]);
  const rows = useMRT_Rows(table);
  const rowVirtualizer = useMRT_RowVirtualizer(table, rows);
  const { virtualRows } = rowVirtualizer !== null && rowVirtualizer !== void 0 ? rowVirtualizer : {};
  const commonRowProps = {
    columnVirtualizer,
    numRows: rows.length,
    table,
    tableProps
  };
  return (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [!(rowPinningDisplayMode === null || rowPinningDisplayMode === void 0 ? void 0 : rowPinningDisplayMode.includes("sticky")) && getIsSomeRowsPinned("top") && (0, import_jsx_runtime28.jsx)(TableTbody, Object.assign({}, tableBodyProps, { __vars: Object.assign({ "--mrt-table-head-height": `${tableHeadHeight}` }, tableBodyProps === null || tableBodyProps === void 0 ? void 0 : tableBodyProps.__vars), className: clsx_default(classes$v.pinned, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith("grid")) && classes$v["root-grid"], tableBodyProps === null || tableBodyProps === void 0 ? void 0 : tableBodyProps.className), children: getTopRows().map((row, renderedRowIndex) => {
    const rowProps = Object.assign(Object.assign({}, commonRowProps), {
      renderedRowIndex,
      row
    });
    return memoMode === "rows" ? (0, import_jsx_runtime28.jsx)(Memo_MRT_TableBodyRow, Object.assign({}, rowProps), row.id) : (0, import_jsx_runtime28.jsx)(MRT_TableBodyRow, Object.assign({}, rowProps), row.id);
  }) })), (0, import_jsx_runtime28.jsx)(TableTbody, Object.assign({}, tableBodyProps, { __vars: Object.assign({ "--mrt-table-body-height": rowVirtualizer ? `${rowVirtualizer.getTotalSize()}px` : void 0 }, tableBodyProps === null || tableBodyProps === void 0 ? void 0 : tableBodyProps.__vars), className: clsx_default(classes$v.root, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith("grid")) && classes$v["root-grid"], !rows.length && classes$v["root-no-rows"], rowVirtualizer && classes$v["root-virtualized"], tableBodyProps === null || tableBodyProps === void 0 ? void 0 : tableBodyProps.className), children: (_d = tableBodyProps === null || tableBodyProps === void 0 ? void 0 : tableBodyProps.children) !== null && _d !== void 0 ? _d : !rows.length ? (0, import_jsx_runtime28.jsx)("tr", { className: clsx_default("mrt-table-body-row", (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith("grid")) && classes$v["empty-row-tr-grid"]), children: (0, import_jsx_runtime28.jsx)("td", { className: clsx_default("mrt-table-body-cell", (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith("grid")) && classes$v["empty-row-td-grid"]), colSpan: table.getVisibleLeafColumns().length, children: (_e = renderEmptyRowsFallback === null || renderEmptyRowsFallback === void 0 ? void 0 : renderEmptyRowsFallback({ table })) !== null && _e !== void 0 ? _e : (0, import_jsx_runtime28.jsx)(Text, { __vars: {
    "--mrt-paper-width": `${(_f = tablePaperRef.current) === null || _f === void 0 ? void 0 : _f.clientWidth}`
  }, className: clsx_default(classes$v["empty-row-td-content"]), children: globalFilter || columnFilters.length ? localization.noResultsFound : localization.noRecordsToDisplay }) }) }) : (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: (virtualRows !== null && virtualRows !== void 0 ? virtualRows : rows).map((rowOrVirtualRow, renderedRowIndex) => {
    if (rowVirtualizer) {
      if (renderDetailPanel) {
        if (rowOrVirtualRow.index % 2 === 1) {
          return null;
        } else {
          renderedRowIndex = rowOrVirtualRow.index / 2;
        }
      } else {
        renderedRowIndex = rowOrVirtualRow.index;
      }
    }
    const row = rowVirtualizer ? rows[renderedRowIndex] : rowOrVirtualRow;
    const props = Object.assign(Object.assign({}, commonRowProps), {
      pinnedRowIds,
      renderedRowIndex,
      row,
      rowVirtualizer,
      virtualRow: rowVirtualizer ? rowOrVirtualRow : void 0
    });
    const key = `${row.id}-${row.index}`;
    return memoMode === "rows" ? (0, import_jsx_runtime28.jsx)(Memo_MRT_TableBodyRow, Object.assign({}, props), key) : (0, import_jsx_runtime28.jsx)(MRT_TableBodyRow, Object.assign({}, props), key);
  }) }) })), !(rowPinningDisplayMode === null || rowPinningDisplayMode === void 0 ? void 0 : rowPinningDisplayMode.includes("sticky")) && getIsSomeRowsPinned("bottom") && (0, import_jsx_runtime28.jsx)(TableTbody, Object.assign({}, tableBodyProps, { __vars: Object.assign({ "--mrt-table-footer-height": `${tableFooterHeight}` }, tableBodyProps === null || tableBodyProps === void 0 ? void 0 : tableBodyProps.__vars), className: clsx_default(classes$v.pinned, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith("grid")) && classes$v["root-grid"], tableBodyProps === null || tableBodyProps === void 0 ? void 0 : tableBodyProps.className), children: getBottomRows().map((row, renderedRowIndex) => {
    const props = Object.assign(Object.assign({}, commonRowProps), {
      renderedRowIndex,
      row
    });
    return memoMode === "rows" ? (0, import_jsx_runtime28.jsx)(Memo_MRT_TableBodyRow, Object.assign({}, props), row.id) : (0, import_jsx_runtime28.jsx)(MRT_TableBodyRow, Object.assign({}, props), row.id);
  }) }))] });
};
var Memo_MRT_TableBody = (0, import_react17.memo)(MRT_TableBody, (prev, next2) => prev.table.options.data === next2.table.options.data);
var classes$q = { "root": "MRT_TableFooter-module_root__-JXpw", "grid": "MRT_TableFooter-module_grid__J3Ga-", "sticky": "MRT_TableFooter-module_sticky__GcoK6" };
var classes$p = { "root": "MRT_TableFooterRow-module_root__EuoPr", "layout-mode-grid": "MRT_TableFooterRow-module_layout-mode-grid__dUEMF" };
var classes$o = { "root": "MRT_TableFooterCell-module_root__d8Scs", "grid": "MRT_TableFooterCell-module_grid__H9jLk", "group": "MRT_TableFooterCell-module_group__l3-p-" };
var MRT_TableFooterCell = (_a) => {
  var _b, _c, _d, _e, _f;
  var { footer, renderedColumnIndex, table } = _a, rest = __rest(_a, ["footer", "renderedColumnIndex", "table"]);
  const direction = useDirection();
  const { options: { enableColumnPinning, layoutMode, mantineTableFooterCellProps } } = table;
  const { column } = footer;
  const { columnDef } = column;
  const { columnDefType } = columnDef;
  const isColumnPinned = enableColumnPinning && columnDef.columnDefType !== "group" && column.getIsPinned();
  const args = { column, table };
  const tableCellProps = Object.assign(Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineTableFooterCellProps, args)), parseFromValuesOrFunc(columnDef.mantineTableFooterCellProps, args)), rest);
  const widthStyles = {
    minWidth: `max(calc(var(--header-${parseCSSVarId(footer === null || footer === void 0 ? void 0 : footer.id)}-size) * 1px), ${(_b = columnDef.minSize) !== null && _b !== void 0 ? _b : 30}px)`,
    width: `calc(var(--header-${parseCSSVarId(footer.id)}-size) * 1px)`
  };
  if (layoutMode === "grid") {
    widthStyles.flex = `${[0, false].includes(columnDef.grow) ? 0 : `var(--header-${parseCSSVarId(footer.id)}-size)`} 0 auto`;
  } else if (layoutMode === "grid-no-grow") {
    widthStyles.flex = `${+(columnDef.grow || 0)} 0 auto`;
  }
  return (0, import_jsx_runtime28.jsx)(TableTh, Object.assign({ colSpan: footer.colSpan, "data-column-pinned": isColumnPinned || void 0, "data-first-right-pinned": isColumnPinned === "right" && column.getIsLastColumn(isColumnPinned) || void 0, "data-index": renderedColumnIndex, "data-last-left-pinned": isColumnPinned === "left" && column.getIsLastColumn(isColumnPinned) || void 0 }, tableCellProps, { __vars: Object.assign({ "--mrt-cell-align": (_c = tableCellProps.align) !== null && _c !== void 0 ? _c : columnDefType === "group" ? "center" : direction.dir === "rtl" ? "right" : "left", "--mrt-table-cell-left": isColumnPinned === "left" ? `${column.getStart(isColumnPinned)}` : void 0, "--mrt-table-cell-right": isColumnPinned === "right" ? `${column.getAfter(isColumnPinned)}` : void 0 }, tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.__vars), className: clsx_default(classes$o.root, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith("grid")) && classes$o.grid, columnDefType === "group" && classes$o.group, tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.className), style: (theme) => Object.assign(Object.assign({}, widthStyles), parseFromValuesOrFunc(tableCellProps.style, theme)), children: (_d = tableCellProps.children) !== null && _d !== void 0 ? _d : footer.isPlaceholder ? null : (_f = (_e = parseFromValuesOrFunc(columnDef.Footer, {
    column,
    footer,
    table
  })) !== null && _e !== void 0 ? _e : columnDef.footer) !== null && _f !== void 0 ? _f : null }));
};
var MRT_TableFooterRow = (_a) => {
  var _b;
  var { columnVirtualizer, footerGroup, table } = _a, rest = __rest(_a, ["columnVirtualizer", "footerGroup", "table"]);
  const { options: { layoutMode, mantineTableFooterRowProps } } = table;
  const { virtualColumns, virtualPaddingLeft, virtualPaddingRight } = columnVirtualizer !== null && columnVirtualizer !== void 0 ? columnVirtualizer : {};
  if (!((_b = footerGroup.headers) === null || _b === void 0 ? void 0 : _b.some((header) => typeof header.column.columnDef.footer === "string" && !!header.column.columnDef.footer || header.column.columnDef.Footer))) {
    return null;
  }
  const tableRowProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineTableFooterRowProps, {
    footerGroup,
    table
  })), rest);
  return (0, import_jsx_runtime28.jsxs)(TableTr, Object.assign({ className: clsx_default(classes$p.root, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith("grid")) && classes$p["layout-mode-grid"]) }, tableRowProps, { children: [virtualPaddingLeft ? (0, import_jsx_runtime28.jsx)(Box, { component: "th", display: "flex", w: virtualPaddingLeft }) : null, (virtualColumns !== null && virtualColumns !== void 0 ? virtualColumns : footerGroup.headers).map((footerOrVirtualFooter, renderedColumnIndex) => {
    let footer = footerOrVirtualFooter;
    if (columnVirtualizer) {
      renderedColumnIndex = footerOrVirtualFooter.index;
      footer = footerGroup.headers[renderedColumnIndex];
    }
    return (0, import_jsx_runtime28.jsx)(MRT_TableFooterCell, { footer, renderedColumnIndex, table }, footer.id);
  }), virtualPaddingRight ? (0, import_jsx_runtime28.jsx)(Box, { component: "th", display: "flex", w: virtualPaddingRight }) : null] }));
};
var MRT_TableFooter = (_a) => {
  var { columnVirtualizer, table } = _a, rest = __rest(_a, ["columnVirtualizer", "table"]);
  const { getFooterGroups, getState, options: { enableStickyFooter, layoutMode, mantineTableFooterProps }, refs: { tableFooterRef } } = table;
  const { isFullScreen } = getState();
  const tableFooterProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineTableFooterProps, {
    table
  })), rest);
  const stickFooter = (isFullScreen || enableStickyFooter) && enableStickyFooter !== false;
  return (0, import_jsx_runtime28.jsx)(TableTfoot, Object.assign({}, tableFooterProps, { className: clsx_default(classes$q.root, tableFooterProps === null || tableFooterProps === void 0 ? void 0 : tableFooterProps.className, stickFooter && classes$q.sticky, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith("grid")) && classes$q.grid), ref: (ref) => {
    tableFooterRef.current = ref;
    if (tableFooterProps === null || tableFooterProps === void 0 ? void 0 : tableFooterProps.ref) {
      tableFooterProps.ref.current = ref;
    }
  }, children: getFooterGroups().map((footerGroup) => (0, import_jsx_runtime28.jsx)(MRT_TableFooterRow, { columnVirtualizer, footerGroup, table }, footerGroup.id)) }));
};
var classes$n = { "root": "MRT_TableHead-module_root__j9NkO", "root-grid": "MRT_TableHead-module_root-grid__c3aGl", "root-table-row-group": "MRT_TableHead-module_root-table-row-group__d9FO4", "root-sticky": "MRT_TableHead-module_root-sticky__0kuDE", "banner-tr": "MRT_TableHead-module_banner-tr__EhT-x", "banner-th": "MRT_TableHead-module_banner-th__KwM5a", "grid": "MRT_TableHead-module_grid__OJ-td" };
var classes$m = { "root": "MRT_TableHeadRow-module_root__hUKv4", "layout-mode-grid": "MRT_TableHeadRow-module_layout-mode-grid__4ZGri", "sticky": "MRT_TableHeadRow-module_sticky__Ej7Ax" };
var classes$l = { "root": "MRT_TableHeadCell-module_root__6y50a", "root-grid": "MRT_TableHeadCell-module_root-grid__bAf1d", "root-virtualized": "MRT_TableHeadCell-module_root-virtualized__CWLit", "root-no-select": "MRT_TableHeadCell-module_root-no-select__BEOVU", "content": "MRT_TableHeadCell-module_content__-pzSK", "content-spaced": "MRT_TableHeadCell-module_content-spaced__S85Aa", "content-center": "MRT_TableHeadCell-module_content-center__c-17L", "content-right": "MRT_TableHeadCell-module_content-right__NSRZU", "content-wrapper": "MRT_TableHeadCell-module_content-wrapper__py6aJ", "content-wrapper-hidden-overflow": "MRT_TableHeadCell-module_content-wrapper-hidden-overflow__QY40r", "content-wrapper-nowrap": "MRT_TableHeadCell-module_content-wrapper-nowrap__-4aIg", "labels": "MRT_TableHeadCell-module_labels__oiMSr", "labels-right": "MRT_TableHeadCell-module_labels-right__6ZJp-", "labels-center": "MRT_TableHeadCell-module_labels-center__MM9q8", "labels-sortable": "MRT_TableHeadCell-module_labels-sortable__tyuLr", "labels-data": "MRT_TableHeadCell-module_labels-data__PvFGO", "content-actions": "MRT_TableHeadCell-module_content-actions__utxbm" };
var classes$k = { "filter-mode-label": "MRT_TableHeadCellFilterContainer-module_filter-mode-label__8reK-" };
var classes$j = { "root": "MRT_FilterCheckBox-module_root__59h9r" };
var MRT_FilterCheckbox = (_a) => {
  var _b, _c, _d;
  var { column, table } = _a, rest = __rest(_a, ["column", "table"]);
  const { getState, options: { localization, mantineFilterCheckboxProps } } = table;
  const { density } = getState();
  const { columnDef } = column;
  const arg = { column, table };
  const checkboxProps = Object.assign(Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineFilterCheckboxProps, arg)), parseFromValuesOrFunc(columnDef.mantineFilterCheckboxProps, arg)), rest);
  const filterLabel = (_b = localization.filterByColumn) === null || _b === void 0 ? void 0 : _b.replace("{column}", columnDef.header);
  const value = column.getFilterValue();
  return (0, import_jsx_runtime28.jsx)(Tooltip, { label: (_c = checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.title) !== null && _c !== void 0 ? _c : filterLabel, openDelay: 1e3, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(Checkbox, Object.assign({ checked: value === "true", className: clsx_default("mrt-filter-checkbox", classes$j.root), indeterminate: value === void 0, label: (_d = checkboxProps.title) !== null && _d !== void 0 ? _d : filterLabel, size: density === "xs" ? "sm" : "md" }, checkboxProps, { onChange: (e) => {
    var _a2;
    column.setFilterValue(column.getFilterValue() === void 0 ? "true" : column.getFilterValue() === "true" ? "false" : void 0);
    (_a2 = checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.onChange) === null || _a2 === void 0 ? void 0 : _a2.call(checkboxProps, e);
  }, onClick: (e) => {
    var _a2;
    e.stopPropagation();
    (_a2 = checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.onClick) === null || _a2 === void 0 ? void 0 : _a2.call(checkboxProps, e);
  }, title: void 0 })) });
};
var classes$i = { "root": "MRT_FilterRangeFields-module_root__KfCcg" };
var classes$h = { "root": "MRT_FilterTextInput-module_root__Ss8Ql", "date-filter": "MRT_FilterTextInput-module_date-filter__jOBLB", "range-filter": "MRT_FilterTextInput-module_range-filter__JQHAL", "not-filter-chip": "MRT_FilterTextInput-module_not-filter-chip__u8b1y", "filter-chip-badge": "MRT_FilterTextInput-module_filter-chip-badge__Sel2k" };
var MRT_FilterTextInput = (_a) => {
  var _b, _c, _d, _e, _f, _g, _h, _j;
  var { header, rangeFilterIndex, table } = _a, rest = __rest(_a, ["header", "rangeFilterIndex", "table"]);
  const { options: { columnFilterDisplayMode, columnFilterModeOptions, icons: { IconX: IconX2 }, localization, mantineFilterAutocompleteProps, mantineFilterDateInputProps, mantineFilterMultiSelectProps = {
    clearable: true
  }, mantineFilterSelectProps, mantineFilterTextInputProps, manualFiltering }, refs: { filterInputRefs }, setColumnFilterFns } = table;
  const { column } = header;
  const { columnDef } = column;
  const arg = { column, rangeFilterIndex, table };
  const textInputProps = Object.assign(Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineFilterTextInputProps, arg)), parseFromValuesOrFunc(columnDef.mantineFilterTextInputProps, arg)), rest);
  const selectProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineFilterSelectProps, arg)), parseFromValuesOrFunc(columnDef.mantineFilterSelectProps, arg));
  const multiSelectProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineFilterMultiSelectProps, arg)), parseFromValuesOrFunc(columnDef.mantineFilterMultiSelectProps, arg));
  const dateInputProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineFilterDateInputProps, arg)), parseFromValuesOrFunc(columnDef.mantineFilterDateInputProps, arg));
  const autoCompleteProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineFilterAutocompleteProps, arg)), parseFromValuesOrFunc(columnDef.mantineFilterAutocompleteProps, arg));
  const isRangeFilter = columnDef.filterVariant === "range" || columnDef.filterVariant === "date-range" || rangeFilterIndex !== void 0;
  const isSelectFilter = columnDef.filterVariant === "select";
  const isMultiSelectFilter = columnDef.filterVariant === "multi-select";
  const isDateFilter = columnDef.filterVariant === "date" || columnDef.filterVariant === "date-range";
  const isAutoCompleteFilter = columnDef.filterVariant === "autocomplete";
  const allowedColumnFilterOptions = (_b = columnDef === null || columnDef === void 0 ? void 0 : columnDef.columnFilterModeOptions) !== null && _b !== void 0 ? _b : columnFilterModeOptions;
  const currentFilterOption = columnDef._filterFn;
  const filterChipLabel = ["empty", "notEmpty"].includes(currentFilterOption) ? localizedFilterOption(localization, currentFilterOption) : "";
  const filterPlaceholder = !isRangeFilter ? (_c = textInputProps === null || textInputProps === void 0 ? void 0 : textInputProps.placeholder) !== null && _c !== void 0 ? _c : (_d = localization.filterByColumn) === null || _d === void 0 ? void 0 : _d.replace("{column}", String(columnDef.header)) : rangeFilterIndex === 0 ? localization.min : rangeFilterIndex === 1 ? localization.max : "";
  const facetedUniqueValues = column.getFacetedUniqueValues();
  const filterSelectOptions = (0, import_react17.useMemo)(() => {
    var _a2, _b2, _c2;
    return ((_c2 = (_b2 = (_a2 = autoCompleteProps === null || autoCompleteProps === void 0 ? void 0 : autoCompleteProps.data) !== null && _a2 !== void 0 ? _a2 : selectProps === null || selectProps === void 0 ? void 0 : selectProps.data) !== null && _b2 !== void 0 ? _b2 : multiSelectProps === null || multiSelectProps === void 0 ? void 0 : multiSelectProps.data) !== null && _c2 !== void 0 ? _c2 : (isAutoCompleteFilter || isSelectFilter || isMultiSelectFilter) && facetedUniqueValues ? Array.from(facetedUniqueValues.keys()).sort((a, b) => a.localeCompare(b)) : []).filter((o) => o !== void 0 && o !== null);
  }, [
    autoCompleteProps === null || autoCompleteProps === void 0 ? void 0 : autoCompleteProps.data,
    facetedUniqueValues,
    isAutoCompleteFilter,
    isMultiSelectFilter,
    isSelectFilter,
    multiSelectProps === null || multiSelectProps === void 0 ? void 0 : multiSelectProps.data,
    selectProps === null || selectProps === void 0 ? void 0 : selectProps.data
  ]);
  const isMounted = (0, import_react17.useRef)(false);
  const [filterValue, setFilterValue] = (0, import_react17.useState)(() => {
    var _a2, _b2;
    return isMultiSelectFilter ? column.getFilterValue() || [] : isRangeFilter ? ((_a2 = column.getFilterValue()) === null || _a2 === void 0 ? void 0 : _a2[rangeFilterIndex]) || "" : (_b2 = column.getFilterValue()) !== null && _b2 !== void 0 ? _b2 : "";
  });
  const [debouncedFilterValue] = useDebouncedValue(filterValue, manualFiltering ? 400 : 200);
  (0, import_react17.useEffect)(() => {
    if (!isMounted.current)
      return;
    if (isRangeFilter) {
      column.setFilterValue((old) => {
        const newFilterValues = Array.isArray(old) ? old : ["", ""];
        newFilterValues[rangeFilterIndex] = debouncedFilterValue;
        return newFilterValues;
      });
    } else {
      column.setFilterValue(debouncedFilterValue !== null && debouncedFilterValue !== void 0 ? debouncedFilterValue : void 0);
    }
  }, [debouncedFilterValue]);
  (0, import_react17.useEffect)(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    const tableFilterValue = column.getFilterValue();
    if (tableFilterValue === void 0) {
      handleClear();
    } else if (isRangeFilter && rangeFilterIndex !== void 0) {
      setFilterValue((tableFilterValue !== null && tableFilterValue !== void 0 ? tableFilterValue : ["", ""])[rangeFilterIndex]);
    } else {
      setFilterValue(tableFilterValue !== null && tableFilterValue !== void 0 ? tableFilterValue : "");
    }
  }, [column.getFilterValue()]);
  const handleClear = () => {
    if (isMultiSelectFilter) {
      setFilterValue([]);
      column.setFilterValue([]);
    } else if (isRangeFilter) {
      setFilterValue("");
      column.setFilterValue((old) => {
        const newFilterValues = Array.isArray(old) ? old : ["", ""];
        newFilterValues[rangeFilterIndex] = void 0;
        return newFilterValues;
      });
    } else {
      setFilterValue("");
      column.setFilterValue(void 0);
    }
  };
  if (columnDef.Filter) {
    return (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: (_e = columnDef.Filter) === null || _e === void 0 ? void 0 : _e.call(columnDef, { column, header, rangeFilterIndex, table }) });
  }
  const handleClearEmptyFilterChip = () => {
    setFilterValue("");
    column.setFilterValue(void 0);
    setColumnFilterFns((prev) => {
      var _a2;
      return Object.assign(Object.assign({}, prev), { [header.id]: (_a2 = allowedColumnFilterOptions === null || allowedColumnFilterOptions === void 0 ? void 0 : allowedColumnFilterOptions[0]) !== null && _a2 !== void 0 ? _a2 : "fuzzy" });
    });
  };
  const _k = {
    "aria-label": filterPlaceholder,
    className: clsx_default("mrt-filter-text-input", classes$h.root, isDateFilter ? classes$h["date-filter"] : isRangeFilter ? classes$h["range-filter"] : !filterChipLabel && classes$h["not-filter-chip"]),
    disabled: !!filterChipLabel,
    onChange: setFilterValue,
    onClick: (event) => event.stopPropagation(),
    placeholder: filterPlaceholder,
    style: Object.assign({}, isMultiSelectFilter ? multiSelectProps === null || multiSelectProps === void 0 ? void 0 : multiSelectProps.style : isSelectFilter ? selectProps === null || selectProps === void 0 ? void 0 : selectProps.style : isDateFilter ? dateInputProps === null || dateInputProps === void 0 ? void 0 : dateInputProps.style : textInputProps === null || textInputProps === void 0 ? void 0 : textInputProps.style),
    title: filterPlaceholder,
    value: filterValue,
    variant: "unstyled"
  }, { className } = _k, commonProps = __rest(_k, ["className"]);
  const ClearButton = filterValue ? (0, import_jsx_runtime28.jsx)(ActionIcon, { "aria-label": localization.clearFilter, color: "var(--mantine-color-gray-7)", onClick: handleClear, size: "sm", title: (_f = localization.clearFilter) !== null && _f !== void 0 ? _f : "", variant: "transparent", children: (0, import_jsx_runtime28.jsx)(IconX2, {}) }) : null;
  return filterChipLabel ? (0, import_jsx_runtime28.jsx)(Box, { style: commonProps.style, children: (0, import_jsx_runtime28.jsx)(Badge, { className: classes$h["filter-chip-badge"], onClick: handleClearEmptyFilterChip, rightSection: ClearButton, size: "lg", children: filterChipLabel }) }) : isMultiSelectFilter ? (0, import_jsx_runtime28.jsx)(MultiSelect, Object.assign({}, commonProps, { searchable: true }, multiSelectProps, { className: clsx_default(className, multiSelectProps.className), data: filterSelectOptions, onChange: (value) => setFilterValue(value), ref: (node) => {
    if (node) {
      filterInputRefs.current[`${column.id}-${rangeFilterIndex !== null && rangeFilterIndex !== void 0 ? rangeFilterIndex : 0}`] = node;
      if (multiSelectProps.ref) {
        multiSelectProps.ref.current = node;
      }
    }
  }, rightSection: ((_g = filterValue === null || filterValue === void 0 ? void 0 : filterValue.toString()) === null || _g === void 0 ? void 0 : _g.length) && (multiSelectProps === null || multiSelectProps === void 0 ? void 0 : multiSelectProps.clearable) ? ClearButton : void 0, style: commonProps.style })) : isSelectFilter ? (0, import_jsx_runtime28.jsx)(Select, Object.assign({}, commonProps, { clearable: true, searchable: true }, selectProps, { className: clsx_default(className, selectProps.className), clearButtonProps: {
    size: "md"
  }, data: filterSelectOptions, ref: (node) => {
    if (node) {
      filterInputRefs.current[`${column.id}-${rangeFilterIndex !== null && rangeFilterIndex !== void 0 ? rangeFilterIndex : 0}`] = node;
      if (selectProps.ref) {
        selectProps.ref.current = node;
      }
    }
  }, style: commonProps.style })) : isDateFilter ? (0, import_jsx_runtime28.jsx)(DateInput, Object.assign({}, commonProps, { allowDeselect: true, clearable: true, popoverProps: { withinPortal: columnFilterDisplayMode !== "popover" } }, dateInputProps, { className: clsx_default(className, dateInputProps.className), onChange: (event) => commonProps.onChange(event === null ? "" : event), ref: (node) => {
    if (node) {
      filterInputRefs.current[`${column.id}-${rangeFilterIndex !== null && rangeFilterIndex !== void 0 ? rangeFilterIndex : 0}`] = node;
      if (dateInputProps.ref) {
        dateInputProps.ref.current = node;
      }
    }
  }, style: commonProps.style })) : isAutoCompleteFilter ? (0, import_jsx_runtime28.jsx)(Autocomplete, Object.assign({}, commonProps, { onChange: (value) => setFilterValue(value), rightSection: ((_h = filterValue === null || filterValue === void 0 ? void 0 : filterValue.toString()) === null || _h === void 0 ? void 0 : _h.length) ? ClearButton : void 0 }, autoCompleteProps, { className: clsx_default(className, autoCompleteProps.className), data: filterSelectOptions, ref: (node) => {
    if (node) {
      filterInputRefs.current[`${column.id}-${rangeFilterIndex !== null && rangeFilterIndex !== void 0 ? rangeFilterIndex : 0}`] = node;
      if (autoCompleteProps.ref) {
        autoCompleteProps.ref.current = node;
      }
    }
  }, style: commonProps.style })) : (0, import_jsx_runtime28.jsx)(TextInput, Object.assign({}, commonProps, { onChange: (e) => setFilterValue(e.target.value), rightSection: ((_j = filterValue === null || filterValue === void 0 ? void 0 : filterValue.toString()) === null || _j === void 0 ? void 0 : _j.length) ? ClearButton : void 0 }, textInputProps, { className: clsx_default(className, textInputProps.className), mt: 0, ref: (node) => {
    if (node) {
      filterInputRefs.current[`${column.id}-${rangeFilterIndex !== null && rangeFilterIndex !== void 0 ? rangeFilterIndex : 0}`] = node;
      if (textInputProps.ref) {
        textInputProps.ref.current = node;
      }
    }
  }, style: commonProps.style }));
};
var MRT_FilterRangeFields = (_a) => {
  var { header, table } = _a, rest = __rest(_a, ["header", "table"]);
  return (0, import_jsx_runtime28.jsxs)(Box, Object.assign({}, rest, { className: clsx_default("mrt-filter-range-fields", classes$i.root, rest.className), children: [(0, import_jsx_runtime28.jsx)(MRT_FilterTextInput, { header, rangeFilterIndex: 0, table }), (0, import_jsx_runtime28.jsx)(MRT_FilterTextInput, { header, rangeFilterIndex: 1, table })] }));
};
var classes$g = { "root": "MRT_FilterRangeSlider-module_root__uwYEk" };
var MRT_FilterRangeSlider = (_a) => {
  var _b;
  var { header, table } = _a, rest = __rest(_a, ["header", "table"]);
  const { options: { mantineFilterRangeSliderProps }, refs: { filterInputRefs } } = table;
  const { column } = header;
  const { columnDef } = column;
  const arg = { column, table };
  const rangeSliderProps = Object.assign(Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineFilterRangeSliderProps, arg)), parseFromValuesOrFunc(columnDef.mantineFilterRangeSliderProps, arg)), rest);
  let [min2, max2] = rangeSliderProps.min !== void 0 && rangeSliderProps.max !== void 0 ? [rangeSliderProps.min, rangeSliderProps.max] : (_b = column.getFacetedMinMaxValues()) !== null && _b !== void 0 ? _b : [0, 1];
  if (Array.isArray(min2))
    min2 = min2[0];
  if (Array.isArray(max2))
    max2 = max2[0];
  if (min2 === null)
    min2 = 0;
  if (max2 === null)
    max2 = 1;
  const [filterValues, setFilterValues] = (0, import_react17.useState)([
    min2,
    max2
  ]);
  const columnFilterValue = column.getFilterValue();
  const isMounted = (0, import_react17.useRef)(false);
  (0, import_react17.useEffect)(() => {
    if (isMounted.current) {
      if (columnFilterValue === void 0) {
        setFilterValues([min2, max2]);
      } else if (Array.isArray(columnFilterValue)) {
        setFilterValues(columnFilterValue);
      }
    }
    isMounted.current = true;
  }, [columnFilterValue, min2, max2]);
  return (0, import_jsx_runtime28.jsx)(RangeSlider, Object.assign({ className: clsx_default("mrt-filter-range-slider", classes$g.root), max: max2, min: min2, onChange: (values) => {
    setFilterValues(values);
  }, onChangeEnd: (values) => {
    if (Array.isArray(values)) {
      if (values[0] <= min2 && values[1] >= max2) {
        column.setFilterValue(void 0);
      } else {
        column.setFilterValue(values);
      }
    }
  }, value: filterValues }, rangeSliderProps, { ref: (node) => {
    if (node) {
      filterInputRefs.current[`${column.id}-0`] = node;
      if (rangeSliderProps === null || rangeSliderProps === void 0 ? void 0 : rangeSliderProps.ref) {
        rangeSliderProps.ref = node;
      }
    }
  } }));
};
var classes$f = { "symbol": "MRT_FilterOptionMenu-module_symbol__a1Bsy" };
var mrtFilterOptions = (localization) => [
  {
    divider: false,
    label: localization.filterFuzzy,
    option: "fuzzy",
    symbol: "≈"
  },
  {
    divider: false,
    label: localization.filterContains,
    option: "contains",
    symbol: "*"
  },
  {
    divider: false,
    label: localization.filterStartsWith,
    option: "startsWith",
    symbol: "a"
  },
  {
    divider: true,
    label: localization.filterEndsWith,
    option: "endsWith",
    symbol: "z"
  },
  {
    divider: false,
    label: localization.filterEquals,
    option: "equals",
    symbol: "="
  },
  {
    divider: true,
    label: localization.filterNotEquals,
    option: "notEquals",
    symbol: "≠"
  },
  {
    divider: false,
    label: localization.filterBetween,
    option: "between",
    symbol: "⇿"
  },
  {
    divider: true,
    label: localization.filterBetweenInclusive,
    option: "betweenInclusive",
    symbol: "⬌"
  },
  {
    divider: false,
    label: localization.filterGreaterThan,
    option: "greaterThan",
    symbol: ">"
  },
  {
    divider: false,
    label: localization.filterGreaterThanOrEqualTo,
    option: "greaterThanOrEqualTo",
    symbol: "≥"
  },
  {
    divider: false,
    label: localization.filterLessThan,
    option: "lessThan",
    symbol: "<"
  },
  {
    divider: true,
    label: localization.filterLessThanOrEqualTo,
    option: "lessThanOrEqualTo",
    symbol: "≤"
  },
  {
    divider: false,
    label: localization.filterEmpty,
    option: "empty",
    symbol: "∅"
  },
  {
    divider: false,
    label: localization.filterNotEmpty,
    option: "notEmpty",
    symbol: "!∅"
  }
];
var rangeModes = ["between", "betweenInclusive", "inNumberRange"];
var emptyModes = ["empty", "notEmpty"];
var arrModes = ["arrIncludesSome", "arrIncludesAll", "arrIncludes"];
var rangeVariants = ["range-slider", "date-range", "range"];
var MRT_FilterOptionMenu = ({ header, onSelect, table }) => {
  var _a, _b, _c, _d;
  const { getState, options: { columnFilterModeOptions, globalFilterModeOptions, localization, renderColumnFilterModeMenuItems, renderGlobalFilterModeMenuItems }, setColumnFilterFns, setGlobalFilterFn } = table;
  const { globalFilterFn } = getState();
  const { column } = header !== null && header !== void 0 ? header : {};
  const { columnDef } = column !== null && column !== void 0 ? column : {};
  const currentFilterValue = column === null || column === void 0 ? void 0 : column.getFilterValue();
  let allowedColumnFilterOptions = (_a = columnDef === null || columnDef === void 0 ? void 0 : columnDef.columnFilterModeOptions) !== null && _a !== void 0 ? _a : columnFilterModeOptions;
  if (rangeVariants.includes(columnDef === null || columnDef === void 0 ? void 0 : columnDef.filterVariant)) {
    allowedColumnFilterOptions = [
      ...rangeModes,
      ...allowedColumnFilterOptions !== null && allowedColumnFilterOptions !== void 0 ? allowedColumnFilterOptions : []
    ].filter((option) => rangeModes.includes(option));
  }
  const internalFilterOptions = (0, import_react17.useMemo)(() => mrtFilterOptions(localization).filter((filterOption2) => columnDef ? allowedColumnFilterOptions === void 0 || (allowedColumnFilterOptions === null || allowedColumnFilterOptions === void 0 ? void 0 : allowedColumnFilterOptions.includes(filterOption2.option)) : (!globalFilterModeOptions || globalFilterModeOptions.includes(filterOption2.option)) && ["contains", "fuzzy", "startsWith"].includes(filterOption2.option)), []);
  const handleSelectFilterMode = (option) => {
    var _a2;
    const prevFilterMode = (_a2 = columnDef === null || columnDef === void 0 ? void 0 : columnDef._filterFn) !== null && _a2 !== void 0 ? _a2 : "";
    if (!header || !column) {
      setGlobalFilterFn(option);
    } else if (option !== prevFilterMode) {
      setColumnFilterFns((prev) => Object.assign(Object.assign({}, prev), { [header.id]: option }));
      if (emptyModes.includes(option)) {
        if (currentFilterValue !== " " && !emptyModes.includes(prevFilterMode)) {
          column.setFilterValue(" ");
        } else if (currentFilterValue) {
          column.setFilterValue(currentFilterValue);
        }
      } else if ((columnDef === null || columnDef === void 0 ? void 0 : columnDef.filterVariant) === "multi-select" || arrModes.includes(option)) {
        if (currentFilterValue instanceof String || (currentFilterValue === null || currentFilterValue === void 0 ? void 0 : currentFilterValue.length)) {
          column.setFilterValue([]);
        } else if (currentFilterValue) {
          column.setFilterValue(currentFilterValue);
        }
      } else if (rangeVariants.includes(columnDef === null || columnDef === void 0 ? void 0 : columnDef.filterVariant) || rangeModes.includes(option)) {
        if (!Array.isArray(currentFilterValue) || !(currentFilterValue === null || currentFilterValue === void 0 ? void 0 : currentFilterValue.every((v) => v === "")) && !rangeModes.includes(prevFilterMode)) {
          column.setFilterValue(["", ""]);
        } else {
          column.setFilterValue(currentFilterValue);
        }
      } else {
        if (Array.isArray(currentFilterValue)) {
          column.setFilterValue("");
        } else if (currentFilterValue === " " && emptyModes.includes(prevFilterMode)) {
          column.setFilterValue(void 0);
        } else {
          column.setFilterValue(currentFilterValue);
        }
      }
    }
    onSelect === null || onSelect === void 0 ? void 0 : onSelect();
  };
  const filterOption = !!header && columnDef ? columnDef._filterFn : globalFilterFn;
  return (0, import_jsx_runtime28.jsx)(Menu.Dropdown, { children: (_d = header && column && columnDef ? (_c = (_b = columnDef.renderColumnFilterModeMenuItems) === null || _b === void 0 ? void 0 : _b.call(columnDef, {
    column,
    internalFilterOptions,
    onSelectFilterMode: handleSelectFilterMode,
    table
  })) !== null && _c !== void 0 ? _c : renderColumnFilterModeMenuItems === null || renderColumnFilterModeMenuItems === void 0 ? void 0 : renderColumnFilterModeMenuItems({
    column,
    internalFilterOptions,
    onSelectFilterMode: handleSelectFilterMode,
    table
  }) : renderGlobalFilterModeMenuItems === null || renderGlobalFilterModeMenuItems === void 0 ? void 0 : renderGlobalFilterModeMenuItems({
    internalFilterOptions,
    onSelectFilterMode: handleSelectFilterMode,
    table
  })) !== null && _d !== void 0 ? _d : internalFilterOptions.map(({ divider, label, option, symbol }, index) => (0, import_jsx_runtime28.jsxs)(import_react17.Fragment, { children: [(0, import_jsx_runtime28.jsx)(Menu.Item, { color: option === filterOption ? "blue" : void 0, leftSection: (0, import_jsx_runtime28.jsx)("span", { className: classes$f.symbol, children: symbol }), onClick: () => handleSelectFilterMode(option), value: option, children: label }), divider && (0, import_jsx_runtime28.jsx)(Menu.Divider, {})] }, index)) });
};
var MRT_TableHeadCellFilterContainer = (_a) => {
  var _b, _c;
  var { header, table } = _a, rest = __rest(_a, ["header", "table"]);
  const { getState, options: { columnFilterDisplayMode, columnFilterModeOptions, enableColumnFilterModes, icons: { IconFilterCog: IconFilterCog2 }, localization }, refs: { filterInputRefs } } = table;
  const { showColumnFilters } = getState();
  const { column } = header;
  const { columnDef } = column;
  const currentFilterOption = columnDef._filterFn;
  const allowedColumnFilterOptions = (_b = columnDef === null || columnDef === void 0 ? void 0 : columnDef.columnFilterModeOptions) !== null && _b !== void 0 ? _b : columnFilterModeOptions;
  const showChangeModeButton = enableColumnFilterModes && columnDef.enableColumnFilterModes !== false && (allowedColumnFilterOptions === void 0 || !!(allowedColumnFilterOptions === null || allowedColumnFilterOptions === void 0 ? void 0 : allowedColumnFilterOptions.length));
  return (0, import_jsx_runtime28.jsx)(Collapse, { in: showColumnFilters || columnFilterDisplayMode === "popover", children: (0, import_jsx_runtime28.jsxs)(Flex, Object.assign({ direction: "column" }, rest, { children: [(0, import_jsx_runtime28.jsxs)(Flex, { align: "flex-end", children: [columnDef.filterVariant === "checkbox" ? (0, import_jsx_runtime28.jsx)(MRT_FilterCheckbox, { column, table }) : columnDef.filterVariant === "range-slider" ? (0, import_jsx_runtime28.jsx)(MRT_FilterRangeSlider, { header, table }) : ["date-range", "range"].includes((_c = columnDef.filterVariant) !== null && _c !== void 0 ? _c : "") || ["between", "betweenInclusive", "inNumberRange"].includes(columnDef._filterFn) ? (0, import_jsx_runtime28.jsx)(MRT_FilterRangeFields, { header, table }) : (0, import_jsx_runtime28.jsx)(MRT_FilterTextInput, { header, table }), showChangeModeButton && (0, import_jsx_runtime28.jsxs)(Menu, { withinPortal: columnFilterDisplayMode !== "popover", children: [(0, import_jsx_runtime28.jsx)(Tooltip, { label: localization.changeFilterMode, position: "bottom-start", withinPortal: true, children: (0, import_jsx_runtime28.jsx)(Menu.Target, { children: (0, import_jsx_runtime28.jsx)(ActionIcon, { "aria-label": localization.changeFilterMode, color: "gray", size: "md", variant: "subtle", children: (0, import_jsx_runtime28.jsx)(IconFilterCog2, {}) }) }) }), (0, import_jsx_runtime28.jsx)(MRT_FilterOptionMenu, { header, onSelect: () => setTimeout(() => {
    var _a2;
    return (_a2 = filterInputRefs.current[`${column.id}-0`]) === null || _a2 === void 0 ? void 0 : _a2.focus();
  }, 100), table })] })] }), showChangeModeButton ? (0, import_jsx_runtime28.jsx)(Text, { c: "dimmed", className: classes$k["filter-mode-label"], component: "label", children: localization.filterMode.replace("{filterType}", localizedFilterOption(localization, currentFilterOption)) }) : null] })) });
};
var classes$e = { "root": "MRT_TableHeadCellFilterLabel-module_root__Rur2R" };
var MRT_TableHeadCellFilterLabel = (_a) => {
  var _b, _c, _d;
  var { header, table } = _a, rest = __rest(_a, ["header", "table"]);
  const { options: { columnFilterDisplayMode, icons: { IconFilter: IconFilter2 }, localization }, refs: { filterInputRefs }, setShowColumnFilters } = table;
  const { column } = header;
  const { columnDef } = column;
  const filterValue = column.getFilterValue();
  const [popoverOpened, setPopoverOpened] = (0, import_react17.useState)(false);
  const isFilterActive = Array.isArray(filterValue) && filterValue.some(Boolean) || !!filterValue && !Array.isArray(filterValue);
  const isRangeFilter = columnDef.filterVariant === "range" || ["between", "betweenInclusive", "inNumberRange"].includes(columnDef._filterFn);
  const currentFilterOption = columnDef._filterFn;
  const filterTooltip = columnFilterDisplayMode === "popover" && !isFilterActive ? (_b = localization.filterByColumn) === null || _b === void 0 ? void 0 : _b.replace("{column}", String(columnDef.header)) : localization.filteringByColumn.replace("{column}", String(columnDef.header)).replace("{filterType}", localizedFilterOption(localization, currentFilterOption)).replace("{filterValue}", `"${Array.isArray(column.getFilterValue()) ? column.getFilterValue().join(`" ${isRangeFilter ? localization.and : localization.or} "`) : column.getFilterValue()}"`).replace('" "', "");
  return (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: (0, import_jsx_runtime28.jsxs)(Popover, { keepMounted: columnDef.filterVariant === "range-slider", onClose: () => setPopoverOpened(false), opened: popoverOpened, position: "top", shadow: "xl", width: 360, withinPortal: true, children: [(0, import_jsx_runtime28.jsx)(Transition, { mounted: columnFilterDisplayMode === "popover" || !!column.getFilterValue() && !isRangeFilter || isRangeFilter && (!!((_c = column.getFilterValue()) === null || _c === void 0 ? void 0 : _c[0]) || !!((_d = column.getFilterValue()) === null || _d === void 0 ? void 0 : _d[1])), transition: "scale", children: () => (0, import_jsx_runtime28.jsx)(Popover.Target, { children: (0, import_jsx_runtime28.jsx)(Tooltip, { disabled: popoverOpened, label: filterTooltip, multiline: true, w: filterTooltip.length > 40 ? 300 : void 0, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(ActionIcon, Object.assign({ className: clsx_default("mrt-table-head-cell-filter-label-icon", classes$e.root), size: 18 }, dataVariable("active", isFilterActive), { onClick: (event) => {
    event.stopPropagation();
    if (columnFilterDisplayMode === "popover") {
      setPopoverOpened((opened) => !opened);
    } else {
      setShowColumnFilters(true);
    }
    setTimeout(() => {
      const input = filterInputRefs.current[`${column.id}-0`];
      input === null || input === void 0 ? void 0 : input.focus();
      input === null || input === void 0 ? void 0 : input.select();
    }, 100);
  } }, rest, { children: (0, import_jsx_runtime28.jsx)(IconFilter2, { size: "100%" }) })) }) }) }), columnFilterDisplayMode === "popover" && (0, import_jsx_runtime28.jsx)(Popover.Dropdown, { onClick: (event) => event.stopPropagation(), onKeyDown: (event) => event.key === "Enter" && setPopoverOpened(false), onMouseDown: (event) => event.stopPropagation(), children: (0, import_jsx_runtime28.jsx)(MRT_TableHeadCellFilterContainer, { header, table }) })] }) });
};
var MRT_TableHeadCellGrabHandle = (_a) => {
  var { column, table, tableHeadCellRef } = _a, rest = __rest(_a, ["column", "table", "tableHeadCellRef"]);
  const { getState, options: { enableColumnOrdering, mantineColumnDragHandleProps }, setColumnOrder, setDraggingColumn, setHoveredColumn } = table;
  const { columnDef } = column;
  const { columnOrder, draggingColumn, hoveredColumn } = getState();
  const arg = { column, table };
  const actionIconProps = Object.assign(Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineColumnDragHandleProps, arg)), parseFromValuesOrFunc(columnDef.mantineColumnDragHandleProps, arg)), rest);
  const handleDragStart = (event) => {
    var _a2;
    (_a2 = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.onDragStart) === null || _a2 === void 0 ? void 0 : _a2.call(actionIconProps, event);
    setDraggingColumn(column);
    event.dataTransfer.setDragImage(tableHeadCellRef.current, 0, 0);
  };
  const handleDragEnd = (event) => {
    var _a2;
    (_a2 = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.onDragEnd) === null || _a2 === void 0 ? void 0 : _a2.call(actionIconProps, event);
    if ((hoveredColumn === null || hoveredColumn === void 0 ? void 0 : hoveredColumn.id) === "drop-zone") {
      column.toggleGrouping();
    } else if (enableColumnOrdering && hoveredColumn && (hoveredColumn === null || hoveredColumn === void 0 ? void 0 : hoveredColumn.id) !== (draggingColumn === null || draggingColumn === void 0 ? void 0 : draggingColumn.id)) {
      setColumnOrder(reorderColumn(column, hoveredColumn, columnOrder));
    }
    setDraggingColumn(null);
    setHoveredColumn(null);
  };
  return (0, import_jsx_runtime28.jsx)(MRT_GrabHandleButton, { actionIconProps, onDragEnd: handleDragEnd, onDragStart: handleDragStart, table });
};
var classes$d = { "root": "MRT_TableHeadCellResizeHandle-module_root__paufe", "root-ltr": "MRT_TableHeadCellResizeHandle-module_root-ltr__652AZ", "root-rtl": "MRT_TableHeadCellResizeHandle-module_root-rtl__5VlSo", "root-hide": "MRT_TableHeadCellResizeHandle-module_root-hide__-ILlD" };
var MRT_TableHeadCellResizeHandle = (_a) => {
  var _b;
  var { header, table } = _a, rest = __rest(_a, ["header", "table"]);
  const { getState, options: { columnResizeDirection, columnResizeMode }, setColumnSizingInfo } = table;
  const { density } = getState();
  const { column } = header;
  const handler = header.getResizeHandler();
  const offset = column.getIsResizing() && columnResizeMode === "onEnd" ? `translateX(${(columnResizeDirection === "rtl" ? -1 : 1) * ((_b = getState().columnSizingInfo.deltaOffset) !== null && _b !== void 0 ? _b : 0)}px)` : void 0;
  return (0, import_jsx_runtime28.jsx)(Box, Object.assign({ onDoubleClick: () => {
    setColumnSizingInfo((old) => Object.assign(Object.assign({}, old), { isResizingColumn: false }));
    column.resetSize();
  }, onMouseDown: handler, onTouchStart: handler, role: "separator" }, rest, { __vars: Object.assign({ "--mrt-transform": offset }, rest.__vars), className: clsx_default("mrt-table-head-cell-resize-handle", classes$d.root, classes$d[`root-${columnResizeDirection}`], !header.subHeaders.length && columnResizeMode === "onChange" && classes$d["root-hide"], density, rest.className) }));
};
var classes$c = { "sort-icon": "MRT_TableHeadCellSortLabel-module_sort-icon__zs1xA", "multi-sort-indicator": "MRT_TableHeadCellSortLabel-module_multi-sort-indicator__MGBj2" };
var MRT_TableHeadCellSortLabel = (_a) => {
  var { header, table } = _a, rest = __rest(_a, ["header", "table"]);
  const { getState, options: { icons: { IconArrowsSort: IconArrowsSort2, IconSortAscending: IconSortAscending2, IconSortDescending: IconSortDescending2 }, localization } } = table;
  const column = header.column;
  const { columnDef } = column;
  const { sorting } = getState();
  const sorted = column.getIsSorted();
  const sortIndex = column.getSortIndex();
  const sortTooltip = sorted ? sorted === "desc" ? localization.sortedByColumnDesc.replace("{column}", columnDef.header) : localization.sortedByColumnAsc.replace("{column}", columnDef.header) : column.getNextSortingOrder() === "desc" ? localization.sortByColumnDesc.replace("{column}", columnDef.header) : localization.sortByColumnAsc.replace("{column}", columnDef.header);
  const SortActionButton = (0, import_jsx_runtime28.jsx)(ActionIcon, Object.assign({ "aria-label": sortTooltip }, dataVariable("sorted", sorted), rest, { className: clsx_default("mrt-table-head-sort-button", classes$c["sort-icon"], rest.className), children: sorted === "desc" ? (0, import_jsx_runtime28.jsx)(IconSortDescending2, { size: "100%" }) : sorted === "asc" ? (0, import_jsx_runtime28.jsx)(IconSortAscending2, { size: "100%" }) : (0, import_jsx_runtime28.jsx)(IconArrowsSort2, { size: "100%" }) }));
  return (0, import_jsx_runtime28.jsx)(Tooltip, { label: sortTooltip, openDelay: 1e3, withinPortal: true, children: sorting.length < 2 || sortIndex === -1 ? SortActionButton : (0, import_jsx_runtime28.jsx)(Indicator, { className: clsx_default("mrt-table-head-multi-sort-indicator", classes$c["multi-sort-indicator"]), inline: true, label: sortIndex + 1, offset: 4, children: SortActionButton }) });
};
var classes$b = { "left": "MRT_ColumnActionMenu-module_left__cfNmY", "right": "MRT_ColumnActionMenu-module_right__-nK56" };
var MRT_ColumnActionMenu = (_a) => {
  var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
  var { header, table } = _a, rest = __rest(_a, ["header", "table"]);
  const { getState, options: { columnFilterDisplayMode, enableColumnFilters, enableColumnPinning, enableColumnResizing, enableGrouping, enableHiding, enableSorting, enableSortingRemoval, icons: { IconArrowAutofitContent: IconArrowAutofitContent2, IconBoxMultiple: IconBoxMultiple2, IconClearAll: IconClearAll2, IconColumns: IconColumns2, IconDotsVertical: IconDotsVertical2, IconEyeOff: IconEyeOff2, IconFilter: IconFilter2, IconFilterOff: IconFilterOff2, IconPinned: IconPinned2, IconPinnedOff: IconPinnedOff2, IconSortAscending: IconSortAscending2, IconSortDescending: IconSortDescending2 }, localization, mantineColumnActionsButtonProps, renderColumnActionsMenuItems }, refs: { filterInputRefs }, setColumnOrder, setColumnSizingInfo, setShowColumnFilters, toggleAllColumnsVisible } = table;
  const { column } = header;
  const { columnDef } = column;
  const { columnSizing, columnVisibility } = getState();
  const arg = { column, table };
  const actionIconProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineColumnActionsButtonProps, arg)), parseFromValuesOrFunc(columnDef.mantineColumnActionsButtonProps, arg));
  const handleClearSort = () => {
    column.clearSorting();
  };
  const handleSortAsc = () => {
    column.toggleSorting(false);
  };
  const handleSortDesc = () => {
    column.toggleSorting(true);
  };
  const handleResetColumnSize = () => {
    setColumnSizingInfo((old) => Object.assign(Object.assign({}, old), { isResizingColumn: false }));
    column.resetSize();
  };
  const handleHideColumn = () => {
    column.toggleVisibility(false);
  };
  const handlePinColumn = (pinDirection) => {
    column.pin(pinDirection);
  };
  const handleGroupByColumn = () => {
    column.toggleGrouping();
    setColumnOrder((old) => ["mrt-row-expand", ...old]);
  };
  const handleClearFilter = () => {
    column.setFilterValue("");
  };
  const handleFilterByColumn = () => {
    setShowColumnFilters(true);
    setTimeout(() => {
      var _a2;
      return (_a2 = filterInputRefs.current[`${column.id}-0`]) === null || _a2 === void 0 ? void 0 : _a2.focus();
    }, 100);
  };
  const handleShowAllColumns = () => {
    toggleAllColumnsVisible(true);
  };
  const internalColumnMenuItems = (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [enableSorting && column.getCanSort() && (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [enableSortingRemoval !== false && (0, import_jsx_runtime28.jsx)(Menu.Item, { disabled: !column.getIsSorted(), leftSection: (0, import_jsx_runtime28.jsx)(IconClearAll2, {}), onClick: handleClearSort, children: localization.clearSort }), (0, import_jsx_runtime28.jsx)(Menu.Item, { disabled: column.getIsSorted() === "asc", leftSection: (0, import_jsx_runtime28.jsx)(IconSortAscending2, {}), onClick: handleSortAsc, children: (_b = localization.sortByColumnAsc) === null || _b === void 0 ? void 0 : _b.replace("{column}", String(columnDef.header)) }), (0, import_jsx_runtime28.jsx)(Menu.Item, { disabled: column.getIsSorted() === "desc", leftSection: (0, import_jsx_runtime28.jsx)(IconSortDescending2, {}), onClick: handleSortDesc, children: (_c = localization.sortByColumnDesc) === null || _c === void 0 ? void 0 : _c.replace("{column}", String(columnDef.header)) }), (enableColumnFilters || enableGrouping || enableHiding) && (0, import_jsx_runtime28.jsx)(Menu.Divider, {}, 3)] }), enableColumnFilters && columnFilterDisplayMode !== "popover" && column.getCanFilter() && (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [(0, import_jsx_runtime28.jsx)(Menu.Item, { disabled: !column.getFilterValue(), leftSection: (0, import_jsx_runtime28.jsx)(IconFilterOff2, {}), onClick: handleClearFilter, children: localization.clearFilter }), (0, import_jsx_runtime28.jsx)(Menu.Item, { leftSection: (0, import_jsx_runtime28.jsx)(IconFilter2, {}), onClick: handleFilterByColumn, children: (_d = localization.filterByColumn) === null || _d === void 0 ? void 0 : _d.replace("{column}", String(columnDef.header)) }), (enableGrouping || enableHiding) && (0, import_jsx_runtime28.jsx)(Menu.Divider, {}, 2)] }), enableGrouping && column.getCanGroup() && (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [(0, import_jsx_runtime28.jsx)(Menu.Item, { leftSection: (0, import_jsx_runtime28.jsx)(IconBoxMultiple2, {}), onClick: handleGroupByColumn, children: (_e = localization[column.getIsGrouped() ? "ungroupByColumn" : "groupByColumn"]) === null || _e === void 0 ? void 0 : _e.replace("{column}", String(columnDef.header)) }), enableColumnPinning && (0, import_jsx_runtime28.jsx)(Menu.Divider, {})] }), enableColumnPinning && column.getCanPin() && (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [(0, import_jsx_runtime28.jsx)(Menu.Item, { disabled: column.getIsPinned() === "left" || !column.getCanPin(), leftSection: (0, import_jsx_runtime28.jsx)(IconPinned2, { className: classes$b.left }), onClick: () => handlePinColumn("left"), children: localization.pinToLeft }), (0, import_jsx_runtime28.jsx)(Menu.Item, { disabled: column.getIsPinned() === "right" || !column.getCanPin(), leftSection: (0, import_jsx_runtime28.jsx)(IconPinned2, { className: classes$b.right }), onClick: () => handlePinColumn("right"), children: localization.pinToRight }), (0, import_jsx_runtime28.jsx)(Menu.Item, { disabled: !column.getIsPinned(), leftSection: (0, import_jsx_runtime28.jsx)(IconPinnedOff2, {}), onClick: () => handlePinColumn(false), children: localization.unpin }), enableHiding && (0, import_jsx_runtime28.jsx)(Menu.Divider, {})] }), enableColumnResizing && column.getCanResize() && (0, import_jsx_runtime28.jsx)(Menu.Item, { disabled: !columnSizing[column.id], leftSection: (0, import_jsx_runtime28.jsx)(IconArrowAutofitContent2, {}), onClick: handleResetColumnSize, children: localization.resetColumnSize }, 0), enableHiding && (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [(0, import_jsx_runtime28.jsx)(Menu.Item, { disabled: !column.getCanHide(), leftSection: (0, import_jsx_runtime28.jsx)(IconEyeOff2, {}), onClick: handleHideColumn, children: (_f = localization.hideColumn) === null || _f === void 0 ? void 0 : _f.replace("{column}", String(columnDef.header)) }, 0), (0, import_jsx_runtime28.jsx)(Menu.Item, { disabled: !Object.values(columnVisibility).filter((visible) => !visible).length, leftSection: (0, import_jsx_runtime28.jsx)(IconColumns2, {}), onClick: handleShowAllColumns, children: (_g = localization.showAllColumns) === null || _g === void 0 ? void 0 : _g.replace("{column}", String(columnDef.header)) }, 1)] })] });
  return (0, import_jsx_runtime28.jsxs)(Menu, Object.assign({ closeOnItemClick: true, position: "bottom-start", withinPortal: true }, rest, { children: [(0, import_jsx_runtime28.jsx)(Tooltip, { label: (_h = actionIconProps === null || actionIconProps === void 0 ? void 0 : actionIconProps.title) !== null && _h !== void 0 ? _h : localization.columnActions, openDelay: 1e3, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(Menu.Target, { children: (0, import_jsx_runtime28.jsx)(ActionIcon, Object.assign({ "aria-label": localization.columnActions, color: "gray", size: "sm", variant: "subtle" }, actionIconProps, { children: (0, import_jsx_runtime28.jsx)(IconDotsVertical2, { size: "100%" }) })) }) }), (0, import_jsx_runtime28.jsx)(Menu.Dropdown, { children: (_l = (_k = (_j = columnDef.renderColumnActionsMenuItems) === null || _j === void 0 ? void 0 : _j.call(columnDef, {
    column,
    internalColumnMenuItems,
    table
  })) !== null && _k !== void 0 ? _k : renderColumnActionsMenuItems === null || renderColumnActionsMenuItems === void 0 ? void 0 : renderColumnActionsMenuItems({
    column,
    internalColumnMenuItems,
    table
  })) !== null && _l !== void 0 ? _l : internalColumnMenuItems })] }));
};
var MRT_TableHeadCell = (_a) => {
  var _b, _c, _d, _f, _g, _h;
  var { columnVirtualizer, header, renderedHeaderIndex = 0, table } = _a, rest = __rest(_a, ["columnVirtualizer", "header", "renderedHeaderIndex", "table"]);
  const direction = useDirection();
  const { getState, options: { columnFilterDisplayMode, columnResizeDirection, columnResizeMode, enableColumnActions, enableColumnDragging, enableColumnOrdering, enableColumnPinning, enableGrouping, enableMultiSort, layoutMode, mantineTableHeadCellProps }, refs: { tableHeadCellRefs }, setHoveredColumn } = table;
  const { columnSizingInfo, density, draggingColumn, grouping, hoveredColumn } = getState();
  const { column } = header;
  const { columnDef } = column;
  const { columnDefType } = columnDef;
  const arg = { column, table };
  const tableCellProps = Object.assign(Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineTableHeadCellProps, arg)), parseFromValuesOrFunc(columnDef.mantineTableHeadCellProps, arg)), rest);
  const widthStyles = {
    minWidth: `max(calc(var(--header-${parseCSSVarId(header === null || header === void 0 ? void 0 : header.id)}-size) * 1px), ${(_b = columnDef.minSize) !== null && _b !== void 0 ? _b : 30}px)`,
    width: `calc(var(--header-${parseCSSVarId(header.id)}-size) * 1px)`
  };
  if (layoutMode === "grid") {
    widthStyles.flex = `${[0, false].includes(columnDef.grow) ? 0 : `var(--header-${parseCSSVarId(header.id)}-size)`} 0 auto`;
  } else if (layoutMode === "grid-no-grow") {
    widthStyles.flex = `${+(columnDef.grow || 0)} 0 auto`;
  }
  const isColumnPinned = enableColumnPinning && columnDef.columnDefType !== "group" && column.getIsPinned();
  const isDraggingColumn = (draggingColumn === null || draggingColumn === void 0 ? void 0 : draggingColumn.id) === column.id;
  const isHoveredColumn = (hoveredColumn === null || hoveredColumn === void 0 ? void 0 : hoveredColumn.id) === column.id;
  const showColumnActions = (enableColumnActions || columnDef.enableColumnActions) && columnDef.enableColumnActions !== false;
  const showDragHandle = enableColumnDragging !== false && columnDef.enableColumnDragging !== false && (enableColumnDragging || enableColumnOrdering && columnDef.enableColumnOrdering !== false || enableGrouping && columnDef.enableGrouping !== false && !grouping.includes(column.id));
  const headerPL = (0, import_react17.useMemo)(() => {
    let pl = 0;
    if (column.getCanSort())
      pl++;
    if (showColumnActions)
      pl += 1.75;
    if (showDragHandle)
      pl += 1.25;
    return pl;
  }, [showColumnActions, showDragHandle]);
  const handleDragEnter = (_e) => {
    if (enableGrouping && (hoveredColumn === null || hoveredColumn === void 0 ? void 0 : hoveredColumn.id) === "drop-zone") {
      setHoveredColumn(null);
    }
    if (enableColumnOrdering && draggingColumn && columnDefType !== "group") {
      setHoveredColumn(columnDef.enableColumnOrdering !== false ? column : null);
    }
  };
  const headerElement = (columnDef === null || columnDef === void 0 ? void 0 : columnDef.Header) instanceof Function ? (_c = columnDef === null || columnDef === void 0 ? void 0 : columnDef.Header) === null || _c === void 0 ? void 0 : _c.call(columnDef, {
    column,
    header,
    table
  }) : (_d = columnDef === null || columnDef === void 0 ? void 0 : columnDef.Header) !== null && _d !== void 0 ? _d : columnDef.header;
  return (0, import_jsx_runtime28.jsxs)(TableTh, Object.assign({ colSpan: header.colSpan, "data-column-pinned": isColumnPinned || void 0, "data-dragging-column": isDraggingColumn || void 0, "data-first-right-pinned": isColumnPinned === "right" && column.getIsLastColumn(isColumnPinned) || void 0, "data-hovered-column-target": isHoveredColumn || void 0, "data-index": renderedHeaderIndex, "data-last-left-pinned": isColumnPinned === "left" && column.getIsLastColumn(isColumnPinned) || void 0, "data-resizing": columnResizeMode === "onChange" && (columnSizingInfo === null || columnSizingInfo === void 0 ? void 0 : columnSizingInfo.isResizingColumn) === column.id && columnResizeDirection || void 0 }, tableCellProps, { __vars: {
    "--mrt-table-cell-left": isColumnPinned === "left" ? `${column.getStart(isColumnPinned)}` : void 0,
    "--mrt-table-cell-right": isColumnPinned === "right" ? `${column.getAfter(isColumnPinned)}` : void 0,
    "--mrt-table-head-cell-padding": density === "xl" ? "23" : density === "md" ? "16" : "10"
  }, align: columnDefType === "group" ? "center" : direction.dir === "rtl" ? "right" : "left", className: clsx_default(classes$l.root, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith("grid")) && classes$l["root-grid"], enableMultiSort && column.getCanSort() && classes$l["root-no-select"], columnVirtualizer && classes$l["root-virtualized"], tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.className), onDragEnter: handleDragEnter, ref: (node) => {
    var _a2;
    if (node) {
      tableHeadCellRefs.current[column.id] = node;
      if (columnDefType !== "group") {
        (_a2 = columnVirtualizer === null || columnVirtualizer === void 0 ? void 0 : columnVirtualizer.measureElement) === null || _a2 === void 0 ? void 0 : _a2.call(columnVirtualizer, node);
      }
    }
  }, style: (theme) => Object.assign(Object.assign({}, widthStyles), parseFromValuesOrFunc(tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.style, theme)), children: [header.isPlaceholder ? null : (_f = tableCellProps.children) !== null && _f !== void 0 ? _f : (0, import_jsx_runtime28.jsxs)(Flex, { className: clsx_default("mrt-table-head-cell-content", classes$l.content, (columnDefType === "group" || (tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.align) === "center") && classes$l["content-center"], (tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.align) === "right" && classes$l["content-right"], column.getCanResize() && classes$l["content-spaced"]), children: [(0, import_jsx_runtime28.jsxs)(Flex, { __vars: {
    "--mrt-table-head-cell-labels-padding-left": `${headerPL}`
  }, className: clsx_default("mrt-table-head-cell-labels", classes$l.labels, column.getCanSort() && columnDefType !== "group" && classes$l["labels-sortable"], (tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.align) === "right" ? classes$l["labels-right"] : (tableCellProps === null || tableCellProps === void 0 ? void 0 : tableCellProps.align) === "center" && classes$l["labels-center"], columnDefType === "data" && classes$l["labels-data"]), onClick: column.getToggleSortingHandler(), children: [(0, import_jsx_runtime28.jsx)(Flex, { className: clsx_default("mrt-table-head-cell-content-wrapper", classes$l["content-wrapper"], columnDefType === "data" && classes$l["content-wrapper-hidden-overflow"], ((_h = (_g = columnDef.header) === null || _g === void 0 ? void 0 : _g.length) !== null && _h !== void 0 ? _h : 0) < 20 && classes$l["content-wrapper-nowrap"]), children: headerElement }), column.getCanFilter() && (0, import_jsx_runtime28.jsx)(MRT_TableHeadCellFilterLabel, { header, table }), column.getCanSort() && (0, import_jsx_runtime28.jsx)(MRT_TableHeadCellSortLabel, { header, table })] }), columnDefType !== "group" && (0, import_jsx_runtime28.jsxs)(Flex, { className: clsx_default("mrt-table-head-cell-content-actions", classes$l["content-actions"]), children: [showDragHandle && (0, import_jsx_runtime28.jsx)(MRT_TableHeadCellGrabHandle, { column, table, tableHeadCellRef: {
    current: tableHeadCellRefs.current[column.id]
  } }), showColumnActions && (0, import_jsx_runtime28.jsx)(MRT_ColumnActionMenu, { header, table })] }), column.getCanResize() && (0, import_jsx_runtime28.jsx)(MRT_TableHeadCellResizeHandle, { header, table })] }), columnFilterDisplayMode === "subheader" && column.getCanFilter() && (0, import_jsx_runtime28.jsx)(MRT_TableHeadCellFilterContainer, { header, table })] }));
};
var MRT_TableHeadRow = (_a) => {
  var { columnVirtualizer, headerGroup, table } = _a, rest = __rest(_a, ["columnVirtualizer", "headerGroup", "table"]);
  const { getState, options: { enableStickyHeader, layoutMode, mantineTableHeadRowProps } } = table;
  const { isFullScreen } = getState();
  const { virtualColumns, virtualPaddingLeft, virtualPaddingRight } = columnVirtualizer !== null && columnVirtualizer !== void 0 ? columnVirtualizer : {};
  const tableRowProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineTableHeadRowProps, {
    headerGroup,
    table
  })), rest);
  return (0, import_jsx_runtime28.jsxs)(TableTr, Object.assign({}, tableRowProps, { className: clsx_default(classes$m.root, (enableStickyHeader || isFullScreen) && classes$m.sticky, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith("grid")) && classes$m["layout-mode-grid"], tableRowProps === null || tableRowProps === void 0 ? void 0 : tableRowProps.className), children: [virtualPaddingLeft ? (0, import_jsx_runtime28.jsx)(Box, { component: "th", display: "flex", w: virtualPaddingLeft }) : null, (virtualColumns !== null && virtualColumns !== void 0 ? virtualColumns : headerGroup.headers).map((headerOrVirtualHeader, renderedHeaderIndex) => {
    let header = headerOrVirtualHeader;
    if (columnVirtualizer) {
      renderedHeaderIndex = headerOrVirtualHeader.index;
      header = headerGroup.headers[renderedHeaderIndex];
    }
    return (0, import_jsx_runtime28.jsx)(MRT_TableHeadCell, { columnVirtualizer, header, renderedHeaderIndex, table }, header.id);
  }), virtualPaddingRight ? (0, import_jsx_runtime28.jsx)(Box, { component: "th", display: "flex", w: virtualPaddingRight }) : null] }));
};
var classes$a = { "alert": "MRT_ToolbarAlertBanner-module_alert__PAhUK", "alert-stacked": "MRT_ToolbarAlertBanner-module_alert-stacked__HR7Nq", "alert-bottom": "MRT_ToolbarAlertBanner-module_alert-bottom__u9L-S", "alert-badge": "MRT_ToolbarAlertBanner-module_alert-badge__GwDmX", "toolbar-alert": "MRT_ToolbarAlertBanner-module_toolbar-alert__3sJGU", "head-overlay": "MRT_ToolbarAlertBanner-module_head-overlay__Hw7jK" };
var MRT_ToolbarAlertBanner = (_a) => {
  var _b, _c, _d;
  var { stackAlertBanner, table } = _a, rest = __rest(_a, ["stackAlertBanner", "table"]);
  const { getFilteredSelectedRowModel, getPrePaginationRowModel, getState, options: { enableRowSelection, enableSelectAll, icons: { IconX: IconX2 }, localization, mantineToolbarAlertBannerBadgeProps, mantineToolbarAlertBannerProps, manualPagination, positionToolbarAlertBanner, renderToolbarAlertBannerContent, rowCount } } = table;
  const { density, grouping, rowSelection, showAlertBanner } = getState();
  const alertProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineToolbarAlertBannerProps, {
    table
  })), rest);
  const badgeProps = parseFromValuesOrFunc(mantineToolbarAlertBannerBadgeProps, { table });
  const totalRowCount = rowCount !== null && rowCount !== void 0 ? rowCount : getPrePaginationRowModel().flatRows.length;
  const selectedRowCount = (0, import_react17.useMemo)(() => manualPagination ? Object.values(rowSelection).filter(Boolean).length : getFilteredSelectedRowModel().rows.length, [rowSelection, totalRowCount, manualPagination]);
  const selectedAlert = selectedRowCount ? (0, import_jsx_runtime28.jsxs)(Flex, { align: "center", gap: "sm", children: [(_c = (_b = localization.selectedCountOfRowCountRowsSelected) === null || _b === void 0 ? void 0 : _b.replace("{selectedCount}", selectedRowCount.toString())) === null || _c === void 0 ? void 0 : _c.replace("{rowCount}", totalRowCount.toString()), (0, import_jsx_runtime28.jsx)(Button, { onClick: (event) => getMRT_SelectAllHandler({ table })(event, false, true), size: "compact-xs", variant: "subtle", children: localization.clearSelection })] }) : null;
  const groupedAlert = grouping.length > 0 ? (0, import_jsx_runtime28.jsxs)(Flex, { children: [localization.groupedBy, " ", grouping.map((columnId, index) => (0, import_jsx_runtime28.jsxs)(import_react17.Fragment, { children: [index > 0 ? localization.thenBy : "", (0, import_jsx_runtime28.jsxs)(Badge, Object.assign({ className: classes$a["alert-badge"], rightSection: (0, import_jsx_runtime28.jsx)(ActionIcon, { color: "white", onClick: () => table.getColumn(columnId).toggleGrouping(), size: "xs", variant: "subtle", children: (0, import_jsx_runtime28.jsx)(IconX2, { style: { transform: "scale(0.8)" } }) }), variant: "filled" }, badgeProps, { children: [table.getColumn(columnId).columnDef.header, " "] }))] }, `${index}-${columnId}`))] }) : null;
  return (0, import_jsx_runtime28.jsx)(Collapse, { in: showAlertBanner || !!selectedAlert || !!groupedAlert, transitionDuration: stackAlertBanner ? 200 : 0, children: (0, import_jsx_runtime28.jsx)(Alert, Object.assign({ color: "blue", icon: false }, alertProps, { className: clsx_default(classes$a.alert, stackAlertBanner && !positionToolbarAlertBanner && classes$a["alert-stacked"], !stackAlertBanner && positionToolbarAlertBanner === "bottom" && classes$a["alert-bottom"], alertProps === null || alertProps === void 0 ? void 0 : alertProps.className), children: (_d = renderToolbarAlertBannerContent === null || renderToolbarAlertBannerContent === void 0 ? void 0 : renderToolbarAlertBannerContent({
    groupedAlert,
    selectedAlert,
    table
  })) !== null && _d !== void 0 ? _d : (0, import_jsx_runtime28.jsxs)(Flex, { className: clsx_default(classes$a["toolbar-alert"], positionToolbarAlertBanner === "head-overlay" && classes$a["head-overlay"], density), children: [enableRowSelection && enableSelectAll && positionToolbarAlertBanner === "head-overlay" && (0, import_jsx_runtime28.jsx)(MRT_SelectCheckbox, { table }), (0, import_jsx_runtime28.jsxs)(Stack, { children: [alertProps === null || alertProps === void 0 ? void 0 : alertProps.children, selectedAlert, groupedAlert] })] }) })) });
};
var MRT_TableHead = (_a) => {
  var { columnVirtualizer, table } = _a, rest = __rest(_a, ["columnVirtualizer", "table"]);
  const { getHeaderGroups, getSelectedRowModel, getState, options: { enableStickyHeader, layoutMode, mantineTableHeadProps, positionToolbarAlertBanner }, refs: { tableHeadRef } } = table;
  const { isFullScreen, showAlertBanner } = getState();
  const tableHeadProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineTableHeadProps, {
    table
  })), rest);
  const stickyHeader = enableStickyHeader || isFullScreen;
  return (0, import_jsx_runtime28.jsx)(TableThead, Object.assign({}, tableHeadProps, { className: clsx_default(classes$n.root, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith("grid")) ? classes$n["root-grid"] : classes$n["root-table-row-group"], stickyHeader && classes$n["root-sticky"], tableHeadProps === null || tableHeadProps === void 0 ? void 0 : tableHeadProps.className), pos: stickyHeader && (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith("grid")) ? "sticky" : "relative", ref: (ref) => {
    tableHeadRef.current = ref;
    if (tableHeadProps === null || tableHeadProps === void 0 ? void 0 : tableHeadProps.ref) {
      tableHeadProps.ref.current = ref;
    }
  }, children: positionToolbarAlertBanner === "head-overlay" && (showAlertBanner || getSelectedRowModel().rows.length > 0) ? (0, import_jsx_runtime28.jsx)(TableTr, { className: clsx_default(classes$n["banner-tr"], (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith("grid")) && classes$n.grid), children: (0, import_jsx_runtime28.jsx)(TableTh, { className: clsx_default(classes$n["banner-th"], (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith("grid")) && classes$n.grid), colSpan: table.getVisibleLeafColumns().length, children: (0, import_jsx_runtime28.jsx)(MRT_ToolbarAlertBanner, { table }) }) }) : getHeaderGroups().map((headerGroup) => (0, import_jsx_runtime28.jsx)(MRT_TableHeadRow, { columnVirtualizer, headerGroup, table }, headerGroup.id)) }));
};
var MRT_Table = (_a) => {
  var { table } = _a, rest = __rest(_a, ["table"]);
  const { getFlatHeaders, getState, options: { columns, enableTableFooter, enableTableHead, layoutMode, mantineTableProps, memoMode } } = table;
  const { columnSizing, columnSizingInfo, columnVisibility, density } = getState();
  const tableProps = Object.assign(Object.assign({ highlightOnHover: true, horizontalSpacing: density, verticalSpacing: density }, parseFromValuesOrFunc(mantineTableProps, { table })), rest);
  const columnSizeVars = (0, import_react17.useMemo)(() => {
    const headers = getFlatHeaders();
    const colSizes = {};
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      const colSize = header.getSize();
      colSizes[`--header-${parseCSSVarId(header.id)}-size`] = colSize;
      colSizes[`--col-${parseCSSVarId(header.column.id)}-size`] = colSize;
    }
    return colSizes;
  }, [columns, columnSizing, columnSizingInfo, columnVisibility]);
  const columnVirtualizer = useMRT_ColumnVirtualizer(table);
  const commonTableGroupProps = {
    columnVirtualizer,
    table
  };
  const { colorScheme } = useMantineColorScheme();
  const { stripedColor } = tableProps;
  return (0, import_jsx_runtime28.jsxs)(Table, Object.assign({ className: clsx_default("mrt-table", classes$w.root, (layoutMode === null || layoutMode === void 0 ? void 0 : layoutMode.startsWith("grid")) && classes$w["root-grid"], tableProps.className) }, tableProps, { __vars: Object.assign(Object.assign(Object.assign({}, columnSizeVars), { "--mrt-striped-row-background-color": stripedColor, "--mrt-striped-row-hover-background-color": stripedColor ? colorScheme === "dark" ? lighten(stripedColor, 0.08) : darken(stripedColor, 0.12) : void 0 }), tableProps.__vars), children: [enableTableHead && (0, import_jsx_runtime28.jsx)(MRT_TableHead, Object.assign({}, commonTableGroupProps)), memoMode === "table-body" || columnSizingInfo.isResizingColumn ? (0, import_jsx_runtime28.jsx)(Memo_MRT_TableBody, Object.assign({}, commonTableGroupProps, { tableProps })) : (0, import_jsx_runtime28.jsx)(MRT_TableBody, Object.assign({}, commonTableGroupProps, { tableProps })), enableTableFooter && (0, import_jsx_runtime28.jsx)(MRT_TableFooter, Object.assign({}, commonTableGroupProps))] }));
};
var MRT_EditRowModal = (_a) => {
  var _b;
  var { open, table } = _a, rest = __rest(_a, ["open", "table"]);
  const { getState, options: { mantineCreateRowModalProps, mantineEditRowModalProps, onCreatingRowCancel, onEditingRowCancel, renderCreateRowModalContent, renderEditRowModalContent }, setCreatingRow, setEditingRow } = table;
  const { creatingRow, editingRow } = getState();
  const row = creatingRow !== null && creatingRow !== void 0 ? creatingRow : editingRow;
  const arg = { row, table };
  const modalProps = Object.assign(Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineEditRowModalProps, arg)), creatingRow && parseFromValuesOrFunc(mantineCreateRowModalProps, arg)), rest);
  const internalEditComponents = row.getAllCells().filter((cell) => cell.column.columnDef.columnDefType === "data").map((cell) => (0, import_jsx_runtime28.jsx)(MRT_EditCellTextInput, { cell, table }, cell.id));
  const handleCancel = () => {
    var _a2;
    if (creatingRow) {
      onCreatingRowCancel === null || onCreatingRowCancel === void 0 ? void 0 : onCreatingRowCancel({ row, table });
      setCreatingRow(null);
    } else {
      onEditingRowCancel === null || onEditingRowCancel === void 0 ? void 0 : onEditingRowCancel({ row, table });
      setEditingRow(null);
    }
    row._valuesCache = {};
    (_a2 = modalProps.onClose) === null || _a2 === void 0 ? void 0 : _a2.call(modalProps);
  };
  return (0, import_react17.createElement)(Modal, Object.assign({ opened: open, withCloseButton: false }, modalProps, { key: row.id, onClose: handleCancel }), (_b = creatingRow && (renderCreateRowModalContent === null || renderCreateRowModalContent === void 0 ? void 0 : renderCreateRowModalContent({
    internalEditComponents,
    row,
    table
  })) || (renderEditRowModalContent === null || renderEditRowModalContent === void 0 ? void 0 : renderEditRowModalContent({
    internalEditComponents,
    row,
    table
  }))) !== null && _b !== void 0 ? _b : (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [(0, import_jsx_runtime28.jsx)("form", { onSubmit: (e) => e.preventDefault(), children: (0, import_jsx_runtime28.jsx)(Stack, { gap: "lg", pb: 24, pt: 16, children: internalEditComponents }) }), (0, import_jsx_runtime28.jsx)(Flex, { justify: "flex-end", children: (0, import_jsx_runtime28.jsx)(MRT_EditActionButtons, { row, table, variant: "text" }) })] }));
};
var useIsomorphicLayoutEffect2 = typeof window !== "undefined" ? import_react17.useLayoutEffect : import_react17.useEffect;
var MRT_TableContainer = (_a) => {
  var { table } = _a, rest = __rest(_a, ["table"]);
  const { getState, options: { createDisplayMode, editDisplayMode, enableStickyHeader, mantineLoadingOverlayProps, mantineTableContainerProps }, refs: { bottomToolbarRef, tableContainerRef, topToolbarRef } } = table;
  const { creatingRow, editingRow, isFullScreen, isLoading, showLoadingOverlay } = getState();
  const [totalToolbarHeight, setTotalToolbarHeight] = (0, import_react17.useState)(0);
  const tableContainerProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineTableContainerProps, { table })), rest);
  const loadingOverlayProps = parseFromValuesOrFunc(mantineLoadingOverlayProps, { table });
  useIsomorphicLayoutEffect2(() => {
    var _a2, _b, _c, _d;
    const topToolbarHeight = typeof document !== "undefined" ? (_b = (_a2 = topToolbarRef.current) === null || _a2 === void 0 ? void 0 : _a2.offsetHeight) !== null && _b !== void 0 ? _b : 0 : 0;
    const bottomToolbarHeight = typeof document !== "undefined" ? (_d = (_c = bottomToolbarRef === null || bottomToolbarRef === void 0 ? void 0 : bottomToolbarRef.current) === null || _c === void 0 ? void 0 : _c.offsetHeight) !== null && _d !== void 0 ? _d : 0 : 0;
    setTotalToolbarHeight(topToolbarHeight + bottomToolbarHeight);
  });
  const createModalOpen = createDisplayMode === "modal" && creatingRow;
  const editModalOpen = editDisplayMode === "modal" && editingRow;
  return (0, import_jsx_runtime28.jsxs)(Box, Object.assign({}, tableContainerProps, { __vars: Object.assign({ "--mrt-top-toolbar-height": `${totalToolbarHeight}` }, tableContainerProps === null || tableContainerProps === void 0 ? void 0 : tableContainerProps.__vars), className: clsx_default("mrt-table-container", classes$x.root, enableStickyHeader && classes$x["root-sticky"], isFullScreen && classes$x["root-fullscreen"], tableContainerProps === null || tableContainerProps === void 0 ? void 0 : tableContainerProps.className), ref: (node) => {
    if (node) {
      tableContainerRef.current = node;
      if (tableContainerProps === null || tableContainerProps === void 0 ? void 0 : tableContainerProps.ref) {
        tableContainerProps.ref.current = node;
      }
    }
  }, children: [(0, import_jsx_runtime28.jsx)(LoadingOverlay, Object.assign({ visible: isLoading || showLoadingOverlay, zIndex: 2 }, loadingOverlayProps)), (0, import_jsx_runtime28.jsx)(MRT_Table, { table }), (createModalOpen || editModalOpen) && (0, import_jsx_runtime28.jsx)(MRT_EditRowModal, { open: true, table })] }));
};
var classes$9 = { "root": "MRT_BottomToolbar-module_root__VDeWo", "root-fullscreen": "MRT_BottomToolbar-module_root-fullscreen__esE15", "custom-toolbar-container": "MRT_BottomToolbar-module_custom-toolbar-container__XcDRF", "paginator-container": "MRT_BottomToolbar-module_paginator-container__A3eWY", "paginator-container-alert-banner": "MRT_BottomToolbar-module_paginator-container-alert-banner__gyqtO" };
var commonClasses = { "common-toolbar-styles": "common-styles-module_common-toolbar-styles__DnjR8" };
var classes$8 = { "collapse": "MRT_ProgressBar-module_collapse__rOLJH", "collapse-top": "MRT_ProgressBar-module_collapse-top__oCi0h" };
var MRT_ProgressBar = (_a) => {
  var { isTopToolbar, table } = _a, rest = __rest(_a, ["isTopToolbar", "table"]);
  const { getState, options: { mantineProgressProps } } = table;
  const { isSaving, showProgressBars } = getState();
  const linearProgressProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineProgressProps, {
    isTopToolbar,
    table
  })), rest);
  return (0, import_jsx_runtime28.jsx)(Collapse, { className: clsx_default(classes$8.collapse, isTopToolbar && classes$8["collapse-top"]), in: isSaving || showProgressBars, children: (0, import_jsx_runtime28.jsx)(Progress, Object.assign({ animated: true, "aria-busy": "true", "aria-label": "Loading", radius: 0, value: 100 }, linearProgressProps)) });
};
var classes$7 = { "root": "MRT_TablePagination-module_root__yZ8pm", "pagesize": "MRT_TablePagination-module_pagesize__-vmTn", "with-top-margin": "MRT_TablePagination-module_with-top-margin__aM5-m" };
var defaultRowsPerPage = [5, 10, 15, 20, 25, 30, 50, 100].map((x) => x.toString());
var MRT_TablePagination = (_a) => {
  var _b;
  var { position = "bottom", table } = _a, props = __rest(_a, ["position", "table"]);
  const { getPrePaginationRowModel, getState, options: { enableToolbarInternalActions, icons: { IconChevronLeft: IconChevronLeft2, IconChevronLeftPipe: IconChevronLeftPipe2, IconChevronRight: IconChevronRight2, IconChevronRightPipe: IconChevronRightPipe2 }, localization, mantinePaginationProps, paginationDisplayMode, rowCount }, setPageIndex, setPageSize } = table;
  const { pagination: { pageIndex = 0, pageSize = 10 }, showGlobalFilter } = getState();
  const paginationProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantinePaginationProps, {
    table
  })), props);
  const totalRowCount = rowCount !== null && rowCount !== void 0 ? rowCount : getPrePaginationRowModel().rows.length;
  const numberOfPages = Math.ceil(totalRowCount / pageSize);
  const showFirstLastPageButtons = numberOfPages > 2;
  const firstRowIndex = pageIndex * pageSize;
  const lastRowIndex = Math.min(pageIndex * pageSize + pageSize, totalRowCount);
  const _c = paginationProps !== null && paginationProps !== void 0 ? paginationProps : {}, { rowsPerPageOptions = defaultRowsPerPage, showRowsPerPage = true, withEdges = showFirstLastPageButtons } = _c, rest = __rest(_c, ["rowsPerPageOptions", "showRowsPerPage", "withEdges"]);
  const needsTopMargin = position === "top" && enableToolbarInternalActions && !showGlobalFilter;
  return (0, import_jsx_runtime28.jsxs)(Box, { className: clsx_default("mrt-table-pagination", classes$7.root, needsTopMargin && classes$7["with-top-margin"]), children: [(paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.showRowsPerPage) !== false && (0, import_jsx_runtime28.jsxs)(Group, { gap: "xs", children: [(0, import_jsx_runtime28.jsx)(Text, { id: "rpp-label", children: localization.rowsPerPage }), (0, import_jsx_runtime28.jsx)(Select, { allowDeselect: false, "aria-labelledby": "rpp-label", className: classes$7.pagesize, data: (_b = paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.rowsPerPageOptions) !== null && _b !== void 0 ? _b : defaultRowsPerPage, onChange: (value) => setPageSize(+value), value: pageSize.toString() })] }), paginationDisplayMode === "pages" ? (0, import_jsx_runtime28.jsx)(Pagination, Object.assign({ firstIcon: IconChevronLeftPipe2, lastIcon: IconChevronRightPipe2, nextIcon: IconChevronRight2, onChange: (newPageIndex) => setPageIndex(newPageIndex - 1), previousIcon: IconChevronLeft2, total: numberOfPages, value: pageIndex + 1, withEdges }, rest)) : paginationDisplayMode === "default" ? (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [(0, import_jsx_runtime28.jsx)(Text, { children: `${lastRowIndex === 0 ? 0 : (firstRowIndex + 1).toLocaleString()}-${lastRowIndex.toLocaleString()} ${localization.of} ${totalRowCount.toLocaleString()}` }), (0, import_jsx_runtime28.jsxs)(Group, { gap: 6, children: [withEdges && (0, import_jsx_runtime28.jsx)(ActionIcon, { "aria-label": localization.goToFirstPage, color: "gray", disabled: pageIndex <= 0, onClick: () => setPageIndex(0), variant: "subtle", children: (0, import_jsx_runtime28.jsx)(IconChevronLeftPipe2, {}) }), (0, import_jsx_runtime28.jsx)(ActionIcon, { "aria-label": localization.goToPreviousPage, color: "gray", disabled: pageIndex <= 0, onClick: () => setPageIndex(pageIndex - 1), variant: "subtle", children: (0, import_jsx_runtime28.jsx)(IconChevronLeft2, {}) }), (0, import_jsx_runtime28.jsx)(ActionIcon, { "aria-label": localization.goToNextPage, color: "gray", disabled: lastRowIndex >= totalRowCount, onClick: () => setPageIndex(pageIndex + 1), variant: "subtle", children: (0, import_jsx_runtime28.jsx)(IconChevronRight2, {}) }), withEdges && (0, import_jsx_runtime28.jsx)(ActionIcon, { "aria-label": localization.goToLastPage, color: "gray", disabled: lastRowIndex >= totalRowCount, onClick: () => setPageIndex(numberOfPages - 1), variant: "subtle", children: (0, import_jsx_runtime28.jsx)(IconChevronRightPipe2, {}) })] })] }) : null] });
};
var classes$6 = { "root": "MRT_ToolbarDropZone-module_root__eGTXb", "hovered": "MRT_ToolbarDropZone-module_hovered__g7PeJ" };
var MRT_ToolbarDropZone = (_a) => {
  var { table } = _a, rest = __rest(_a, ["table"]);
  const { getState, options: { enableGrouping, localization }, setHoveredColumn, setShowToolbarDropZone } = table;
  const { draggingColumn, grouping, hoveredColumn, showToolbarDropZone } = getState();
  const handleDragEnter = (_event) => {
    setHoveredColumn({ id: "drop-zone" });
  };
  (0, import_react17.useEffect)(() => {
    var _a2;
    if (((_a2 = table.options.state) === null || _a2 === void 0 ? void 0 : _a2.showToolbarDropZone) !== void 0) {
      setShowToolbarDropZone(!!enableGrouping && !!draggingColumn && draggingColumn.columnDef.enableGrouping !== false && !grouping.includes(draggingColumn.id));
    }
  }, [enableGrouping, draggingColumn, grouping]);
  return (0, import_jsx_runtime28.jsx)(Transition, { mounted: showToolbarDropZone, transition: "fade", children: () => {
    var _a2, _b;
    return (0, import_jsx_runtime28.jsx)(Flex, Object.assign({ className: clsx_default("mrt-toolbar-dropzone", classes$6.root, (hoveredColumn === null || hoveredColumn === void 0 ? void 0 : hoveredColumn.id) === "drop-zone" && classes$6.hovered), onDragEnter: handleDragEnter }, rest, { children: (0, import_jsx_runtime28.jsx)(Text, { children: localization.dropToGroupBy.replace("{column}", (_b = (_a2 = draggingColumn === null || draggingColumn === void 0 ? void 0 : draggingColumn.columnDef) === null || _a2 === void 0 ? void 0 : _a2.header) !== null && _b !== void 0 ? _b : "") }) }));
  } });
};
var MRT_BottomToolbar = (_a) => {
  var { table } = _a, rest = __rest(_a, ["table"]);
  const { getState, options: { enablePagination, mantineBottomToolbarProps, positionPagination, positionToolbarAlertBanner, positionToolbarDropZone, renderBottomToolbarCustomActions }, refs: { bottomToolbarRef } } = table;
  const { isFullScreen } = getState();
  const isMobile = useMediaQuery("(max-width: 720px)");
  const toolbarProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineBottomToolbarProps, {
    table
  })), rest);
  const stackAlertBanner = isMobile || !!renderBottomToolbarCustomActions;
  return (0, import_jsx_runtime28.jsxs)(Box, Object.assign({}, toolbarProps, { className: clsx_default("mrt-bottom-toolbar", classes$9.root, commonClasses["common-toolbar-styles"], isFullScreen && classes$9["root-fullscreen"], toolbarProps === null || toolbarProps === void 0 ? void 0 : toolbarProps.className), ref: (node) => {
    if (node) {
      bottomToolbarRef.current = node;
      if (toolbarProps === null || toolbarProps === void 0 ? void 0 : toolbarProps.ref) {
        toolbarProps.ref.current = node;
      }
    }
  }, children: [(0, import_jsx_runtime28.jsx)(MRT_ProgressBar, { isTopToolbar: false, table }), positionToolbarAlertBanner === "bottom" && (0, import_jsx_runtime28.jsx)(MRT_ToolbarAlertBanner, { stackAlertBanner, table }), ["both", "bottom"].includes(positionToolbarDropZone !== null && positionToolbarDropZone !== void 0 ? positionToolbarDropZone : "") && (0, import_jsx_runtime28.jsx)(MRT_ToolbarDropZone, { table }), (0, import_jsx_runtime28.jsxs)(Box, { className: classes$9["custom-toolbar-container"], children: [renderBottomToolbarCustomActions ? renderBottomToolbarCustomActions({ table }) : (0, import_jsx_runtime28.jsx)("span", {}), (0, import_jsx_runtime28.jsx)(Box, { className: clsx_default(classes$9["paginator-container"], stackAlertBanner && classes$9["paginator-container-alert-banner"]), children: enablePagination && ["both", "bottom"].includes(positionPagination !== null && positionPagination !== void 0 ? positionPagination : "") && (0, import_jsx_runtime28.jsx)(MRT_TablePagination, { position: "bottom", table }) })] })] }));
};
var classes$5 = { "root": "MRT_TopToolbar-module_root__r4-V9", "root-fullscreen": "MRT_TopToolbar-module_root-fullscreen__3itT8", "actions-container": "MRT_TopToolbar-module_actions-container__-uL0u", "actions-container-stack-alert": "MRT_TopToolbar-module_actions-container-stack-alert__OYDL6" };
var classes$4 = { "root": "MRT_ToolbarInternalButtons-module_root__NKoUG" };
var classes$3 = { "root": "MRT_ShowHideColumnsMenu-module_root__2UWak", "content": "MRT_ShowHideColumnsMenu-module_content__ehkWQ" };
var classes$2 = { "root": "MRT_ShowHideColumnsMenuItems-module_root__wYgv-", "menu": "MRT_ShowHideColumnsMenuItems-module_menu__CeATR", "grab": "MRT_ShowHideColumnsMenuItems-module_grab__a-d-y", "pin": "MRT_ShowHideColumnsMenuItems-module_pin__P437b", "switch": "MRT_ShowHideColumnsMenuItems-module_switch__tMsdt", "header": "MRT_ShowHideColumnsMenuItems-module_header__xVkKb" };
var classes$1 = { "root": "MRT_ColumnPinningButtons-module_root__scTtW", "left": "MRT_ColumnPinningButtons-module_left__W6Aog", "right": "MRT_ColumnPinningButtons-module_right__7AJE3" };
var MRT_ColumnPinningButtons = ({ column, table }) => {
  const { options: { icons: { IconPinned: IconPinned2, IconPinnedOff: IconPinnedOff2 }, localization } } = table;
  return (0, import_jsx_runtime28.jsx)(Flex, { className: clsx_default("mrt-column-pinning-buttons", classes$1.root), children: column.getIsPinned() ? (0, import_jsx_runtime28.jsx)(Tooltip, { label: localization.unpin, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(ActionIcon, { color: "gray", onClick: () => column.pin(false), size: "md", variant: "subtle", children: (0, import_jsx_runtime28.jsx)(IconPinnedOff2, {}) }) }) : (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [(0, import_jsx_runtime28.jsx)(Tooltip, { label: localization.pinToLeft, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(ActionIcon, { color: "gray", onClick: () => column.pin("left"), size: "md", variant: "subtle", children: (0, import_jsx_runtime28.jsx)(IconPinned2, { className: classes$1.left }) }) }), (0, import_jsx_runtime28.jsx)(Tooltip, { label: localization.pinToRight, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(ActionIcon, { color: "gray", onClick: () => column.pin("right"), size: "md", variant: "subtle", children: (0, import_jsx_runtime28.jsx)(IconPinned2, { className: classes$1.right }) }) })] }) });
};
var MRT_ShowHideColumnsMenuItems = ({ allColumns, column, hoveredColumn, setHoveredColumn, table }) => {
  var _a;
  const theme = useMantineTheme();
  const { getState, options: { enableColumnOrdering, enableColumnPinning, enableHiding, localization }, setColumnOrder } = table;
  const { columnOrder } = getState();
  const { columnDef } = column;
  const { columnDefType } = columnDef;
  const switchChecked = columnDefType !== "group" && column.getIsVisible() || columnDefType === "group" && column.getLeafColumns().some((col) => col.getIsVisible());
  const handleToggleColumnHidden = (column2) => {
    var _a2, _b;
    if (columnDefType === "group") {
      (_b = (_a2 = column2 === null || column2 === void 0 ? void 0 : column2.columns) === null || _a2 === void 0 ? void 0 : _a2.forEach) === null || _b === void 0 ? void 0 : _b.call(_a2, (childColumn) => {
        childColumn.toggleVisibility(!switchChecked);
      });
    } else {
      column2.toggleVisibility();
    }
  };
  const menuItemRef = (0, import_react17.useRef)(null);
  const [isDragging, setIsDragging] = (0, import_react17.useState)(false);
  const handleDragStart = (e) => {
    setIsDragging(true);
    e.dataTransfer.setDragImage(menuItemRef.current, 0, 0);
  };
  const handleDragEnd = (_e) => {
    setIsDragging(false);
    setHoveredColumn(null);
    if (hoveredColumn) {
      setColumnOrder(reorderColumn(column, hoveredColumn, columnOrder));
    }
  };
  const handleDragEnter = (_e) => {
    if (!isDragging && columnDef.enableColumnOrdering !== false) {
      setHoveredColumn(column);
    }
  };
  if (!columnDef.header || columnDef.visibleInShowHideMenu === false) {
    return null;
  }
  return (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [(0, import_jsx_runtime28.jsx)(Menu.Item, Object.assign({ className: classes$2.root, component: "span", onDragEnter: handleDragEnter, ref: menuItemRef, style: {
    "--_column-depth": `${(column.depth + 0.5) * 2}rem`,
    "--_hover-color": getPrimaryColor(theme)
  } }, dataVariable("dragging", isDragging), dataVariable("order-hovered", (hoveredColumn === null || hoveredColumn === void 0 ? void 0 : hoveredColumn.id) === column.id), { children: (0, import_jsx_runtime28.jsxs)(Box, { className: classes$2.menu, children: [columnDefType !== "group" && enableColumnOrdering && !allColumns.some((col) => col.columnDef.columnDefType === "group") && (columnDef.enableColumnOrdering !== false ? (0, import_jsx_runtime28.jsx)(MRT_GrabHandleButton, { onDragEnd: handleDragEnd, onDragStart: handleDragStart, table }) : (0, import_jsx_runtime28.jsx)(Box, { className: classes$2.grab })), enableColumnPinning && (column.getCanPin() ? (0, import_jsx_runtime28.jsx)(MRT_ColumnPinningButtons, { column, table }) : (0, import_jsx_runtime28.jsx)(Box, { className: classes$2.pin })), enableHiding ? (0, import_jsx_runtime28.jsx)(Tooltip, { label: localization.toggleVisibility, openDelay: 1e3, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(Switch, { checked: switchChecked, className: classes$2.switch, disabled: !column.getCanHide(), label: columnDef.header, onChange: () => handleToggleColumnHidden(column) }) }) : (0, import_jsx_runtime28.jsx)(Text, { className: classes$2.header, children: columnDef.header })] }) })), (_a = column.columns) === null || _a === void 0 ? void 0 : _a.map((c, i) => (0, import_jsx_runtime28.jsx)(MRT_ShowHideColumnsMenuItems, { allColumns, column: c, hoveredColumn, setHoveredColumn, table }, `${i}-${c.id}`))] });
};
var MRT_ShowHideColumnsMenu = ({ table }) => {
  const { getAllColumns, getAllLeafColumns, getCenterLeafColumns, getIsAllColumnsVisible, getIsSomeColumnsPinned, getIsSomeColumnsVisible, getLeftLeafColumns, getRightLeafColumns, getState, options: { enableColumnOrdering, enableColumnPinning, enableHiding, localization } } = table;
  const { columnOrder, columnPinning } = getState();
  const handleToggleAllColumns = (value) => {
    getAllLeafColumns().filter((col) => col.columnDef.enableHiding !== false).forEach((col) => col.toggleVisibility(value));
  };
  const allColumns = (0, import_react17.useMemo)(() => {
    const columns = getAllColumns();
    if (columnOrder.length > 0 && !columns.some((col) => col.columnDef.columnDefType === "group")) {
      return [
        ...getLeftLeafColumns(),
        ...Array.from(new Set(columnOrder)).map((colId) => getCenterLeafColumns().find((col) => (col === null || col === void 0 ? void 0 : col.id) === colId)),
        ...getRightLeafColumns()
      ].filter(Boolean);
    }
    return columns;
  }, [
    columnOrder,
    columnPinning,
    getAllColumns(),
    getCenterLeafColumns(),
    getLeftLeafColumns(),
    getRightLeafColumns()
  ]);
  const [hoveredColumn, setHoveredColumn] = (0, import_react17.useState)(null);
  return (0, import_jsx_runtime28.jsxs)(Menu.Dropdown, { className: clsx_default("mrt-show-hide-columns-menu", classes$3.root), children: [(0, import_jsx_runtime28.jsxs)(Flex, { className: classes$3.content, children: [enableHiding && (0, import_jsx_runtime28.jsx)(Button, { disabled: !getIsSomeColumnsVisible(), onClick: () => handleToggleAllColumns(false), variant: "subtle", children: localization.hideAll }), enableColumnOrdering && (0, import_jsx_runtime28.jsx)(Button, { onClick: () => table.setColumnOrder(getDefaultColumnOrderIds(table.options)), variant: "subtle", children: localization.resetOrder }), enableColumnPinning && (0, import_jsx_runtime28.jsx)(Button, { disabled: !getIsSomeColumnsPinned(), onClick: () => table.resetColumnPinning(true), variant: "subtle", children: localization.unpinAll }), enableHiding && (0, import_jsx_runtime28.jsx)(Button, { disabled: getIsAllColumnsVisible(), onClick: () => handleToggleAllColumns(true), variant: "subtle", children: localization.showAll })] }), (0, import_jsx_runtime28.jsx)(Divider, {}), allColumns.map((column, index) => (0, import_jsx_runtime28.jsx)(MRT_ShowHideColumnsMenuItems, { allColumns, column, hoveredColumn, setHoveredColumn, table }, `${index}-${column.id}`))] });
};
var MRT_ShowHideColumnsButton = (_a) => {
  var { table, title } = _a, rest = __rest(_a, ["table", "title"]);
  const { icons: { IconColumns: IconColumns2 }, localization: { showHideColumns } } = table.options;
  return (0, import_jsx_runtime28.jsxs)(Menu, { closeOnItemClick: false, withinPortal: true, children: [(0, import_jsx_runtime28.jsx)(Tooltip, { label: title !== null && title !== void 0 ? title : showHideColumns, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(Menu.Target, { children: (0, import_jsx_runtime28.jsx)(ActionIcon, Object.assign({ "aria-label": title !== null && title !== void 0 ? title : showHideColumns, color: "gray", size: "lg", variant: "subtle" }, rest, { children: (0, import_jsx_runtime28.jsx)(IconColumns2, {}) })) }) }), (0, import_jsx_runtime28.jsx)(MRT_ShowHideColumnsMenu, { table })] });
};
var next = {
  md: "xs",
  xl: "md",
  xs: "xl"
};
var MRT_ToggleDensePaddingButton = (_a) => {
  var { table: { getState, options: { icons: { IconBaselineDensityLarge: IconBaselineDensityLarge2, IconBaselineDensityMedium: IconBaselineDensityMedium2, IconBaselineDensitySmall: IconBaselineDensitySmall2 }, localization: { toggleDensity } }, setDensity }, title } = _a, rest = __rest(_a, ["table", "title"]);
  const { density } = getState();
  return (0, import_jsx_runtime28.jsx)(Tooltip, { label: title !== null && title !== void 0 ? title : toggleDensity, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(ActionIcon, Object.assign({ "aria-label": title !== null && title !== void 0 ? title : toggleDensity, color: "gray", onClick: () => setDensity((current) => next[current]), size: "lg", variant: "subtle" }, rest, { children: density === "xs" ? (0, import_jsx_runtime28.jsx)(IconBaselineDensitySmall2, {}) : density === "md" ? (0, import_jsx_runtime28.jsx)(IconBaselineDensityMedium2, {}) : (0, import_jsx_runtime28.jsx)(IconBaselineDensityLarge2, {}) })) });
};
var MRT_ToggleFiltersButton = (_a) => {
  var { table: { getState, options: { icons: { IconFilter: IconFilter2, IconFilterOff: IconFilterOff2 }, localization: { showHideFilters } }, setShowColumnFilters }, title } = _a, rest = __rest(_a, ["table", "title"]);
  const { showColumnFilters } = getState();
  return (0, import_jsx_runtime28.jsx)(Tooltip, { label: title !== null && title !== void 0 ? title : showHideFilters, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(ActionIcon, Object.assign({ "aria-label": title !== null && title !== void 0 ? title : showHideFilters, color: "gray", onClick: () => setShowColumnFilters((current) => !current), size: "lg", variant: "subtle" }, rest, { children: showColumnFilters ? (0, import_jsx_runtime28.jsx)(IconFilterOff2, {}) : (0, import_jsx_runtime28.jsx)(IconFilter2, {}) })) });
};
var MRT_ToggleFullScreenButton = (_a) => {
  var { table: { getState, options: { icons: { IconMaximize: IconMaximize2, IconMinimize: IconMinimize2 }, localization: { toggleFullScreen } }, setIsFullScreen }, title } = _a, rest = __rest(_a, ["table", "title"]);
  const { isFullScreen } = getState();
  const [tooltipOpened, setTooltipOpened] = (0, import_react17.useState)(false);
  const handleToggleFullScreen = () => {
    setTooltipOpened(false);
    setIsFullScreen((current) => !current);
  };
  return (0, import_jsx_runtime28.jsx)(Tooltip, { label: title !== null && title !== void 0 ? title : toggleFullScreen, opened: tooltipOpened, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(ActionIcon, Object.assign({ "aria-label": title !== null && title !== void 0 ? title : toggleFullScreen, color: "gray", onClick: handleToggleFullScreen, onMouseEnter: () => setTooltipOpened(true), onMouseLeave: () => setTooltipOpened(false), size: "lg", variant: "subtle" }, rest, { children: isFullScreen ? (0, import_jsx_runtime28.jsx)(IconMinimize2, {}) : (0, import_jsx_runtime28.jsx)(IconMaximize2, {}) })) });
};
var MRT_ToggleGlobalFilterButton = (_a) => {
  var { table: { getState, options: { icons: { IconSearch: IconSearch2, IconSearchOff: IconSearchOff2 }, localization: { showHideSearch } }, refs: { searchInputRef }, setShowGlobalFilter }, title } = _a, rest = __rest(_a, ["table", "title"]);
  const { globalFilter, showGlobalFilter } = getState();
  const handleToggleSearch = () => {
    setShowGlobalFilter(!showGlobalFilter);
    setTimeout(() => {
      var _a2;
      return (_a2 = searchInputRef.current) === null || _a2 === void 0 ? void 0 : _a2.focus();
    }, 100);
  };
  return (0, import_jsx_runtime28.jsx)(Tooltip, { label: title !== null && title !== void 0 ? title : showHideSearch, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(ActionIcon, Object.assign({ "aria-label": title !== null && title !== void 0 ? title : showHideSearch, color: "gray", disabled: !!globalFilter, onClick: handleToggleSearch, size: "lg", variant: "subtle" }, rest, { children: showGlobalFilter ? (0, import_jsx_runtime28.jsx)(IconSearchOff2, {}) : (0, import_jsx_runtime28.jsx)(IconSearch2, {}) })) });
};
var MRT_ToolbarInternalButtons = (_a) => {
  var _b;
  var { table } = _a, rest = __rest(_a, ["table"]);
  const { options: { columnFilterDisplayMode, enableColumnFilters, enableColumnOrdering, enableColumnPinning, enableDensityToggle, enableFilters, enableFullScreenToggle, enableGlobalFilter, enableHiding, initialState, renderToolbarInternalActions } } = table;
  return (0, import_jsx_runtime28.jsx)(Flex, Object.assign({}, rest, { className: clsx_default("mrt-toolbar-internal-buttons", classes$4.root, rest === null || rest === void 0 ? void 0 : rest.className), children: (_b = renderToolbarInternalActions === null || renderToolbarInternalActions === void 0 ? void 0 : renderToolbarInternalActions({ table })) !== null && _b !== void 0 ? _b : (0, import_jsx_runtime28.jsxs)(import_jsx_runtime28.Fragment, { children: [enableFilters && enableGlobalFilter && !(initialState === null || initialState === void 0 ? void 0 : initialState.showGlobalFilter) && (0, import_jsx_runtime28.jsx)(MRT_ToggleGlobalFilterButton, { table }), enableFilters && enableColumnFilters && columnFilterDisplayMode !== "popover" && (0, import_jsx_runtime28.jsx)(MRT_ToggleFiltersButton, { table }), (enableHiding || enableColumnOrdering || enableColumnPinning) && (0, import_jsx_runtime28.jsx)(MRT_ShowHideColumnsButton, { table }), enableDensityToggle && (0, import_jsx_runtime28.jsx)(MRT_ToggleDensePaddingButton, { table }), enableFullScreenToggle && (0, import_jsx_runtime28.jsx)(MRT_ToggleFullScreenButton, { table })] }) }));
};
var classes12 = { "root": "MRT_GlobalFilterTextInput-module_root__Xmcpv", "collapse": "MRT_GlobalFilterTextInput-module_collapse__v311d" };
var MRT_GlobalFilterTextInput = (_a) => {
  var { table } = _a, rest = __rest(_a, ["table"]);
  const { getState, options: { enableGlobalFilterModes, icons: { IconSearch: IconSearch2, IconX: IconX2 }, localization, mantineSearchTextInputProps, manualFiltering }, refs: { searchInputRef }, setGlobalFilter } = table;
  const { globalFilter, showGlobalFilter } = getState();
  const textFieldProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineSearchTextInputProps, {
    table
  })), rest);
  const isMounted = (0, import_react17.useRef)(false);
  const [searchValue, setSearchValue] = (0, import_react17.useState)(globalFilter !== null && globalFilter !== void 0 ? globalFilter : "");
  const [debouncedSearchValue] = useDebouncedValue(searchValue, manualFiltering ? 500 : 250);
  (0, import_react17.useEffect)(() => {
    setGlobalFilter(debouncedSearchValue || void 0);
  }, [debouncedSearchValue]);
  const handleClear = () => {
    setSearchValue("");
    setGlobalFilter(void 0);
  };
  (0, import_react17.useEffect)(() => {
    if (isMounted.current) {
      if (globalFilter === void 0) {
        handleClear();
      } else {
        setSearchValue(globalFilter);
      }
    }
    isMounted.current = true;
  }, [globalFilter]);
  return (0, import_jsx_runtime28.jsxs)(Collapse, { className: classes12.collapse, in: showGlobalFilter, children: [enableGlobalFilterModes && (0, import_jsx_runtime28.jsxs)(Menu, { withinPortal: true, children: [(0, import_jsx_runtime28.jsx)(Menu.Target, { children: (0, import_jsx_runtime28.jsx)(ActionIcon, { "aria-label": localization.changeSearchMode, color: "gray", size: "sm", variant: "transparent", children: (0, import_jsx_runtime28.jsx)(IconSearch2, {}) }) }), (0, import_jsx_runtime28.jsx)(MRT_FilterOptionMenu, { onSelect: handleClear, table })] }), (0, import_jsx_runtime28.jsx)(TextInput, Object.assign({ leftSection: !enableGlobalFilterModes && (0, import_jsx_runtime28.jsx)(IconSearch2, {}), mt: 0, mx: "sm", onChange: (event) => setSearchValue(event.target.value), placeholder: localization.search, rightSection: searchValue ? (0, import_jsx_runtime28.jsx)(ActionIcon, { "aria-label": localization.clearSearch, color: "gray", disabled: !(searchValue === null || searchValue === void 0 ? void 0 : searchValue.length), onClick: handleClear, size: "sm", variant: "transparent", children: (0, import_jsx_runtime28.jsx)(Tooltip, { label: localization.clearSearch, withinPortal: true, children: (0, import_jsx_runtime28.jsx)(IconX2, {}) }) }) : null, value: searchValue !== null && searchValue !== void 0 ? searchValue : "", variant: "filled" }, textFieldProps, { className: clsx_default("mrt-global-filter-text-input", classes12.root, textFieldProps === null || textFieldProps === void 0 ? void 0 : textFieldProps.className), ref: (node) => {
    if (node) {
      searchInputRef.current = node;
      if (textFieldProps === null || textFieldProps === void 0 ? void 0 : textFieldProps.ref) {
        textFieldProps.ref = node;
      }
    }
  } }))] });
};
var MRT_TopToolbar = (_a) => {
  var _b;
  var { table } = _a, rest = __rest(_a, ["table"]);
  const { getState, options: { enableGlobalFilter, enablePagination, enableToolbarInternalActions, mantineTopToolbarProps, positionGlobalFilter, positionPagination, positionToolbarAlertBanner, positionToolbarDropZone, renderTopToolbarCustomActions }, refs: { topToolbarRef } } = table;
  const { isFullScreen, showGlobalFilter } = getState();
  const isMobile = useMediaQuery("(max-width:720px)");
  const isTablet = useMediaQuery("(max-width:1024px)");
  const toolbarProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantineTopToolbarProps, { table })), rest);
  const stackAlertBanner = isMobile || !!renderTopToolbarCustomActions || showGlobalFilter && isTablet;
  const globalFilterProps = {
    style: !isTablet ? {
      zIndex: 3
    } : void 0,
    table
  };
  return (0, import_jsx_runtime28.jsxs)(Box, Object.assign({}, toolbarProps, { className: clsx_default(commonClasses["common-toolbar-styles"], classes$5["root"], isFullScreen && classes$5["root-fullscreen"], toolbarProps === null || toolbarProps === void 0 ? void 0 : toolbarProps.className), ref: (node) => {
    if (node) {
      topToolbarRef.current = node;
      if (toolbarProps === null || toolbarProps === void 0 ? void 0 : toolbarProps.ref) {
        toolbarProps.ref.current = node;
      }
    }
  }, children: [positionToolbarAlertBanner === "top" && (0, import_jsx_runtime28.jsx)(MRT_ToolbarAlertBanner, { stackAlertBanner, table }), ["both", "top"].includes(positionToolbarDropZone !== null && positionToolbarDropZone !== void 0 ? positionToolbarDropZone : "") && (0, import_jsx_runtime28.jsx)(MRT_ToolbarDropZone, { table }), (0, import_jsx_runtime28.jsxs)(Flex, { className: clsx_default(classes$5["actions-container"], stackAlertBanner && classes$5["actions-container-stack-alert"]), children: [enableGlobalFilter && positionGlobalFilter === "left" && (0, import_jsx_runtime28.jsx)(MRT_GlobalFilterTextInput, Object.assign({}, globalFilterProps)), (_b = renderTopToolbarCustomActions === null || renderTopToolbarCustomActions === void 0 ? void 0 : renderTopToolbarCustomActions({ table })) !== null && _b !== void 0 ? _b : (0, import_jsx_runtime28.jsx)("span", {}), enableToolbarInternalActions ? (0, import_jsx_runtime28.jsxs)(Flex, { justify: "end", wrap: "wrap-reverse", children: [enableGlobalFilter && positionGlobalFilter === "right" && (0, import_jsx_runtime28.jsx)(MRT_GlobalFilterTextInput, Object.assign({}, globalFilterProps)), (0, import_jsx_runtime28.jsx)(MRT_ToolbarInternalButtons, { table })] }) : enableGlobalFilter && positionGlobalFilter === "right" && (0, import_jsx_runtime28.jsx)(MRT_GlobalFilterTextInput, Object.assign({}, globalFilterProps))] }), enablePagination && ["both", "top"].includes(positionPagination !== null && positionPagination !== void 0 ? positionPagination : "") && (0, import_jsx_runtime28.jsx)(Flex, { justify: "end", children: (0, import_jsx_runtime28.jsx)(MRT_TablePagination, { position: "top", table }) }), (0, import_jsx_runtime28.jsx)(MRT_ProgressBar, { isTopToolbar: true, table })] }));
};
var MRT_TablePaper = (_a) => {
  var _b, _c;
  var { table } = _a, rest = __rest(_a, ["table"]);
  const { getState, options: { enableBottomToolbar, enableTopToolbar, mantinePaperProps, renderBottomToolbar, renderTopToolbar }, refs: { tablePaperRef } } = table;
  const { isFullScreen } = getState();
  const tablePaperProps = Object.assign(Object.assign({}, parseFromValuesOrFunc(mantinePaperProps, { table })), rest);
  return (0, import_jsx_runtime28.jsxs)(Paper, Object.assign({ shadow: "xs", withBorder: true }, tablePaperProps, {
    className: clsx_default("mrt-table-paper", classes$y.root, isFullScreen && "mrt-table-paper-fullscreen", tablePaperProps === null || tablePaperProps === void 0 ? void 0 : tablePaperProps.className),
    ref: (ref) => {
      tablePaperRef.current = ref;
      if (tablePaperProps === null || tablePaperProps === void 0 ? void 0 : tablePaperProps.ref) {
        tablePaperProps.ref.current = ref;
      }
    },
    // rare case where we should use inline styles to guarantee highest specificity
    style: (theme) => Object.assign(Object.assign({ zIndex: isFullScreen ? 200 : void 0 }, parseFromValuesOrFunc(tablePaperProps === null || tablePaperProps === void 0 ? void 0 : tablePaperProps.style, theme)), isFullScreen ? {
      bottom: 0,
      height: "100vh",
      left: 0,
      margin: 0,
      maxHeight: "100vh",
      maxWidth: "100vw",
      padding: 0,
      position: "fixed",
      right: 0,
      top: 0,
      width: "100vw"
    } : null),
    children: [enableTopToolbar && ((_b = parseFromValuesOrFunc(renderTopToolbar, { table })) !== null && _b !== void 0 ? _b : (0, import_jsx_runtime28.jsx)(MRT_TopToolbar, { table })), (0, import_jsx_runtime28.jsx)(MRT_TableContainer, { table }), enableBottomToolbar && ((_c = parseFromValuesOrFunc(renderBottomToolbar, { table })) !== null && _c !== void 0 ? _c : (0, import_jsx_runtime28.jsx)(MRT_BottomToolbar, { table }))]
  }));
};
var isTableInstanceProp = (props) => props.table !== void 0;
var MantineReactTable = (props) => {
  let table;
  if (isTableInstanceProp(props)) {
    table = props.table;
  } else {
    table = useMantineReactTable(props);
  }
  return (0, import_jsx_runtime28.jsx)(MRT_TablePaper, { table });
};
export {
  MRT_AggregationFns,
  MRT_BottomToolbar,
  MRT_ColumnActionMenu,
  MRT_ColumnPinningButtons,
  MRT_CopyButton,
  MRT_DefaultColumn,
  MRT_DefaultDisplayColumn,
  MRT_EditActionButtons,
  MRT_EditCellTextInput,
  MRT_EditRowModal,
  MRT_ExpandAllButton,
  MRT_ExpandButton,
  MRT_FilterCheckbox,
  MRT_FilterFns,
  MRT_FilterOptionMenu,
  MRT_FilterRangeFields,
  MRT_FilterRangeSlider,
  MRT_FilterTextInput,
  MRT_GlobalFilterTextInput,
  MRT_GrabHandleButton,
  MRT_ProgressBar,
  MRT_RowActionMenu,
  MRT_RowPinButton,
  MRT_SelectCheckbox,
  MRT_ShowHideColumnsButton,
  MRT_ShowHideColumnsMenu,
  MRT_ShowHideColumnsMenuItems,
  MRT_SortingFns,
  MRT_Table,
  MRT_TableBody,
  MRT_TableBodyCell,
  MRT_TableBodyCellValue,
  MRT_TableBodyRow,
  MRT_TableBodyRowGrabHandle,
  MRT_TableBodyRowPinButton,
  MRT_TableContainer,
  MRT_TableDetailPanel,
  MRT_TableFooter,
  MRT_TableFooterCell,
  MRT_TableFooterRow,
  MRT_TableHead,
  MRT_TableHeadCell,
  MRT_TableHeadCellFilterContainer,
  MRT_TableHeadCellFilterLabel,
  MRT_TableHeadCellGrabHandle,
  MRT_TableHeadCellResizeHandle,
  MRT_TableHeadCellSortLabel,
  MRT_TableHeadRow,
  MRT_TablePagination,
  MRT_TablePaper,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFiltersButton,
  MRT_ToggleFullScreenButton,
  MRT_ToggleGlobalFilterButton,
  MRT_ToggleRowActionMenuButton,
  MRT_ToolbarAlertBanner,
  MRT_ToolbarDropZone,
  MRT_ToolbarInternalButtons,
  MRT_TopToolbar,
  MantineReactTable,
  Memo_MRT_TableBody,
  Memo_MRT_TableBodyCell,
  Memo_MRT_TableBodyRow,
  createMRTColumnHelper,
  createRow2 as createRow,
  dataVariable,
  defaultDisplayColumnProps,
  flexRender2 as flexRender,
  getAllLeafColumnDefs,
  getCanRankRows,
  getColumnId,
  getDefaultColumnFilterFn,
  getDefaultColumnOrderIds,
  getIsRankingRows,
  getIsRowSelected,
  getLeadingDisplayColumnIds,
  getMRT_RowSelectionHandler,
  getMRT_Rows,
  getMRT_SelectAllHandler,
  getPrimaryColor,
  getPrimaryShade,
  getTrailingDisplayColumnIds,
  localizedFilterOption,
  mrtFilterOptions,
  parseCSSVarId,
  prepareColumns,
  rankGlobalFuzzy,
  reorderColumn,
  showRowActionsColumn,
  showRowDragColumn,
  showRowExpandColumn,
  showRowNumbersColumn,
  showRowPinningColumn,
  showRowSelectionColumn,
  showRowSpacerColumn,
  useMRT_ColumnVirtualizer,
  useMRT_Effects,
  useMRT_RowVirtualizer,
  useMRT_Rows,
  useMRT_TableInstance,
  useMRT_TableOptions,
  useMantineReactTable
};
/*! Bundled license information:

@tanstack/table-core/build/lib/index.mjs:
  (**
     * table-core
     *
     * Copyright (c) TanStack
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     *)

@tanstack/react-table/build/lib/index.mjs:
  (**
     * react-table
     *
     * Copyright (c) TanStack
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     *)

@tanstack/match-sorter-utils/build/lib/index.mjs:
  (**
     * match-sorter-utils
     *
     * Copyright (c) TanStack
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     *)
  (**
   * @name match-sorter
   * @license MIT license.
   * @copyright (c) 2099 Kent C. Dodds
   * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
   *)
*/
//# sourceMappingURL=mantine-react-table.js.map
