(function() {
  var fn = function() {

    (function(root) {
      function now() {
        return new Date();
      }

      var force = false;

      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }







      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }

      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("eb986c52-f9ec-4375-81f5-557a217780e4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'eb986c52-f9ec-4375-81f5-557a217780e4' but no matching script tag was found. ")
        return false;
      }

      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.12.13.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.13.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.13.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-0.12.13.min.js"];

      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },

        function(Bokeh) {

        },

        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {

                  var docs_json = '{"57c51ea0-5bda-4828-a8d7-bd49a457bced":{"roots":{"references":[{"attributes":{},"id":"fc72a83c-2fb7-47c4-a290-4c6a4226f58b","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.75},"fill_color":{"value":"#c6dbef"},"line_alpha":{"value":0.75},"line_color":{"value":"#c6dbef"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"fc12a955-c842-4f35-8ff1-921ca287c363","type":"Circle"},{"attributes":{"plot":{"id":"d62ba742-46fc-4ae9-808d-aa3dffadbc19","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc72a83c-2fb7-47c4-a290-4c6a4226f58b","type":"BasicTicker"},"visible":false},"id":"cdee01e4-1e5d-4051-a7c5-3a18b81291ac","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"d62ba742-46fc-4ae9-808d-aa3dffadbc19","subtype":"Figure","type":"Plot"},"ticker":{"id":"60041d91-44a9-45f8-ae5f-adde7844aa64","type":"BasicTicker"},"visible":false},"id":"37937e76-241f-4b3a-b403-1c00306f3a29","type":"Grid"},{"attributes":{},"id":"9da3b8ef-e114-443b-9b5a-392bc0803d72","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y","song_name","album_name","album_number","index"],"data":{"album_name":["Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)"],"album_number":[2,2,2,2,2,2,2,2,2,2,2,2],"index":[45,46,47,48,49,50,51,52,53,54,55,56],"song_name":["Brianstorm","Teddy Picker","D Is For Dangerous","Balaclava","Fluorescent Adolescent","Only Ones Who Know","Do Me A Favour","This House Is A Circus","If You Were There, Beware","The Bad Thing","Old Yellow Bricks","505"],"x":{"__ndarray__":"ne7yQUorSsIVhT5CeVg2wkJXgkJEhMVC21CkwscMFMNkEBVDAkZzQl31IMNYOp1C","dtype":"float32","shape":[12]},"y":{"__ndarray__":"YJQxQmOZuEJJRzRD64UVwzBiFEJfvQDDrPKmwKwSQ8KLUPRCXtrQwpSm08DUQOc9","dtype":"float32","shape":[12]}}},"id":"ebb4b29a-54dd-4ec0-ae14-4a6c5b66b8c5","type":"ColumnDataSource"},{"attributes":{"source":{"id":"ebb4b29a-54dd-4ec0-ae14-4a6c5b66b8c5","type":"ColumnDataSource"}},"id":"514ea249-5b19-43d8-9906-a04e35f93ebc","type":"CDSView"},{"attributes":{"data_source":{"id":"72684359-7390-4f57-947d-b39a5cb6b45b","type":"ColumnDataSource"},"glyph":{"id":"6956caa0-4f1b-4349-a9ac-db904650688a","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"ce2b763a-4803-4c53-8134-1a682741cf64","type":"Circle"},"nonselection_glyph":{"id":"a9bb9d08-99fe-414b-95db-74fd733a5fb7","type":"Circle"},"selection_glyph":null,"view":{"id":"2812a21b-bdc4-4bbf-9ad8-10708e4beaad","type":"CDSView"}},"id":"94f05bad-6e51-4a3e-bf83-f289d97afe86","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"cc395e7c-f17a-4cf9-a309-7ff53f194e4c","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c2ef8bf6-5f56-4183-a206-e87da322cdbd","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fd8d3c"},"line_alpha":{"value":0.1},"line_color":{"value":"#fd8d3c"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"ce2b763a-4803-4c53-8134-1a682741cf64","type":"Circle"},{"attributes":{},"id":"52981172-a80b-4232-a9c8-97d2eec20797","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#3182bd"},"line_alpha":{"value":0.1},"line_color":{"value":"#3182bd"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"b9312e63-b7c4-49d6-8bee-11d719f9b740","type":"Circle"},{"attributes":{},"id":"39ca070a-a2ea-4c88-90fe-7de51375092f","type":"BasicTickFormatter"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"9da3b8ef-e114-443b-9b5a-392bc0803d72","type":"BasicTickFormatter"},"major_label_text_font_size":{"value":"0pt"},"major_tick_line_color":{"value":null},"minor_tick_line_color":{"value":null},"plot":{"id":"d62ba742-46fc-4ae9-808d-aa3dffadbc19","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc72a83c-2fb7-47c4-a290-4c6a4226f58b","type":"BasicTicker"}},"id":"6ebb53d9-f4b9-4f12-b4ad-14ee3881a3e5","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"4e794e5e-8524-4831-83cb-f286508e02b2","type":"PolyAnnotation"},{"attributes":{"plot":null,"text":""},"id":"07a05136-469e-4e1d-9433-13c4ec27ba4a","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y","song_name","album_name","album_number","index"],"data":{"album_name":["Suck It and See","Suck It and See","Suck It and See","Suck It and See","Suck It and See","Suck It and See","Suck It and See","Suck It and See","Suck It and See","Suck It and See","Suck It and See","Suck It and See"],"album_number":[4,4,4,4,4,4,4,4,4,4,4,4],"index":[23,24,25,26,27,28,29,30,31,32,33,34],"song_name":["She&#x27;s Thunderstorms","Black Treacle","Brick By Brick","The Hellcat Spangled Shalalala","Don&#x27;t Sit Down &#x27;Cause I&#x27;ve Moved Your Chair","Library Pictures","All My Own Stunts","Reckless Serenade","Piledriver Waltz","Love is a Laserquest","Suck It and See","That&#x27;s Where You&#x27;re Wrong"],"x":{"__ndarray__":"GOpIwjaJG0FnX8BCibB0QgVzrMLx2kDBvgmUQpHhlcIWBUnCHSYKQy4OxEE0nCpD","dtype":"float32","shape":[12]},"y":{"__ndarray__":"zYMAQwBFjEG1AStDTh4JQ6Rz00I0xxbB7U7HQlctfkJfRTNDHmWOQc04psLrJ3DC","dtype":"float32","shape":[12]}}},"id":"0906c045-2287-4f00-836b-4b56ddca654d","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"7a5f5ebc-4fc0-4b18-bb47-42bcfee38ca9","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.75},"fill_color":{"value":"#e6550d"},"line_alpha":{"value":0.75},"line_color":{"value":"#e6550d"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"f52dd49d-fb08-4690-b786-6c7fdf6e81f5","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#d62728"},"line_alpha":{"value":0.1},"line_color":{"value":"#d62728"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"747406ac-1007-404f-9095-4d3335f510db","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y","song_name","album_name","album_number","index"],"data":{"album_name":["Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not"],"album_number":[1,1,1,1,1,1,1,1,1,1,1,1,1],"index":[57,58,59,60,61,62,63,64,65,66,67,68,69],"song_name":["The View From The Afternoon","I Bet You Look Good On The Dancefloor","Fake Tales Of San Francisco","Dancing Shoes","You Probably Couldn&#x27;t See For The Lights But You Were Staring Straight At Me","Still Take You Home","Riot Van","Red Light Indicates Doors Are Secured","Mardy Bum","Perhaps Vampires Is A Bit Strong But\\u2026","When The Sun Goes Down","From The Ritz To The Rubble","A Certain Romance"],"x":{"__ndarray__":"zMiRwXqiGUB9zuRC6fcAQpKqIcLQSiVDcWUtw57oNEPV71pCD1DLwQJnv8I9J89CSxaxwg==","dtype":"float32","shape":[13]},"y":{"__ndarray__":"PxMVQz1HHsNxxz7BndJFwhgJXEKgJZVCYIccQuW230HLYhfDKJ6xQc4i/MI1xgBDwWYYQw==","dtype":"float32","shape":[13]}}},"id":"72684359-7390-4f57-947d-b39a5cb6b45b","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#9ecae1"},"line_alpha":{"value":0.1},"line_color":{"value":"#9ecae1"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"f2125660-c2bf-4899-8bd4-08d798e78f7b","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y","song_name","album_name","album_number","index"],"data":{"album_name":["Recommended Popular Song","Recommended Popular Song","Recommended Popular Song","Recommended Popular Song","Recommended Popular Song","Recommended Popular Song","Recommended Popular Song"],"album_number":["None","None","None","None","None","None","None"],"index":[0,1,2,3,4,5,6],"song_name":["Naive","Seven Nation Army","Song 2 - 2012 Remastered Version","Sex on Fire","Electric Feel","Mr. Brightside","Use Somebody"],"x":{"__ndarray__":"7Hg7wnNgccJohDFC+70gQ37XsUIvA01Cql3Uwg==","dtype":"float32","shape":[7]},"y":{"__ndarray__":"6XXYwHoI0kFcBClBBkGEwdsBHsLjE5BCml4iwg==","dtype":"float32","shape":[7]}}},"id":"53beef50-9ea6-4a18-93a3-173483c496e1","type":"ColumnDataSource"},{"attributes":{"callback":null,"tooltips":[["Album #: ","@album_number"],["Album Name: ","@album_name"],["Song Name: ","@song_name"]]},"id":"aa72ecaa-9971-4c24-9a1a-554ddc59e0e1","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e32a9a74-15e2-4f05-95d9-c4dcb593cc9e","type":"BoxAnnotation"},{"attributes":{"source":{"id":"53beef50-9ea6-4a18-93a3-173483c496e1","type":"ColumnDataSource"}},"id":"2e0816db-dfc2-4623-a590-1ee0f7159b18","type":"CDSView"},{"attributes":{},"id":"d2f1b5c7-c6f1-49f1-a1ed-dd9eda0aae0d","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.75},"fill_color":{"value":"#d62728"},"line_alpha":{"value":0.75},"line_color":{"value":"#d62728"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"eca92a68-4b9c-4050-8dd0-abe3876786d9","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"ca32be61-d99f-46fd-8750-96e3af496219","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.75},"fill_color":{"value":"#6baed6"},"line_alpha":{"value":0.75},"line_color":{"value":"#6baed6"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"392d172b-9bbe-494e-a4d6-9537a0ba1bc0","type":"Circle"},{"attributes":{},"id":"60041d91-44a9-45f8-ae5f-adde7844aa64","type":"BasicTicker"},{"attributes":{"label":{"value":"Favourite Worst Nightmare (Standard Version)"},"renderers":[{"id":"685aebce-482b-4c04-8be7-ec32f9f9e294","type":"GlyphRenderer"}]},"id":"d1b2cfd8-d4b3-4164-924d-fc3114257c5b","type":"LegendItem"},{"attributes":{"data_source":{"id":"a96d6db6-2a17-4638-93a6-8f9a4234081a","type":"ColumnDataSource"},"glyph":{"id":"fc12a955-c842-4f35-8ff1-921ca287c363","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"840e2419-3189-45c1-8e11-e61ccf010c5f","type":"Circle"},"nonselection_glyph":{"id":"d60fcf75-ac9d-4ba2-8d6b-f1901140f479","type":"Circle"},"selection_glyph":null,"view":{"id":"acc4c9a4-a321-455b-8f44-b9006a6ee9f8","type":"CDSView"}},"id":"9a56015c-2723-4f92-b233-b848ccdbb927","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"c2ef8bf6-5f56-4183-a206-e87da322cdbd","type":"BoxAnnotation"},"renderers":[{"id":"02e1cfdd-630f-44b4-8cd1-f9a2ba713bbe","type":"GlyphRenderer"},{"id":"6ea2eac8-6bd7-4d6e-98a9-04e188b95d4e","type":"GlyphRenderer"},{"id":"55ff15d0-2908-406d-bcc6-b1b5bad19bd9","type":"GlyphRenderer"},{"id":"9a56015c-2723-4f92-b233-b848ccdbb927","type":"GlyphRenderer"},{"id":"685aebce-482b-4c04-8be7-ec32f9f9e294","type":"GlyphRenderer"},{"id":"94f05bad-6e51-4a3e-bf83-f289d97afe86","type":"GlyphRenderer"},{"id":"d1a3c6cb-8786-4eb1-b620-bfb4a3749686","type":"GlyphRenderer"}]},"id":"62837af2-0513-4cf0-a020-f24f46430ddf","type":"BoxSelectTool"},{"attributes":{"label":{"value":"Tranquility Base Hotel &amp; Casino"},"renderers":[{"id":"02e1cfdd-630f-44b4-8cd1-f9a2ba713bbe","type":"GlyphRenderer"}]},"id":"236d6365-5078-4c2c-93af-591d5f4993ed","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["x","y","song_name","album_name","album_number","index"],"data":{"album_name":["Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino"],"album_number":[6,6,6,6,6,6,6,6,6,6,6],"index":[0,1,2,3,4,5,6,7,8,9,10],"song_name":["Star Treatment","One Point Perspective","American Sports","Tranquility Base Hotel &amp; Casino","Golden Trunks","Four Out Of Five","The World&#x27;s First Ever Monster Truck Front Flip","Science Fiction","She Looks Like Fun","Batphone","The Ultracheese"],"x":{"__ndarray__":"Qki9wib7AsNgqDvCfcx6Qnk7p0HcIYTBKsPCwNXFYEJk5f9CGLyQwSS6/UI=","dtype":"float32","shape":[11]},"y":{"__ndarray__":"DcD4QRhyFEKaXo7CYT+EwjihD0MT3N/C5Y7iQjWJycFs91hCdtmjQnHWSMI=","dtype":"float32","shape":[11]}}},"id":"813d07a9-8208-451c-9094-0c894049a0d5","type":"ColumnDataSource"},{"attributes":{"source":{"id":"a96d6db6-2a17-4638-93a6-8f9a4234081a","type":"ColumnDataSource"}},"id":"acc4c9a4-a321-455b-8f44-b9006a6ee9f8","type":"CDSView"},{"attributes":{"label":{"value":"Humbug"},"renderers":[{"id":"9a56015c-2723-4f92-b233-b848ccdbb927","type":"GlyphRenderer"}]},"id":"8784c663-86c9-4f7c-b7f7-693ac8d9f27c","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.75},"fill_color":{"value":"#3182bd"},"line_alpha":{"value":0.75},"line_color":{"value":"#3182bd"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"808e9486-4c56-455a-a59a-965b6ef9632e","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.75},"fill_color":{"value":"#fd8d3c"},"line_alpha":{"value":0.75},"line_color":{"value":"#fd8d3c"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"6956caa0-4f1b-4349-a9ac-db904650688a","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"907d1260-5194-49e3-9d5a-f5d83c2404d1","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"0a20d3fd-3958-4c91-bda0-1d578018b171","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"372a7cc1-d4c9-451c-950d-00484c7e8bd2","type":"Circle"},{"attributes":{"data_source":{"id":"0906c045-2287-4f00-836b-4b56ddca654d","type":"ColumnDataSource"},"glyph":{"id":"b91cdef5-1d15-487a-a990-5b4d1121b435","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"f2125660-c2bf-4899-8bd4-08d798e78f7b","type":"Circle"},"nonselection_glyph":{"id":"ca32be61-d99f-46fd-8750-96e3af496219","type":"Circle"},"selection_glyph":null,"view":{"id":"d12c5f3d-f9e1-4956-aec6-9aa22e7d1b3c","type":"CDSView"}},"id":"55ff15d0-2908-406d-bcc6-b1b5bad19bd9","type":"GlyphRenderer"},{"attributes":{"source":{"id":"72684359-7390-4f57-947d-b39a5cb6b45b","type":"ColumnDataSource"}},"id":"2812a21b-bdc4-4bbf-9ad8-10708e4beaad","type":"CDSView"},{"attributes":{"source":{"id":"813d07a9-8208-451c-9094-0c894049a0d5","type":"ColumnDataSource"}},"id":"b12c57c7-8864-453d-93a8-032398bc6fbb","type":"CDSView"},{"attributes":{"callback":null},"id":"72d6ac72-1699-487d-a99a-5781d3ed9b23","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#e6550d"},"line_alpha":{"value":0.1},"line_color":{"value":"#e6550d"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"c33adf3c-e879-4a95-9efe-d44baea451b7","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"39ca070a-a2ea-4c88-90fe-7de51375092f","type":"BasicTickFormatter"},"major_label_text_font_size":{"value":"0pt"},"major_tick_line_color":{"value":null},"minor_tick_line_color":{"value":null},"plot":{"id":"d62ba742-46fc-4ae9-808d-aa3dffadbc19","subtype":"Figure","type":"Plot"},"ticker":{"id":"60041d91-44a9-45f8-ae5f-adde7844aa64","type":"BasicTicker"}},"id":"1c58b725-dcee-4bc4-8a15-0d5477f53f9b","type":"LinearAxis"},{"attributes":{"label":{"value":"AM"},"renderers":[{"id":"6ea2eac8-6bd7-4d6e-98a9-04e188b95d4e","type":"GlyphRenderer"}]},"id":"846e8dff-7ac0-497e-a126-81e353bf04f0","type":"LegendItem"},{"attributes":{"source":{"id":"0906c045-2287-4f00-836b-4b56ddca654d","type":"ColumnDataSource"}},"id":"d12c5f3d-f9e1-4956-aec6-9aa22e7d1b3c","type":"CDSView"},{"attributes":{},"id":"f6da199d-df24-4fe6-ba31-6273d1733315","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y","song_name","album_name","album_number","index"],"data":{"album_name":["Humbug","Humbug","Humbug","Humbug","Humbug","Humbug","Humbug","Humbug","Humbug","Humbug"],"album_number":[3,3,3,3,3,3,3,3,3,3],"index":[35,36,37,38,39,40,41,42,43,44],"song_name":["My Propeller","Crying Lightning","Dangerous Animals","Secret Door","Potion Approaching","Fire And The Thud","Cornerstone","Dance Little Liar","Pretty Visitors","The Jeweller&#x27;s Hands"],"x":{"__ndarray__":"wXCRwAaBw0Ki14BBDH/uwsghskHfpf/CqxJPP+KN3cKGKTHBIEqwQg==","dtype":"float32","shape":[10]},"y":{"__ndarray__":"tWlFQulEosJQiZxC31U6wIvA78J9bLLCpD09Q1DYkkK775bC0PZ/Qg==","dtype":"float32","shape":[10]}}},"id":"a96d6db6-2a17-4638-93a6-8f9a4234081a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"53beef50-9ea6-4a18-93a3-173483c496e1","type":"ColumnDataSource"},"glyph":{"id":"eca92a68-4b9c-4050-8dd0-abe3876786d9","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"747406ac-1007-404f-9095-4d3335f510db","type":"Circle"},"nonselection_glyph":{"id":"372a7cc1-d4c9-451c-950d-00484c7e8bd2","type":"Circle"},"selection_glyph":null,"view":{"id":"2e0816db-dfc2-4623-a590-1ee0f7159b18","type":"CDSView"}},"id":"d1a3c6cb-8786-4eb1-b620-bfb4a3749686","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"aa72ecaa-9971-4c24-9a1a-554ddc59e0e1","type":"HoverTool"},{"id":"62837af2-0513-4cf0-a020-f24f46430ddf","type":"BoxSelectTool"},{"id":"0b468f43-bc7a-4517-9fee-3e4d22feac26","type":"BoxZoomTool"},{"id":"2eb18e47-2fb7-4764-ad0f-7608738a8ccf","type":"LassoSelectTool"},{"id":"f6da199d-df24-4fe6-ba31-6273d1733315","type":"ResetTool"}]},"id":"8a765414-f631-42c9-ab86-5646bc572d14","type":"Toolbar"},{"attributes":{"label":{"value":"Recommended Popular Song"},"renderers":[{"id":"d1a3c6cb-8786-4eb1-b620-bfb4a3749686","type":"GlyphRenderer"}]},"id":"8c76ac69-1dfb-42e9-a252-3e37483c072d","type":"LegendItem"},{"attributes":{"data_source":{"id":"185cfd29-fe1d-4474-a089-d7f7bc80f896","type":"ColumnDataSource"},"glyph":{"id":"392d172b-9bbe-494e-a4d6-9537a0ba1bc0","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"b089cc14-7209-45de-9298-083514405674","type":"Circle"},"nonselection_glyph":{"id":"0a20d3fd-3958-4c91-bda0-1d578018b171","type":"Circle"},"selection_glyph":null,"view":{"id":"735f6549-68d8-4a7d-83ae-b1ca5830521b","type":"CDSView"}},"id":"6ea2eac8-6bd7-4d6e-98a9-04e188b95d4e","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Whatever People Say I Am, That&#x27;s What I&#x27;m Not"},"renderers":[{"id":"94f05bad-6e51-4a3e-bf83-f289d97afe86","type":"GlyphRenderer"}]},"id":"635548c6-dac8-4936-9550-e0f648fa7058","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#6baed6"},"line_alpha":{"value":0.1},"line_color":{"value":"#6baed6"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"b089cc14-7209-45de-9298-083514405674","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"4e794e5e-8524-4831-83cb-f286508e02b2","type":"PolyAnnotation"}},"id":"2eb18e47-2fb7-4764-ad0f-7608738a8ccf","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"d60fcf75-ac9d-4ba2-8d6b-f1901140f479","type":"Circle"},{"attributes":{"background_fill_alpha":{"value":0.0},"background_fill_color":{"value":"#F8F9FB"},"below":[{"id":"6ebb53d9-f4b9-4f12-b4ad-14ee3881a3e5","type":"LinearAxis"}],"border_fill_alpha":{"value":0.0},"left":[{"id":"1c58b725-dcee-4bc4-8a15-0d5477f53f9b","type":"LinearAxis"}],"outline_line_alpha":{"value":0.0},"plot_height":800,"plot_width":1200,"renderers":[{"id":"6ebb53d9-f4b9-4f12-b4ad-14ee3881a3e5","type":"LinearAxis"},{"id":"cdee01e4-1e5d-4051-a7c5-3a18b81291ac","type":"Grid"},{"id":"1c58b725-dcee-4bc4-8a15-0d5477f53f9b","type":"LinearAxis"},{"id":"37937e76-241f-4b3a-b403-1c00306f3a29","type":"Grid"},{"id":"c2ef8bf6-5f56-4183-a206-e87da322cdbd","type":"BoxAnnotation"},{"id":"e32a9a74-15e2-4f05-95d9-c4dcb593cc9e","type":"BoxAnnotation"},{"id":"4e794e5e-8524-4831-83cb-f286508e02b2","type":"PolyAnnotation"},{"id":"02e1cfdd-630f-44b4-8cd1-f9a2ba713bbe","type":"GlyphRenderer"},{"id":"6ea2eac8-6bd7-4d6e-98a9-04e188b95d4e","type":"GlyphRenderer"},{"id":"55ff15d0-2908-406d-bcc6-b1b5bad19bd9","type":"GlyphRenderer"},{"id":"9a56015c-2723-4f92-b233-b848ccdbb927","type":"GlyphRenderer"},{"id":"685aebce-482b-4c04-8be7-ec32f9f9e294","type":"GlyphRenderer"},{"id":"94f05bad-6e51-4a3e-bf83-f289d97afe86","type":"GlyphRenderer"},{"id":"d1a3c6cb-8786-4eb1-b620-bfb4a3749686","type":"GlyphRenderer"},{"id":"39259a4d-1574-46a5-ab05-a0c0b1a6ec67","type":"Legend"}],"right":[{"id":"39259a4d-1574-46a5-ab05-a0c0b1a6ec67","type":"Legend"}],"title":{"id":"07a05136-469e-4e1d-9433-13c4ec27ba4a","type":"Title"},"toolbar":{"id":"8a765414-f631-42c9-ab86-5646bc572d14","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"cc395e7c-f17a-4cf9-a309-7ff53f194e4c","type":"DataRange1d"},"x_scale":{"id":"d2f1b5c7-c6f1-49f1-a1ed-dd9eda0aae0d","type":"LinearScale"},"y_range":{"id":"72d6ac72-1699-487d-a99a-5781d3ed9b23","type":"DataRange1d"},"y_scale":{"id":"52981172-a80b-4232-a9c8-97d2eec20797","type":"LinearScale"}},"id":"d62ba742-46fc-4ae9-808d-aa3dffadbc19","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"ebb4b29a-54dd-4ec0-ae14-4a6c5b66b8c5","type":"ColumnDataSource"},"glyph":{"id":"f52dd49d-fb08-4690-b786-6c7fdf6e81f5","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"c33adf3c-e879-4a95-9efe-d44baea451b7","type":"Circle"},"nonselection_glyph":{"id":"907d1260-5194-49e3-9d5a-f5d83c2404d1","type":"Circle"},"selection_glyph":null,"view":{"id":"514ea249-5b19-43d8-9906-a04e35f93ebc","type":"CDSView"}},"id":"685aebce-482b-4c04-8be7-ec32f9f9e294","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y","song_name","album_name","album_number","index"],"data":{"album_name":["AM","AM","AM","AM","AM","AM","AM","AM","AM","AM","AM","AM"],"album_number":[5,5,5,5,5,5,5,5,5,5,5,5],"index":[11,12,13,14,15,16,17,18,19,20,21,22],"song_name":["Do I Wanna Know?","R U Mine?","One For The Road","Arabella","I Want It All","No. 1 Party Anthem","Mad Sounds","Fireside","Why&#x27;d You Only Call Me When You&#x27;re High?","Snap Out Of It","Knee Socks","I Wanna Be Yours"],"x":{"__ndarray__":"/jiyQdobBMKMJK3CFxiJwrW8XDt98/vCSZ8JQ88k6EIX7BfDs2DIQqsSYsI9FwpC","dtype":"float32","shape":[12]},"y":{"__ndarray__":"eUhtwa0vG8LZkJjC7eAcwmtHK8KidPhC0jjFwmAwtUKdnahCjH7aQV4C1sLy8tZC","dtype":"float32","shape":[12]}}},"id":"185cfd29-fe1d-4474-a089-d7f7bc80f896","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.75},"fill_color":{"value":"#9ecae1"},"line_alpha":{"value":0.75},"line_color":{"value":"#9ecae1"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"b91cdef5-1d15-487a-a990-5b4d1121b435","type":"Circle"},{"attributes":{"source":{"id":"185cfd29-fe1d-4474-a089-d7f7bc80f896","type":"ColumnDataSource"}},"id":"735f6549-68d8-4a7d-83ae-b1ca5830521b","type":"CDSView"},{"attributes":{"background_fill_alpha":{"value":0.0},"border_line_alpha":{"value":0.0},"click_policy":"mute","items":[{"id":"236d6365-5078-4c2c-93af-591d5f4993ed","type":"LegendItem"},{"id":"846e8dff-7ac0-497e-a126-81e353bf04f0","type":"LegendItem"},{"id":"bfe873dd-fe9e-4ca8-930c-f7b1345a508d","type":"LegendItem"},{"id":"8784c663-86c9-4f7c-b7f7-693ac8d9f27c","type":"LegendItem"},{"id":"d1b2cfd8-d4b3-4164-924d-fc3114257c5b","type":"LegendItem"},{"id":"635548c6-dac8-4936-9550-e0f648fa7058","type":"LegendItem"},{"id":"8c76ac69-1dfb-42e9-a252-3e37483c072d","type":"LegendItem"}],"label_text_color":{"value":"white"},"location":[0,30],"plot":{"id":"d62ba742-46fc-4ae9-808d-aa3dffadbc19","subtype":"Figure","type":"Plot"}},"id":"39259a4d-1574-46a5-ab05-a0c0b1a6ec67","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"a9bb9d08-99fe-414b-95db-74fd733a5fb7","type":"Circle"},{"attributes":{"label":{"value":"Suck It and See"},"renderers":[{"id":"55ff15d0-2908-406d-bcc6-b1b5bad19bd9","type":"GlyphRenderer"}]},"id":"bfe873dd-fe9e-4ca8-930c-f7b1345a508d","type":"LegendItem"},{"attributes":{"data_source":{"id":"813d07a9-8208-451c-9094-0c894049a0d5","type":"ColumnDataSource"},"glyph":{"id":"808e9486-4c56-455a-a59a-965b6ef9632e","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"b9312e63-b7c4-49d6-8bee-11d719f9b740","type":"Circle"},"nonselection_glyph":{"id":"7a5f5ebc-4fc0-4b18-bb47-42bcfee38ca9","type":"Circle"},"selection_glyph":null,"view":{"id":"b12c57c7-8864-453d-93a8-032398bc6fbb","type":"CDSView"}},"id":"02e1cfdd-630f-44b4-8cd1-f9a2ba713bbe","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#c6dbef"},"line_alpha":{"value":0.1},"line_color":{"value":"#c6dbef"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"840e2419-3189-45c1-8e11-e61ccf010c5f","type":"Circle"},{"attributes":{"overlay":{"id":"e32a9a74-15e2-4f05-95d9-c4dcb593cc9e","type":"BoxAnnotation"}},"id":"0b468f43-bc7a-4517-9fee-3e4d22feac26","type":"BoxZoomTool"}],"root_ids":["d62ba742-46fc-4ae9-808d-aa3dffadbc19"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"57c51ea0-5bda-4828-a8d7-bd49a457bced","elementid":"eb986c52-f9ec-4375-81f5-557a217780e4","modelid":"d62ba742-46fc-4ae9-808d-aa3dffadbc19"}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);

                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.13.min.css");
        }
      ];

      function run_inline_js() {

        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }

      }

      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();