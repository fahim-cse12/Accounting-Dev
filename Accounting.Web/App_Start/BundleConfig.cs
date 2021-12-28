using System.Web;
using System.Web.Optimization;

namespace Accounting.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/jquery-3.4.1.js",
                      "~/Scripts/moment.min.js",
                      "~/Scripts/respond.min.js",
                      "~/Scripts/jquery.dataTables.min.js",
                      "~/Scripts/dataTables.bootstrap5.js",
                      "~/Scripts/jspdf.min.js",
                      "~/Scripts/xlsx.full.min.js",
                      "~/Scripts/fabric.require.min.js"
                      ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/angular-material.css",
                       "~/Content/dataTables.bootstrap5.css",
                       "~/Content/sweetalert.css"
                      
                      ));
            bundles.Add(new ScriptBundle("~/bundles/angularJs").Include(
                      "~/Scripts/AngularJs/angular.min.js",
                      "~/Scripts/AngularJs/angular-route.min.js",
                      "~/Scripts/AngularJs/angular-aria.min.js",
                      "~/Scripts/AngularJs/angular-animate.min.js",
                      "~/Scripts/AngularJs/angular-material.min.js",
                      "~/Scripts/AngularJs/angular-messages.min.js",
                      "~/Scripts/AngularJs/angular-messages.min.js",
                      "~/Scripts/AngularJs/angular-datatables.min.js"
                     
                     ));

            bundles.Add(new ScriptBundle("~/bundles/sweetalert").Include(
                      "~/Scripts/sweetalert.min.js"
                      ));
        }
    }
}
