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
      };var element = document.getElementById("980918ea-5ac9-4591-8989-9c0640591015");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '980918ea-5ac9-4591-8989-9c0640591015' but no matching script tag was found. ")
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

                  var docs_json = '{"b79bc79a-d699-48c8-b627-1cead77d87ab":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"0c95b087-5c36-4c39-85c2-1a71902ce808","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"15cb7b3b-f919-45b8-8c2c-fbf670aab606","type":"PolyAnnotation"}},"id":"6d25c791-7ef6-4f49-982e-0463e5d25e40","type":"LassoSelectTool"},{"attributes":{},"id":"02047c51-6231-42f2-bce0-f5970b109a3e","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"c8ab4e4a-2970-43b9-94d4-08195ed968b0","type":"Circle"},{"attributes":{},"id":"4de3e902-35e7-4275-8397-8e9848b3ef5a","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"75fff4e3-46c7-4140-a209-b6065a97f7a7","type":"Title"},{"attributes":{"callback":null,"overlay":{"id":"6b401a24-29c7-4347-acd5-d5a6f3c5f66d","type":"BoxAnnotation"},"renderers":[{"id":"a2cf1e9a-7a11-4714-9fc6-450b1310527d","type":"GlyphRenderer"},{"id":"f4fde34c-6d17-4248-b628-a94d5ea2eb6e","type":"GlyphRenderer"},{"id":"90d58870-2c5e-4e3c-806c-a12bd9a64c45","type":"GlyphRenderer"},{"id":"78273969-f5ab-4456-a97a-5cf5ebff74dc","type":"GlyphRenderer"},{"id":"a0eb7bd7-8e5e-47aa-b909-70d53398d2c1","type":"GlyphRenderer"},{"id":"6b581c5d-1b02-4ca1-8bfc-1db3af51ee7f","type":"GlyphRenderer"}]},"id":"ed4c0779-c537-4ebe-b7c7-7a12f45e3e63","type":"BoxSelectTool"},{"attributes":{},"id":"93783025-625c-4d48-972a-ba9145bf5d0f","type":"BasicTickFormatter"},{"attributes":{},"id":"4badf05d-6c24-4923-9c68-7ef30e98d82b","type":"LinearScale"},{"attributes":{"data_source":{"id":"5fe7f39d-544e-4f7a-838e-cb12f0f6fc09","type":"ColumnDataSource"},"glyph":{"id":"174eef25-98ed-44d3-abfb-44255c0b49ec","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"7afe86be-57b2-4ef5-b79d-4fe1c5c15661","type":"Circle"},"nonselection_glyph":{"id":"0a742256-7703-4f13-9f07-145b40f4eb72","type":"Circle"},"selection_glyph":null,"view":{"id":"152bdda2-a5c9-4eb8-ab98-fa072da32884","type":"CDSView"}},"id":"f4fde34c-6d17-4248-b628-a94d5ea2eb6e","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fd8d3c"},"line_alpha":{"value":0.1},"line_color":{"value":"#fd8d3c"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"a7533a39-a804-4203-9c97-b14703dc33fb","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#e6550d"},"line_alpha":{"value":0.1},"line_color":{"value":"#e6550d"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"04b7658c-dcb5-4342-b14a-9e5001db623f","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#9ecae1"},"line_alpha":{"value":0.1},"line_color":{"value":"#9ecae1"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"42cb38a8-cb9b-496b-985c-e8e27d7b49fa","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.95},"fill_color":{"value":"#3182bd"},"line_alpha":{"value":0.95},"line_color":{"value":"#3182bd"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"13a6b2b0-f8da-4d57-8a7e-2909b2b5cc46","type":"Circle"},{"attributes":{"source":{"id":"9f4288b7-1279-414f-8246-7658a090053a","type":"ColumnDataSource"}},"id":"94eace34-b836-465d-9972-6fa2e1e4a8f0","type":"CDSView"},{"attributes":{"data_source":{"id":"dbc2d199-98a4-4dab-a275-fdd07b8099c0","type":"ColumnDataSource"},"glyph":{"id":"cb27a922-9df1-40bd-99f3-1e0d8ffcea2b","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"04b7658c-dcb5-4342-b14a-9e5001db623f","type":"Circle"},"nonselection_glyph":{"id":"d6ada978-5400-4968-baea-1ab5b0129a32","type":"Circle"},"selection_glyph":null,"view":{"id":"932847ee-9030-413e-a8d3-f347a4d7008b","type":"CDSView"}},"id":"a0eb7bd7-8e5e-47aa-b909-70d53398d2c1","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.95},"fill_color":{"value":"#e6550d"},"line_alpha":{"value":0.95},"line_color":{"value":"#e6550d"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"cb27a922-9df1-40bd-99f3-1e0d8ffcea2b","type":"Circle"},{"attributes":{"overlay":{"id":"8a6df631-5b81-4d3c-9d0a-66471fa1c9b1","type":"BoxAnnotation"}},"id":"e937701d-d945-4a13-9f5a-f4abc63d6950","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#c6dbef"},"line_alpha":{"value":0.1},"line_color":{"value":"#c6dbef"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"3e9bf8d7-2bd1-4375-9369-41182cd6bdbd","type":"Circle"},{"attributes":{"source":{"id":"bc225b00-82f2-4825-9998-d613b3a3e030","type":"ColumnDataSource"}},"id":"096b933c-b88e-4d53-a717-162971e38072","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"506dffbb-b151-435b-9b59-eb22e2403d09","type":"Circle"},{"attributes":{"plot":{"id":"6a5f22f1-71ef-4fc2-8cda-5c69b459985a","subtype":"Figure","type":"Plot"},"ticker":{"id":"4de3e902-35e7-4275-8397-8e9848b3ef5a","type":"BasicTicker"},"visible":false},"id":"df6a56f7-7944-4ee8-b18f-76f4d4018ff5","type":"Grid"},{"attributes":{"data_source":{"id":"9f4288b7-1279-414f-8246-7658a090053a","type":"ColumnDataSource"},"glyph":{"id":"d375cfc2-a0e2-4139-9189-6037486f744a","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"42cb38a8-cb9b-496b-985c-e8e27d7b49fa","type":"Circle"},"nonselection_glyph":{"id":"826b6c86-ebc5-4cf5-b568-7888cede7d48","type":"Circle"},"selection_glyph":null,"view":{"id":"94eace34-b836-465d-9972-6fa2e1e4a8f0","type":"CDSView"}},"id":"90d58870-2c5e-4e3c-806c-a12bd9a64c45","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["album_name","song_name","album_number","x","y","index"],"data":{"album_name":["AM","AM","AM","AM","AM","AM","AM","AM","AM","AM","AM","AM"],"album_number":[5,5,5,5,5,5,5,5,5,5,5,5],"index":[11,12,13,14,15,16,17,18,19,20,21,22],"song_name":["Do I Wanna Know?","R U Mine?","One For The Road","Arabella","I Want It All","No. 1 Party Anthem","Mad Sounds","Fireside","Why&#x27;d You Only Call Me When You&#x27;re High?","Snap Out Of It","Knee Socks","I Wanna Be Yours"],"x":{"__ndarray__":"9ZqMQxQdlsPVggTCaPwcQystmsHpssNCyQ3FQ61i38LY3i1DAgJiQ/kYsUPKXNFD","dtype":"float32","shape":[12]},"y":{"__ndarray__":"/JdxQz8UgkMVsinDhUktQtBjjENPgf1CQR7awuWfl8Muxu3C9RMAQxUaE8KAw2XD","dtype":"float32","shape":[12]}}},"id":"5fe7f39d-544e-4f7a-838e-cb12f0f6fc09","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.95},"fill_color":{"value":"#6baed6"},"line_alpha":{"value":0.95},"line_color":{"value":"#6baed6"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"174eef25-98ed-44d3-abfb-44255c0b49ec","type":"Circle"},{"attributes":{},"id":"f8d2e68c-9a6c-4bcd-b0cc-14a840a18216","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#3182bd"},"line_alpha":{"value":0.1},"line_color":{"value":"#3182bd"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"095f1e1b-a6b0-4743-bfa8-7454226e9f30","type":"Circle"},{"attributes":{"callback":null,"tooltips":[["Album #: ","@album_number"],["Album Name: ","@album_name"],["Song Name: ","@song_name"]]},"id":"f87badc8-3706-4b34-a9de-cbae04bd3de2","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"826b6c86-ebc5-4cf5-b568-7888cede7d48","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"d6ada978-5400-4968-baea-1ab5b0129a32","type":"Circle"},{"attributes":{"source":{"id":"65fd1c1c-c44a-4869-929d-115203e6eb17","type":"ColumnDataSource"}},"id":"3a40779a-49c0-4b19-a9d4-4757175d0a4c","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.95},"fill_color":{"value":"#fd8d3c"},"line_alpha":{"value":0.95},"line_color":{"value":"#fd8d3c"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"78af287f-bc83-4917-a786-fbb84dfd6de3","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"15cb7b3b-f919-45b8-8c2c-fbf670aab606","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"65fd1c1c-c44a-4869-929d-115203e6eb17","type":"ColumnDataSource"},"glyph":{"id":"13a6b2b0-f8da-4d57-8a7e-2909b2b5cc46","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"095f1e1b-a6b0-4743-bfa8-7454226e9f30","type":"Circle"},"nonselection_glyph":{"id":"c8ab4e4a-2970-43b9-94d4-08195ed968b0","type":"Circle"},"selection_glyph":null,"view":{"id":"3a40779a-49c0-4b19-a9d4-4757175d0a4c","type":"CDSView"}},"id":"a2cf1e9a-7a11-4714-9fc6-450b1310527d","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5fe7f39d-544e-4f7a-838e-cb12f0f6fc09","type":"ColumnDataSource"}},"id":"152bdda2-a5c9-4eb8-ab98-fa072da32884","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.95},"fill_color":{"value":"#9ecae1"},"line_alpha":{"value":0.95},"line_color":{"value":"#9ecae1"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"d375cfc2-a0e2-4139-9189-6037486f744a","type":"Circle"},{"attributes":{"callback":null},"id":"bb8413a5-b922-4d0c-83f7-1b107d29dd52","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["album_name","song_name","album_number","x","y","index"],"data":{"album_name":["Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino","Tranquility Base Hotel &amp; Casino"],"album_number":[6,6,6,6,6,6,6,6,6,6,6],"index":[0,1,2,3,4,5,6,7,8,9,10],"song_name":["Star Treatment","One Point Perspective","American Sports","Tranquility Base Hotel &amp; Casino","Golden Trunks","Four Out Of Five","The World&#x27;s First Ever Monster Truck Front Flip","Science Fiction","She Looks Like Fun","Batphone","The Ultracheese"],"x":{"__ndarray__":"xP3SQ5qVnkNOH0pDVbSIQfS6HEN1Q11DjKNqQ8kzEkOSJpBCpmOmQxGh3EM=","dtype":"float32","shape":[11]},"y":{"__ndarray__":"bOjxQYkv4MIerbNDinA6wnDwWUOpkpTDbLxhQgQ5UcPiMnhDz3W+QoP7F0M=","dtype":"float32","shape":[11]}}},"id":"65fd1c1c-c44a-4869-929d-115203e6eb17","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["album_name","song_name","album_number","x","y","index"],"data":{"album_name":["Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)","Favourite Worst Nightmare (Standard Version)"],"album_number":[2,2,2,2,2,2,2,2,2,2,2,2],"index":[45,46,47,48,49,50,51,52,53,54,55,56],"song_name":["Brianstorm","Teddy Picker","D Is For Dangerous","Balaclava","Fluorescent Adolescent","Only Ones Who Know","Do Me A Favour","This House Is A Circus","If You Were There, Beware","The Bad Thing","Old Yellow Bricks","505"],"x":{"__ndarray__":"wRhMwxxChMNYaS7Dq/zOwgf2pUIdAm1D0+6PQTgCBkIp1E3DF9OGw6VnsEK6OgvC","dtype":"float32","shape":[12]},"y":{"__ndarray__":"19d6w9L9K8MJAzTDWkJZw3eYRsIJHl/CNHYDw8o1GEI767bDlO+awuaD9cLNJXzD","dtype":"float32","shape":[12]}}},"id":"dbc2d199-98a4-4dab-a275-fdd07b8099c0","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8a6df631-5b81-4d3c-9d0a-66471fa1c9b1","type":"BoxAnnotation"},{"attributes":{"label":{"value":"Whatever People Say I Am, That&#x27;s What I&#x27;m Not"},"renderers":[{"id":"6b581c5d-1b02-4ca1-8bfc-1db3af51ee7f","type":"GlyphRenderer"}]},"id":"13084036-dbb8-4d3f-8095-7881234a8a21","type":"LegendItem"},{"attributes":{"data_source":{"id":"4ae15d11-8b05-4997-8ab1-f6461bf3542c","type":"ColumnDataSource"},"glyph":{"id":"a17866f6-c266-4287-8838-c67fc575c396","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"3e9bf8d7-2bd1-4375-9369-41182cd6bdbd","type":"Circle"},"nonselection_glyph":{"id":"0c95b087-5c36-4c39-85c2-1a71902ce808","type":"Circle"},"selection_glyph":null,"view":{"id":"3be8bb73-2b8e-4ce4-bf34-ef90f82b7bd8","type":"CDSView"}},"id":"78273969-f5ab-4456-a97a-5cf5ebff74dc","type":"GlyphRenderer"},{"attributes":{},"id":"0af6f7c0-9742-4ea3-b5c5-16838a98a643","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f87badc8-3706-4b34-a9de-cbae04bd3de2","type":"HoverTool"},{"id":"ed4c0779-c537-4ebe-b7c7-7a12f45e3e63","type":"BoxSelectTool"},{"id":"e937701d-d945-4a13-9f5a-f4abc63d6950","type":"BoxZoomTool"},{"id":"6d25c791-7ef6-4f49-982e-0463e5d25e40","type":"LassoSelectTool"},{"id":"0af6f7c0-9742-4ea3-b5c5-16838a98a643","type":"ResetTool"}]},"id":"a4f7e5ce-b3aa-49a9-a407-c0a12caa5b37","type":"Toolbar"},{"attributes":{"data_source":{"id":"bc225b00-82f2-4825-9998-d613b3a3e030","type":"ColumnDataSource"},"glyph":{"id":"78af287f-bc83-4917-a786-fbb84dfd6de3","type":"Circle"},"hover_glyph":null,"muted_glyph":{"id":"a7533a39-a804-4203-9c97-b14703dc33fb","type":"Circle"},"nonselection_glyph":{"id":"506dffbb-b151-435b-9b59-eb22e2403d09","type":"Circle"},"selection_glyph":null,"view":{"id":"096b933c-b88e-4d53-a717-162971e38072","type":"CDSView"}},"id":"6b581c5d-1b02-4ca1-8bfc-1db3af51ee7f","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"6a5f22f1-71ef-4fc2-8cda-5c69b459985a","subtype":"Figure","type":"Plot"},"ticker":{"id":"02047c51-6231-42f2-bce0-f5970b109a3e","type":"BasicTicker"},"visible":false},"id":"73029fe5-65fe-4d29-9172-1743b6d3c87e","type":"Grid"},{"attributes":{"source":{"id":"4ae15d11-8b05-4997-8ab1-f6461bf3542c","type":"ColumnDataSource"}},"id":"3be8bb73-2b8e-4ce4-bf34-ef90f82b7bd8","type":"CDSView"},{"attributes":{"source":{"id":"dbc2d199-98a4-4dab-a275-fdd07b8099c0","type":"ColumnDataSource"}},"id":"932847ee-9030-413e-a8d3-f347a4d7008b","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6b401a24-29c7-4347-acd5-d5a6f3c5f66d","type":"BoxAnnotation"},{"attributes":{"background_fill_alpha":{"value":0.0},"border_line_alpha":{"value":0.0},"click_policy":"mute","items":[{"id":"06dd9d92-bddf-4275-94bf-421b5ad7b421","type":"LegendItem"},{"id":"ffaab3ad-2987-498f-8e6f-f8f1cf20549b","type":"LegendItem"},{"id":"0cd37f52-7d19-49f8-8a60-99e1c38c8ff9","type":"LegendItem"},{"id":"4cb15e46-4558-4936-a274-6641aadbd951","type":"LegendItem"},{"id":"869092a9-ba11-4a52-9889-bec997bacfd1","type":"LegendItem"},{"id":"13084036-dbb8-4d3f-8095-7881234a8a21","type":"LegendItem"}],"label_text_color":{"value":"white"},"location":[0,30],"plot":{"id":"6a5f22f1-71ef-4fc2-8cda-5c69b459985a","subtype":"Figure","type":"Plot"}},"id":"c4b45448-e0b8-46ae-9d78-7f5540a7aa5d","type":"Legend"},{"attributes":{"background_fill_alpha":{"value":0.0},"background_fill_color":{"value":"#F8F9FB"},"below":[{"id":"d106d538-3dcc-4e09-9bed-f5e9d651859b","type":"LinearAxis"}],"border_fill_alpha":{"value":0.0},"left":[{"id":"ad7d7aee-8691-408e-b3eb-6e4841da5484","type":"LinearAxis"}],"outline_line_alpha":{"value":0.0},"plot_height":800,"plot_width":1200,"renderers":[{"id":"d106d538-3dcc-4e09-9bed-f5e9d651859b","type":"LinearAxis"},{"id":"df6a56f7-7944-4ee8-b18f-76f4d4018ff5","type":"Grid"},{"id":"ad7d7aee-8691-408e-b3eb-6e4841da5484","type":"LinearAxis"},{"id":"73029fe5-65fe-4d29-9172-1743b6d3c87e","type":"Grid"},{"id":"6b401a24-29c7-4347-acd5-d5a6f3c5f66d","type":"BoxAnnotation"},{"id":"8a6df631-5b81-4d3c-9d0a-66471fa1c9b1","type":"BoxAnnotation"},{"id":"15cb7b3b-f919-45b8-8c2c-fbf670aab606","type":"PolyAnnotation"},{"id":"a2cf1e9a-7a11-4714-9fc6-450b1310527d","type":"GlyphRenderer"},{"id":"f4fde34c-6d17-4248-b628-a94d5ea2eb6e","type":"GlyphRenderer"},{"id":"90d58870-2c5e-4e3c-806c-a12bd9a64c45","type":"GlyphRenderer"},{"id":"78273969-f5ab-4456-a97a-5cf5ebff74dc","type":"GlyphRenderer"},{"id":"a0eb7bd7-8e5e-47aa-b909-70d53398d2c1","type":"GlyphRenderer"},{"id":"6b581c5d-1b02-4ca1-8bfc-1db3af51ee7f","type":"GlyphRenderer"},{"id":"c4b45448-e0b8-46ae-9d78-7f5540a7aa5d","type":"Legend"}],"right":[{"id":"c4b45448-e0b8-46ae-9d78-7f5540a7aa5d","type":"Legend"}],"title":{"id":"75fff4e3-46c7-4140-a209-b6065a97f7a7","type":"Title"},"toolbar":{"id":"a4f7e5ce-b3aa-49a9-a407-c0a12caa5b37","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"1c161deb-bd92-414b-9bb1-47152c70799c","type":"DataRange1d"},"x_scale":{"id":"4badf05d-6c24-4923-9c68-7ef30e98d82b","type":"LinearScale"},"y_range":{"id":"bb8413a5-b922-4d0c-83f7-1b107d29dd52","type":"DataRange1d"},"y_scale":{"id":"1f6f8718-edc3-42e8-b4dc-5f8351472d28","type":"LinearScale"}},"id":"6a5f22f1-71ef-4fc2-8cda-5c69b459985a","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"Humbug"},"renderers":[{"id":"78273969-f5ab-4456-a97a-5cf5ebff74dc","type":"GlyphRenderer"}]},"id":"4cb15e46-4558-4936-a274-6641aadbd951","type":"LegendItem"},{"attributes":{"label":{"value":"Favourite Worst Nightmare (Standard Version)"},"renderers":[{"id":"a0eb7bd7-8e5e-47aa-b909-70d53398d2c1","type":"GlyphRenderer"}]},"id":"869092a9-ba11-4a52-9889-bec997bacfd1","type":"LegendItem"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"f8d2e68c-9a6c-4bcd-b0cc-14a840a18216","type":"BasicTickFormatter"},"major_label_text_font_size":{"value":"0pt"},"major_tick_line_color":{"value":null},"minor_tick_line_color":{"value":null},"plot":{"id":"6a5f22f1-71ef-4fc2-8cda-5c69b459985a","subtype":"Figure","type":"Plot"},"ticker":{"id":"02047c51-6231-42f2-bce0-f5970b109a3e","type":"BasicTicker"}},"id":"ad7d7aee-8691-408e-b3eb-6e4841da5484","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"0a742256-7703-4f13-9f07-145b40f4eb72","type":"Circle"},{"attributes":{"label":{"value":"Tranquility Base Hotel &amp; Casino"},"renderers":[{"id":"a2cf1e9a-7a11-4714-9fc6-450b1310527d","type":"GlyphRenderer"}]},"id":"06dd9d92-bddf-4275-94bf-421b5ad7b421","type":"LegendItem"},{"attributes":{"label":{"value":"Suck It and See"},"renderers":[{"id":"90d58870-2c5e-4e3c-806c-a12bd9a64c45","type":"GlyphRenderer"}]},"id":"0cd37f52-7d19-49f8-8a60-99e1c38c8ff9","type":"LegendItem"},{"attributes":{},"id":"1f6f8718-edc3-42e8-b4dc-5f8351472d28","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["album_name","song_name","album_number","x","y","index"],"data":{"album_name":["Humbug","Humbug","Humbug","Humbug","Humbug","Humbug","Humbug","Humbug","Humbug","Humbug"],"album_number":[3,3,3,3,3,3,3,3,3,3],"index":[35,36,37,38,39,40,41,42,43,44],"song_name":["My Propeller","Crying Lightning","Dangerous Animals","Secret Door","Potion Approaching","Fire And The Thud","Cornerstone","Dance Little Liar","Pretty Visitors","The Jeweller&#x27;s Hands"],"x":{"__ndarray__":"fZ2tw1pyrcHvIhfDjJxkw73Kkb9jxtpCrtHowqigsEMXiLfDpjEKRA==","dtype":"float32","shape":[10]},"y":{"__ndarray__":"Ux9zw5/qBkPLyIVDWfxeQ2G5oMPzhqDD8m0ywvqxSkPSLVFDtMWqQQ==","dtype":"float32","shape":[10]}}},"id":"4ae15d11-8b05-4997-8ab1-f6461bf3542c","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["album_name","song_name","album_number","x","y","index"],"data":{"album_name":["Suck It and See","Suck It and See","Suck It and See","Suck It and See","Suck It and See","Suck It and See","Suck It and See","Suck It and See","Suck It and See","Suck It and See","Suck It and See","Suck It and See"],"album_number":[4,4,4,4,4,4,4,4,4,4,4,4],"index":[23,24,25,26,27,28,29,30,31,32,33,34],"song_name":["She&#x27;s Thunderstorms","Black Treacle","Brick By Brick","The Hellcat Spangled Shalalala","Don&#x27;t Sit Down &#x27;Cause I&#x27;ve Moved Your Chair","Library Pictures","All My Own Stunts","Reckless Serenade","Piledriver Waltz","Love is a Laserquest","Suck It and See","That&#x27;s Where You&#x27;re Wrong"],"x":{"__ndarray__":"KFxiwjCSh8OYssvCWcFLwpKv6MIoNKzDLWVHw81cFkN886JBFmPWwuEtOsNWo/nC","dtype":"float32","shape":[12]},"y":{"__ndarray__":"GgSPQkgWH0OZOKtDTIFSQ5edTUPURMVCuoOCQqhUOsL41UFDWp0KwybkH0NZmElC","dtype":"float32","shape":[12]}}},"id":"9f4288b7-1279-414f-8246-7658a090053a","type":"ColumnDataSource"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"93783025-625c-4d48-972a-ba9145bf5d0f","type":"BasicTickFormatter"},"major_label_text_font_size":{"value":"0pt"},"major_tick_line_color":{"value":null},"minor_tick_line_color":{"value":null},"plot":{"id":"6a5f22f1-71ef-4fc2-8cda-5c69b459985a","subtype":"Figure","type":"Plot"},"ticker":{"id":"4de3e902-35e7-4275-8397-8e9848b3ef5a","type":"BasicTicker"}},"id":"d106d538-3dcc-4e09-9bed-f5e9d651859b","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.95},"fill_color":{"value":"#c6dbef"},"line_alpha":{"value":0.95},"line_color":{"value":"#c6dbef"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"a17866f6-c266-4287-8838-c67fc575c396","type":"Circle"},{"attributes":{"callback":null,"column_names":["album_name","song_name","album_number","x","y","index"],"data":{"album_name":["Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not","Whatever People Say I Am, That&#x27;s What I&#x27;m Not"],"album_number":[1,1,1,1,1,1,1,1,1,1,1,1,1],"index":[57,58,59,60,61,62,63,64,65,66,67,68,69],"song_name":["The View From The Afternoon","I Bet You Look Good On The Dancefloor","Fake Tales Of San Francisco","Dancing Shoes","You Probably Couldn&#x27;t See For The Lights But You Were Staring Straight At Me","Still Take You Home","Riot Van","Red Light Indicates Doors Are Secured","Mardy Bum","Perhaps Vampires Is A Bit Strong But\\u2026","When The Sun Goes Down","From The Ritz To The Rubble","A Certain Romance"],"x":{"__ndarray__":"bNbswu0nOcOXDGLCQd9Pwt/nj8O6bh5CtwOTQwOIVkKnUWNDzR2/w8olNsPnQHjDv027ww==","dtype":"float32","shape":[13]},"y":{"__ndarray__":"eecCQ4x9vsKyYCnBtUi5wqrkVsCBKrVDsL5Tw27FUsNgGSPDHYqNQf41E8Hs669DtOuXwg==","dtype":"float32","shape":[13]}}},"id":"bc225b00-82f2-4825-9998-d613b3a3e030","type":"ColumnDataSource"},{"attributes":{"label":{"value":"AM"},"renderers":[{"id":"f4fde34c-6d17-4248-b628-a94d5ea2eb6e","type":"GlyphRenderer"}]},"id":"ffaab3ad-2987-498f-8e6f-f8f1cf20549b","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#6baed6"},"line_alpha":{"value":0.1},"line_color":{"value":"#6baed6"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"7afe86be-57b2-4ef5-b79d-4fe1c5c15661","type":"Circle"},{"attributes":{"callback":null},"id":"1c161deb-bd92-414b-9bb1-47152c70799c","type":"DataRange1d"}],"root_ids":["6a5f22f1-71ef-4fc2-8cda-5c69b459985a"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"b79bc79a-d699-48c8-b627-1cead77d87ab","elementid":"980918ea-5ac9-4591-8989-9c0640591015","modelid":"6a5f22f1-71ef-4fc2-8cda-5c69b459985a"}];
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